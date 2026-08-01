/* ============================================================
   Zhuomao Mo — Personal Academic Homepage
   main.js : profile config, publication data, i18n, rendering
   ============================================================ */

/* ------------------------------------------------------------
   1) PROFILE — edit these to point to your real accounts
   ------------------------------------------------------------ */
const PROFILE = {
  email: "zhuomao.mo@zju.edu.cn", // TODO: replace with your real email
  googleScholar: "#",             // TODO: e.g. https://scholar.google.com/citations?user=XXXX
  orcid: "#",                     // TODO: e.g. https://orcid.org/0000-0000-0000-0000
  pubmed: "https://pubmed.ncbi.nlm.nih.gov/?term=Mo+Zhuomao%5BAuthor%5D",
  loop: "https://loop.frontiersin.org/people/2877308/overview",
  github: "#",                    // TODO: optional
};

/* ------------------------------------------------------------
   2) METRICS — update as Google Scholar grows
   ------------------------------------------------------------ */
const METRICS = {
  papers: "3+",
  citations: "148",
  hIndex: "2",
};

/* ------------------------------------------------------------
   3) PUBLICATIONS — add new papers to the top of this array
   ------------------------------------------------------------ */
const PUBLICATIONS = [
  {
    id: "nejm2024",
    title: "Sequential CD7 CAR T-Cell Therapy and Allogeneic HSCT without GVHD Prophylaxis",
    journal: "New England Journal of Medicine",
    year: 2024,
    volume: "390(16): 1467–1480",
    doi: "10.1056/NEJMoa2313812",
    pmid: "38657244",
    citations: 95,
    featured: true,
    authors: ["Hu Y", "Zhang M", "Yang T", "Mo Z", "Wei G", "Jing R", "Zhao H", "Chen R", "Zu C", "Gu T", "Xiao P", "Hong R", "Feng J", "Fu S", "Kong D", "Xu H", "Cui J", "Huang S", "Liang B", "Yuan X", "Cui Q", "Guo H", "Yu Y", "Feng Y", "Jin C", "Ren J", "Chang AH", "Wang D", "Huang H"],
    tags: ["CD7 CAR-T", "HSCT", "T-ALL/LBL", "GVHD"],
    summaryEn: "A single-center study integrating CD7 CAR T-cell therapy with allogeneic hematopoietic stem-cell transplantation (HSCT) without GVHD prophylaxis in relapsed/refractory T-cell acute lymphoblastic leukemia/lymphoma (T-ALL/LBL), achieving durable remission with reduced conditioning intensity.",
    summaryZh: "单中心研究：在复发/难治性T细胞急性淋巴细胞白血病/淋巴瘤（T-ALL/LBL）中，以CD7 CAR T细胞治疗作为桥接、不行GVHD预防的异基因造血干细胞移植（HSCT）策略，以较低的预处理强度实现持久缓解。"
  },
  {
    id: "crm2025",
    title: "CD70-targeted iPSC-derived CAR-NK cells display potent function against tumors and alloreactive T cells",
    journal: "Cell Reports Medicine",
    year: 2025,
    volume: "6(1): 101889",
    doi: "10.1016/j.xcrm.2024.101889",
    pmid: "39793572",
    pmc: "PMC11866492",
    citations: 53,
    featured: false,
    authors: ["Wang L", "Wang Y", "He X", "Mo Z", "Zhao M", "Liang X", "Hu K", "Wang K", "Yue Y", "Mo G", "Zhou Y", "Hong R", "Zhou L", "Feng Y", "Chen N", "Shen L", "Song X", "Zeng W", "Jia X", "Shao Y", "Zhang P", "Xu M", "Wang D", "Hu Y", "Yang L", "Huang H"],
    tags: ["iPSC", "CAR-NK", "CD70", "Universal cell therapy"],
    summaryEn: "Development of CD70-targeted chimeric antigen receptor NK (CAR-NK) cells derived from induced pluripotent stem cells. These 'off-the-shelf' CAR-NK cells showed potent anti-tumor function and suppressed alloreactive T cells, offering a promising universal cellular immunotherapy.",
    summaryZh: "开发了靶向CD70的诱导多能干细胞（iPSC）来源CAR-NK细胞。这种“现货型”CAR-NK细胞对CD70阳性肿瘤具有强效杀伤功能，并能抑制同种异体反应性T细胞，是一种极具前景的通用型细胞免疫治疗。"
  },
  {
    id: "tct2026",
    title: "Long-Term Follow-Up of CD19 CAR-T for R/R B-NHL: Ki-67 as a Prognostic Factor for Sustained Remission",
    journal: "Transplantation and Cellular Therapy",
    year: 2026,
    volume: "",
    doi: "10.1016/j.jtct.2026.05.010",
    pmid: "42134593",
    citations: 0,
    featured: false,
    authors: ["Yu Y", "Wang W", "Mo Z", "Teng Y", "Zhang M", "Wang D", "Fu S", "Cui J", "Huang S", "Huang H", "Hu Y", "Wei G"],
    tags: ["CD19 CAR-T", "B-NHL", "Ki-67", "Long-term outcome"],
    summaryEn: "Long-term follow-up of CD19 CAR T-cell therapy in relapsed/refractory B-cell non-Hodgkin lymphoma (R/R B-NHL), identifying tumor cell Ki-67 proliferation index as a prognostic factor for sustained remission and long-term outcomes.",
    summaryZh: "对CD19 CAR T细胞治疗复发/难治性B细胞非霍奇金淋巴瘤（R/R B-NHL）患者的长期随访研究，发现肿瘤细胞Ki-67增殖指数是预测持续缓解与长期预后的重要因素。"
  }
];

/* ------------------------------------------------------------
   4) I18N — English / Chinese UI strings
   ------------------------------------------------------------ */
const I18N = {
  en: {
    "nav.name": "Zhuomao Mo",
    "nav.about": "About",
    "nav.research": "Research",
    "nav.publications": "Publications",
    "nav.news": "News",
    "nav.contact": "Contact",
    "hero.eyebrow": "Postdoctoral Researcher · Cellular Immunotherapy",
    "hero.subtitle": "Bone Marrow Transplantation Center, First Affiliated Hospital & Liangzhu Laboratory, Zhejiang University School of Medicine",
    "hero.tagline": "Engineering chimeric antigen receptor T & NK cells to transform the treatment of blood cancers.",
    "hero.btnPapers": "View Publications",
    "hero.btnContact": "Get in Touch",
    "hero.linkScholar": "Google Scholar",
    "hero.linkPubMed": "PubMed",
    "hero.linkOrcid": "ORCID",
    "hero.linkLoop": "Loop",
    "hero.statPapers": "Publications",
    "hero.statCites": "Citations",
    "hero.statH": "h-index",
    "about.kicker": "About",
    "about.title": "About Me",
    "about.p1": "I am a postdoctoral researcher at the Bone Marrow Transplantation Center of the First Affiliated Hospital, Zhejiang University School of Medicine, and the Liangzhu Laboratory, working at the interface of cellular immunotherapy and cancer genomics.",
    "about.p2": "My work focuses on engineering chimeric antigen receptor (CAR) T and NK cells for hematologic malignancies, integrating allogeneic transplantation with CAR-based bridging therapy, and applying single-cell and spatial multi-omics to dissect the tumor immune microenvironment.",
    "about.p3": "My research has been published in the New England Journal of Medicine and Cell Reports Medicine, covering next-generation CAR-T strategies and iPSC-derived \u201coff-the-shelf\u201d CAR-NK cells.",
    "about.chip1": "CAR-T / CAR-NK",
    "about.chip2": "AML & T-ALL",
    "about.chip3": "Single-cell omics",
    "about.chip4": "Tumor immunology",
    "about.cardTitle": "Current Position",
    "about.pos1Title": "Postdoctoral Researcher",
    "about.pos1Detail": "Bone Marrow Transplantation Center, First Affiliated Hospital, Zhejiang University School of Medicine",
    "about.pos2Title": "Affiliated Lab",
    "about.pos2Detail": "Liangzhu Laboratory · Institute of Hematology, Zhejiang University",
    "about.pos3Title": "Location",
    "about.pos3Detail": "Hangzhou, Zhejiang, China",
    "research.kicker": "Research",
    "research.title": "Research Interests",
    "research.r1Title": "Cellular Immunotherapy",
    "research.r1Desc": "Engineering next-generation CAR-T and CAR-NK cells for hematologic malignancies, including iPSC-derived universal cell products.",
    "research.r2Title": "Hematologic Malignancies",
    "research.r2Desc": "Acute myeloid leukemia, T-cell acute lymphoblastic leukemia/lymphoma, and B-cell lymphoma — biology and novel therapeutic strategies.",
    "research.r3Title": "Single-Cell & Spatial Omics",
    "research.r3Desc": "Decoding the tumor immune microenvironment at single-cell and spatial resolution to guide immunotherapy design.",
    "research.r4Title": "Tumor Immunology",
    "research.r4Desc": "Mechanisms of immune evasion, myeloid cell biology, and the immunosuppressive microenvironment of blood cancers.",
    "research.r5Title": "Computational Biology & ML",
    "research.r5Desc": "Biomarker discovery and prognostic modeling for precision medicine using multi-omics data and machine learning.",
    "research.r6Title": "Transplant Immunology",
    "research.r6Desc": "Optimizing the integration of CAR-based therapy with allogeneic hematopoietic stem-cell transplantation.",
    "pubs.kicker": "Publications",
    "pubs.title": "Selected Publications",
    "pubs.note": "Contributing author shown in bold.",
    "pubs.footnote": "For the most up-to-date list, see my Google Scholar profile.",
    "news.kicker": "News",
    "news.title": "News & Updates",
    "news.n1Title": "CD19 CAR-T long-term follow-up published",
    "news.n1Desc": "Our long-term follow-up study of CD19 CAR-T in relapsed/refractory B-cell NHL — identifying Ki-67 as a prognostic factor for sustained remission — is out in Transplantation and Cellular Therapy.",
    "news.n2Title": "iPSC-derived CAR-NK cells in Cell Reports Medicine",
    "news.n2Desc": "Our study on CD70-targeted iPSC-derived CAR-NK cells — potent against tumors and alloreactive T cells — was published in Cell Reports Medicine.",
    "news.n3Title": "Landmark study in the New England Journal of Medicine",
    "news.n3Desc": "Sequential CD7 CAR T-cell therapy followed by allogeneic HSCT without GVHD prophylaxis — a new paradigm for T-ALL/LBL — published in NEJM.",
    "contact.kicker": "Contact",
    "contact.title": "Get in Touch",
    "contact.emailTitle": "Email",
    "contact.scholarTitle": "Google Scholar",
    "contact.scholarDesc": "Citations & full profile",
    "contact.pubmedTitle": "PubMed",
    "contact.pubmedDesc": "Indexed publications",
    "contact.orcidTitle": "ORCID",
    "contact.orcidDesc": "Researcher identifier",
    "footer.copyright": "© 2026 Zhuomao Mo (莫灼锚). All rights reserved.",
    "footer.note": "Designed & built for an academic career in cellular immunotherapy."
  },
  zh: {
    "nav.name": "莫灼锚",
    "nav.about": "关于我",
    "nav.research": "研究方向",
    "nav.publications": "代表性论文",
    "nav.news": "最新动态",
    "nav.contact": "联系方式",
    "hero.eyebrow": "博士后研究员 · 细胞免疫治疗",
    "hero.subtitle": "浙江大学医学院附属第一医院骨髓移植中心 & 良渚实验室",
    "hero.tagline": "致力于工程化嵌合抗原受体 T 细胞与 NK 细胞，改变血液肿瘤的治疗格局。",
    "hero.btnPapers": "查看论文",
    "hero.btnContact": "与我联系",
    "hero.linkScholar": "Google Scholar",
    "hero.linkPubMed": "PubMed",
    "hero.linkOrcid": "ORCID",
    "hero.linkLoop": "Loop",
    "hero.statPapers": "发表论文",
    "hero.statCites": "引用次数",
    "hero.statH": "h-index",
    "about.kicker": "简介",
    "about.title": "关于我",
    "about.p1": "我是浙江大学医学院附属第一医院骨髓移植中心与良渚实验室的博士后研究员，从事细胞免疫治疗与肿瘤基因组学的交叉研究。",
    "about.p2": "我的研究聚焦于为血液肿瘤工程化嵌合抗原受体（CAR）T细胞与NK细胞，将异基因移植与CAR桥接治疗相结合，并运用单细胞与空间多组学解析肿瘤免疫微环境。",
    "about.p3": "研究成果发表于《新英格兰医学杂志》（NEJM）与《Cell Reports Medicine》，涵盖新一代CAR-T策略与iPSC来源的“现货型”CAR-NK细胞。",
    "about.chip1": "CAR-T / CAR-NK",
    "about.chip2": "AML 与 T-ALL",
    "about.chip3": "单细胞组学",
    "about.chip4": "肿瘤免疫学",
    "about.cardTitle": "当前职位",
    "about.pos1Title": "博士后研究员",
    "about.pos1Detail": "浙江大学医学院附属第一医院骨髓移植中心",
    "about.pos2Title": "所属实验室",
    "about.pos2Detail": "良渚实验室 · 浙江大学血液学研究所",
    "about.pos3Title": "所在城市",
    "about.pos3Detail": "中国 · 浙江 · 杭州",
    "research.kicker": "研究",
    "research.title": "研究方向",
    "research.r1Title": "细胞免疫治疗",
    "research.r1Desc": "为血液肿瘤工程化新一代CAR-T与CAR-NK细胞，包括iPSC来源的通用型细胞产品。",
    "research.r2Title": "血液肿瘤",
    "research.r2Desc": "急性髓系白血病、T细胞急性淋巴细胞白血病/淋巴瘤与B细胞淋巴瘤的生物学及新型治疗策略。",
    "research.r3Title": "单细胞与空间组学",
    "research.r3Desc": "在单细胞与空间分辨率下解析肿瘤免疫微环境，指导免疫治疗设计。",
    "research.r4Title": "肿瘤免疫学",
    "research.r4Desc": "免疫逃逸机制、髓系细胞生物学与血液肿瘤的免疫抑制微环境。",
    "research.r5Title": "计算生物学与机器学习",
    "research.r5Desc": "基于多组学数据与机器学习开发生物标志物与预后模型，助力精准医学。",
    "research.r6Title": "移植免疫学",
    "research.r6Desc": "优化CAR疗法与异基因造血干细胞移植的整合策略。",
    "pubs.kicker": "论文",
    "pubs.title": "代表性论文",
    "pubs.note": "加粗为本人。",
    "pubs.footnote": "最新完整列表请见我的 Google Scholar 主页。",
    "news.kicker": "动态",
    "news.title": "最新动态",
    "news.n1Title": "CD19 CAR-T 长期随访研究发表",
    "news.n1Desc": "我们在复发/难治性B细胞NHL中的CD19 CAR-T长期随访研究——揭示Ki-67是持续缓解的预后因素——发表于《Transplantation and Cellular Therapy》。",
    "news.n2Title": "iPSC来源CAR-NK细胞登上 Cell Reports Medicine",
    "news.n2Desc": "我们关于CD70靶向iPSC来源CAR-NK细胞（对肿瘤与同种异体反应性T细胞均具强效活性）的研究发表于《Cell Reports Medicine》。",
    "news.n3Title": "NEJM 里程碑式研究",
    "news.n3Desc": "序贯CD7 CAR-T治疗后行不行GVHD预防的异基因HSCT——T-ALL/LBL治疗新范式——发表于《新英格兰医学杂志》（NEJM）。",
    "contact.kicker": "联系",
    "contact.title": "与我联系",
    "contact.emailTitle": "邮箱",
    "contact.scholarTitle": "Google Scholar",
    "contact.scholarDesc": "引用与完整档案",
    "contact.pubmedTitle": "PubMed",
    "contact.pubmedDesc": "索引论文",
    "contact.orcidTitle": "ORCID",
    "contact.orcidDesc": "学者唯一标识",
    "footer.copyright": "© 2026 莫灼锚（Zhuomao Mo）. 保留所有权利。",
    "footer.note": "为细胞免疫治疗的学术生涯而设计。"
  }
};

/* ------------------------------------------------------------
   Helpers
   ------------------------------------------------------------ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function applyLanguage(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.documentElement.setAttribute("data-i18n-lang", lang);

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // Language toggle button styling
  const btn = $("#langToggle");
  btn.innerHTML = lang === "en"
    ? '<span class="lang-en lang-active">EN</span><span class="lang-divider">/</span><span class="lang-zh">中文</span>'
    : '<span class="lang-en">EN</span><span class="lang-divider">/</span><span class="lang-zh lang-active">中文</span>';

  localStorage.setItem("zm-lang", lang);
}

/* ------------------------------------------------------------
   Render publications
   ------------------------------------------------------------ */
function renderAuthors(authors) {
  return authors.map((a) =>
    a === "Mo Z"
      ? '<span class="me">' + a + "</span>"
      : a
  ).join(", ");
}

function pubLinks(p) {
  const links = [];
  if (p.doi) links.push('<a class="meta-link" href="https://doi.org/' + p.doi + '" target="_blank" rel="noopener">DOI</a>');
  if (p.pmid) links.push('<a class="meta-link" href="https://pubmed.ncbi.nlm.nih.gov/' + p.pmid + '/" target="_blank" rel="noopener">PubMed</a>');
  if (p.pmc) links.push('<a class="meta-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/' + p.pmc + '/" target="_blank" rel="noopener">PMC</a>');
  return links.join("");
}

function renderPublications(lang) {
  const list = $("#pubList");
  list.innerHTML = PUBLICATIONS.map((p) => {
    const featured = p.featured;
    const badge = featured
      ? '<span class="pub-badge badge-featured">★ Featured / 亮点</span>'
      : '<span class="pub-badge badge-default">Publication / 论文</span>';
    const summary = lang === "zh" ? p.summaryZh : p.summaryEn;
    const titleLink = p.doi
      ? '<a href="https://doi.org/' + p.doi + '" target="_blank" rel="noopener">' + p.title + "</a>"
      : p.title;
    const citePill = p.citations > 0
      ? '<span class="cite-pill">Cited ' + p.citations + "×</span>"
      : "";
    return (
      '<article class="pub-card' + (featured ? " featured" : "") + '">' +
        badge +
        '<h3 class="pub-title">' + titleLink + "</h3>" +
        '<p class="pub-authors">' + renderAuthors(p.authors) + "</p>" +
        '<p class="pub-venue"><span class="journal">' + p.journal + "</span>" +
          (p.volume ? " · " + p.volume : "") +
          ' · <span class="year">' + p.year + "</span></p>" +
        (summary ? '<p class="pub-summary">' + summary + "</p>" : "") +
        '<div class="pub-meta">' +
          (p.tags || []).map((t) => '<span class="meta-tag">' + t + "</span>").join("") +
          citePill +
          pubLinks(p) +
        "</div>" +
      "</article>"
    );
  }).join("");
}

/* ------------------------------------------------------------
   Wire up links + metrics
   ------------------------------------------------------------ */
function setupProfile() {
  const links = {
    linkScholar: PROFILE.googleScholar,
    linkScholarCard: PROFILE.googleScholar,
    linkPubMed: PROFILE.pubmed,
    linkPubMedCard: PROFILE.pubmed,
    linkORCID: PROFILE.orcid,
    linkOrcidCard: PROFILE.orcid,
    linkLoop: PROFILE.loop,
  };
  Object.keys(links).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = links[id];
  });

  const contactEmail = $("#contactEmail");
  if (contactEmail) contactEmail.href = "mailto:" + PROFILE.email;
  const emailVal = $("#contactEmailValue");
  if (emailVal) emailVal.textContent = PROFILE.email;

  $("#statPapers").textContent = METRICS.papers;
  $("#statCites").textContent = METRICS.citations;
  $("#statH").textContent = METRICS.hIndex;
}

/* ------------------------------------------------------------
   Scroll / nav behaviors
   ------------------------------------------------------------ */
function setupScrollEffects() {
  const nav = $("#navbar");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  const targets = $$(".section-head, .pub-card, .research-card, .about-card, .timeline-item, .contact-card, .stat-card");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = (i % 4) * 60 + "ms";
    io.observe(el);
  });

  // Mobile nav
  const burger = $("#navBurger");
  const navLinks = $("#navLinks");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      burger.classList.remove("open");
      navLinks.classList.remove("open");
    })
  );
}

/* ------------------------------------------------------------
   Init
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("zm-lang") || "en";
  applyLanguage(saved);
  setupProfile();
  renderPublications(saved);
  setupScrollEffects();

  $("#langToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-i18n-lang") === "zh" ? "zh" : "en";
    const next = current === "en" ? "zh" : "en";
    applyLanguage(next);
    renderPublications(next);
  });
});
