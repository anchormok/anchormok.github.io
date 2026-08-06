#!/usr/bin/env python3
"""
Auto-update publications data for the Zhuomao Mo academic homepage.

Run by GitHub Actions on a daily schedule. It:

  1. Fetches the latest publication list for "Mo Zhuomao" from the PubMed
     E-utilities API (stable, official, no API key required).
  2. Diffs those PMIDs against the papers already curated in js/main.js and
     writes any *new* papers to data/live.json so the site can display them
     for review (first/corresponding vs co-author is guessed from author
     position and marked as "pending review").
  3. Best-effort refreshes the citation metrics (papers / citations / h-index)
     from Google Scholar via the `scholarly` package (matches the numbers the
     site currently shows). If Google Scholar is unreachable, the existing
     metrics are left untouched rather than showing wrong values.

The script is fail-safe: it never crashes the workflow over metric scraping —
new-paper detection always runs and is published.
"""

import json
import os
import re
import sys
import urllib.parse
import urllib.request

REPO_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAIN_JS = os.path.join(REPO_DIR, "js", "main.js")
LIVE_JSON = os.path.join(REPO_DIR, "data", "live.json")

AUTHOR_TERM = "Mo Zhuomao[Author]"
GS_SCHOLAR_ID = "8a32kCgAAAAJ"
TOOL = "zm-homepage-auto"
EMAIL = "anchormok@zju.edu.cn"


def http_get_json(url, timeout=30):
    req = urllib.request.Request(
        url, headers={"User-Agent": "Mozilla/5.0 (compatible; zm-homepage-updater)"}
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return json.loads(resp.read().decode("utf-8"))


# ---------------------------------------------------------------- PubMed ----
def fetch_pubmed_papers():
    """Return a list of papers authored by Mo Zhuomao from PubMed."""
    base = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
    esearch = base + "esearch.fcgi?" + urllib.parse.urlencode(
        {
            "db": "pubmed",
            "term": AUTHOR_TERM,
            "retmax": "200",
            "retmode": "json",
            "tool": TOOL,
            "email": EMAIL,
        }
    )
    ids = http_get_json(esearch)["esearchresult"].get("idlist", [])
    if not ids:
        print("  PubMed returned no results.")
        return []

    esummary = base + "esummary.fcgi?" + urllib.parse.urlencode(
        {
            "db": "pubmed",
            "id": ",".join(ids[:200]),
            "retmode": "json",
            "tool": TOOL,
            "email": EMAIL,
        }
    )
    result = http_get_json(esummary).get("result", {})
    papers = []
    for uid in ids[:200]:
        r = result.get(uid)
        if not r or r.get("pubtype", [""])[0] == "Retracted Publication":
            continue
        authors = [a.get("name", "") for a in r.get("authors", []) if a.get("name")]
        year = 0
        m = re.search(r"(\d{4})", (r.get("pubdate") or "") + " " + (r.get("epubdate") or ""))
        if m:
            year = int(m.group(1))
        volume = r.get("volume") or ""
        issue = r.get("issue") or ""
        pages = r.get("pages") or ""
        vol_str = volume
        if issue:
            vol_str += "(" + issue + ")"
        if pages:
            vol_str += ": " + pages
        papers.append(
            {
                "pmid": uid,
                "title": (r.get("title") or "").rstrip("."),
                "journal": r.get("fulljournalname") or r.get("source") or "",
                "year": year,
                "volume": vol_str,
                "authors": authors,
            }
        )
    print(f"  PubMed: {len(papers)} papers found.")
    return papers


def is_mo_z(name):
    """Heuristic: does this author string refer to Mo Zhuomao?"""
    if not name:
        return False
    name = name.strip()
    lowered = name.lower()
    if lowered in ("mo z", "mo z m", "mo zhuomao", "zhuomao mo", "z mo", "zhuomao, mo"):
        return True
    parts = re.split(r"[\s,]+", name)
    return (
        len(parts) >= 2
        and parts[0].lower() == "mo"
        and parts[1].lstrip("(")[:1].lower() == "z"
    )


def classify(authors):
    """Guess role from author list position. First or last author is treated
    as first/corresponding; anything else as co-author. Always 'pending'."""
    if not authors:
        return "coauthor"
    if is_mo_z(authors[0]):
        return "first_author"
    if is_mo_z(authors[-1]):
        return "first_author"  # last author is usually the corresponding one
    return "coauthor"


def existing_pmids():
    text = open(MAIN_JS, encoding="utf-8").read()
    return set(re.findall(r'pmid:\s*"(\d+)"', text))


# --------------------------------------------------------------- metrics ----
# Google Scholar blocks scraping aggressively, so the fetch runs in a
# subprocess capped at GS_TIMEOUT seconds. If it times out or fails, we keep
# the existing metrics instead of showing wrong values.
GS_TIMEOUT = 90
GS_HELPER = r"""
import json, sys, socket
socket.setdefaulttimeout(15)
SCHOLAR_ID = %r
try:
    from scholarly import scholarly
except Exception:
    print(json.dumps(None)); sys.exit(0)
try:
    author = None
    try:
        author = next(scholarly.search_author_id(SCHOLAR_ID))
    except Exception:
        for cand in scholarly.search_author("Zhuomao Mo"):
            if cand.get("scholar_id") == SCHOLAR_ID:
                author = cand
                break
        if author is None:
            author = next(scholarly.search_author("Zhuomao Mo"))
    author = scholarly.fill(author)
    pubs = author.get("publications") or []
    print(json.dumps({
        "papers": len(pubs),
        "citations": author.get("citedby"),
        "hIndex": author.get("hindex"),
        "i10Index": author.get("i10index"),
        "source": "google_scholar",
    }))
except Exception as exc:
    print(json.dumps(None), file=sys.stderr)
    print(json.dumps(None))
""" % GS_SCHOLAR_ID


def fetch_metrics():
    """Best-effort metrics from Google Scholar. Returns dict or None."""
    import subprocess
    try:
        out = subprocess.run(
            [sys.executable, "-c", GS_HELPER],
            capture_output=True, text=True, timeout=GS_TIMEOUT,
        )
        line = (out.stdout or "").strip().splitlines()[-1] if out.stdout.strip() else "null"
        metrics = json.loads(line) if line else None
        if metrics:
            print(f"  Google Scholar metrics: {metrics}")
        else:
            print("  [warn] Google Scholar metrics unavailable; keeping existing metrics.")
        return metrics
    except subprocess.TimeoutExpired:
        print(f"  [warn] Google Scholar metrics timed out after {GS_TIMEOUT}s; keeping existing metrics.")
        return None
    except Exception as exc:
        print(f"  [warn] Google Scholar metrics failed ({exc}); keeping existing metrics.")
        return None


# ------------------------------------------------------------------ main ----
def main():
    print("== Updating publication data ==")

    # 1) New papers from PubMed
    papers = fetch_pubmed_papers()
    curated = existing_pmids()
    new_papers = []
    for p in papers:
        if p["pmid"] not in curated:
            entry = dict(p)
            entry["classification"] = classify(p["authors"])
            new_papers.append(entry)
    print(f"  Curated PMIDs: {len(curated)}; new papers to flag: {len(new_papers)}")

    # 2) Metrics (best effort)
    metrics = fetch_metrics()

    # 3) Build & write live.json
    payload = {
        "generated_at": None,  # filled below
        "source": "pubmed",
        "metrics": metrics,
        "new_papers": new_papers,
    }
    from datetime import datetime, timezone

    payload["generated_at"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    if metrics:
        payload["source"] = "pubmed + google_scholar"

    os.makedirs(os.path.dirname(LIVE_JSON), exist_ok=True)
    old = {}
    if os.path.exists(LIVE_JSON):
        try:
            old = json.load(open(LIVE_JSON, encoding="utf-8"))
        except Exception:
            old = {}

    if old == payload:
        print("  No changes; data/live.json already up to date.")
        return 0

    with open(LIVE_JSON, "w", encoding="utf-8") as fh:
        json.dump(payload, fh, ensure_ascii=False, indent=2)
    print(f"  Wrote {LIVE_JSON}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
