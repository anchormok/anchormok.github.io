# Zhuomao Mo 莫灼锚 — Personal Academic Homepage

A modern, bilingual (English / 中文), fully static academic homepage for **Zhuomao Mo (莫灼锚)**,
Postdoctoral Researcher at the Bone Marrow Transplantation Center, First Affiliated Hospital &
Liangzhu Laboratory, Zhejiang University School of Medicine.

## ✨ Features

- **Bilingual** — English by default, toggle to 中文 (persisted in `localStorage`)
- **Sections** — Hero / About / Research Interests / Selected Publications / News & Updates / Contact
- **Auto-rendered publications** from a data array — add papers without touching HTML
- **Verified publication metadata** (DOI, PubMed, PMC, citation counts) fetched from
  PubMed / Semantic Scholar
- Responsive, accessible, scroll-reveal animations, no build step required
- Zero dependencies — plain HTML / CSS / JS, deployable anywhere

## 🗂 Project structure

```
ZhuomaoMo_homepage/
├── index.html          # page skeleton & all static text (bilingual via data-i18n)
├── css/
│   └── style.css       # all styling & theme
├── js/
│   └── main.js         # profile config, publication data, i18n dict, rendering
└── assets/
    ├── avatar.svg      # placeholder avatar — REPLACE with your own photo
    └── favicon.svg     # site icon
```

## 🚀 Quick start

Just open `index.html` in a browser (double-click), or serve it locally:

```bash
# from the ZhuomaoMo_homepage folder
python3 -m http.server 8000
# then open http://localhost:8000
```

To deploy on **GitHub Pages**: push this folder to a repo, then enable Pages (branch `main`, root).

## ✏️ How to customize

### 1. Your photo
Replace `assets/photo.jpg` with your own square photo (already wired into the avatar).
The original `assets/avatar.svg` acts as an automatic fallback if the photo is missing.

### 2. Your accounts & contact
Open `js/main.js` and edit the `PROFILE` object:

```js
const PROFILE = {
  email: "zhuomao.mo@zju.edu.cn",          // ← your real email
  googleScholar: "#",                      // ← e.g. https://scholar.google.com/citations?user=XXXX
  orcid: "#",                              // ← e.g. https://orcid.org/0000-...
  pubmed: "https://pubmed.ncbi.nlm.nih.gov/?term=Mo+Zhuomao%5BAuthor%5D",
  loop: "https://loop.frontiersin.org/people/2877308/overview",
  github: "#",                             // optional
};
```

Update citation metrics in the `METRICS` object as your Google Scholar grows.

### 3. Add a new publication
The publication list is split into two groups in `js/main.js`:
- `PUBS_FIRST_AUTHOR` — first-author / corresponding-author papers
- `PUBS_COAUTHOR` — co-authored papers

Add an object to the relevant array (newest first):

```js
{
  id: "my2027",
  title: "Your Paper Title",
  journal: "Journal Name",
  year: 2027,
  volume: "1(1): 1-10",
  doi: "10.xxxx/xxxx",          // optional
  pmid: "12345678",             // optional
  pmc: "PMC1234567",            // optional
  citations: 12,
  featured: false,              // true → highlighted card
  role: true,                   // optional: show a role badge
  roleEn: "First author",       // badge text (EN)
  roleZh: "第一作者",            // badge text (ZH)
  authors: ["First A", "Mo Z", "Last A"],   // "Mo Z" is auto-bolded
  tags: ["Tag1", "Tag2"],
  summaryEn: "English one-line summary.",
  summaryZh: "中文一句话摘要。"
}
```

### 4. Edit text
UI text lives in the `I18N` object (`en` / `zh`) in `js/main.js`; HTML elements reference
strings via `data-i18n="key"`. Section structure lives in `index.html`.

## ✅ Publication metadata source

Publications were verified via the NCBI PubMed E-utilities API and the Semantic Scholar
Graph API (Aug 2026). Citation counts reflect the author's **Google Scholar** profile
(`https://scholar.google.com/citations?user=8a32kCgAAAAJ&hl=en`) at retrieval time.
