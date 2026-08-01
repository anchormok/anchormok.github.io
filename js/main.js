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
  papers: "18",      // 15 first/corresponding + 3 co-author
  citations: "499",  // sum of Semantic Scholar counts (update as they grow)
  hIndex: "13",
};

/* ------------------------------------------------------------
   3) PUBLICATIONS — two groups:
      PUBS_FIRST_AUTHOR : first-author / corresponding-author papers
      PUBS_COAUTHOR     : co-authored papers
   ------------------------------------------------------------ */
const PUBS_FIRST_AUTHOR = [
  // Fields: role: true, roleEn, roleZh (shows a badge), authors (["Mo Z"] is bolded).
  {
    id: "jtcm2024",
    title: "Integrating single-cell and spatial transcriptomics to elucidate the crosstalk between cancer-associated fibroblasts and cancer cells in hepatocellular carcinoma with spleen-deficiency syndrome",
    journal: "Journal of Traditional and Complementary Medicine",
    year: 2024,
    volume: "14(3): 321–334",
    doi: "10.1016/j.jtcme.2023.11.008",
    pmid: "38707923",
    pmc: "PMC11068993",
    citations: 7,
    featured: false,
    role: true,
    roleEn: "Corresponding author",
    roleZh: "通讯作者",
    authors: ["Chen Q", "Luo J", "Liu J", "Yu H", "Zhou M", "Yu L", "Chen Y", "Zhang S", "Mo Z"],
    tags: ["HCC", "Single-cell", "Spatial transcriptomics", "CAF"],
    summaryEn: "Integrated single-cell and spatial transcriptomics to dissect the crosstalk between cancer-associated fibroblasts (CAFs) and cancer cells in hepatocellular carcinoma (HCC) with spleen-deficiency syndrome, revealing a PDGF-driven CAF-cancer cell axis that remodels the extracellular matrix and blocks immune infiltration.",
    summaryZh: "整合单细胞与空间转录组学，解析脾虚证肝细胞癌中癌症相关成纤维细胞（CAF）与癌细胞之间的相互作用，揭示PDGF驱动的CAF-癌细胞轴通过重塑细胞外基质、形成物理屏障阻断免疫细胞浸润。"
  },
  {
    id: "jtm2022",
    title: "Single-cell transcriptomics reveals the role of Macrophage-Naïve CD4+ T cell interaction in the immunosuppressive microenvironment of primary liver carcinoma",
    journal: "Journal of Translational Medicine",
    year: 2022,
    volume: "20(1): 466",
    doi: "10.1186/s12967-022-03675-2",
    pmid: "36221095",
    citations: 30,
    featured: true,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Liu D", "Chen Y", "Luo J", "Li W", "Liu J", "Yu L", "Huang B", "Zhang S"],
    tags: ["HCC", "Single-cell", "T cell", "Tumor microenvironment"],
    summaryEn: "Used single-cell transcriptomics to map the immunosuppressive microenvironment of primary liver carcinoma, revealing that macrophage–naïve CD4+ T cell interactions shape immune suppression and correlate with poor prognosis.",
    summaryZh: "利用单细胞转录组学绘制原发性肝癌的免疫抑制微环境，揭示巨噬细胞与初始CD4+ T细胞的相互作用参与免疫抑制并与不良预后相关。"
  },
  {
    id: "hypoxic2021",
    title: "Hypoxic Characteristic in the Immunosuppressive Microenvironment of Hepatocellular Carcinoma",
    journal: "Frontiers in Immunology",
    year: 2021,
    volume: "12: 611058",
    doi: "10.3389/fimmu.2021.611058",
    pmid: "33679749",
    citations: 30,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Liu D", "Rong D", "Zhang S"],
    tags: ["HCC", "Hypoxia", "Immunosuppression"],
    summaryEn: "Characterized hypoxia-related features of the immunosuppressive tumor microenvironment in hepatocellular carcinoma and identified hypoxia-associated immune infiltration patterns.",
    summaryZh: "刻画肝细胞癌免疫抑制微环境中的缺氧特征，并识别与缺氧相关的免疫细胞浸润模式。"
  },
  {
    id: "ahr2021",
    title: "A Comprehensive Pan-Cancer Analysis of 33 Human Cancers Reveals the Immunotherapeutic Value of Aryl Hydrocarbon Receptor",
    journal: "Frontiers in Immunology",
    year: 2021,
    volume: "12: 564948",
    doi: "10.3389/fimmu.2021.564948",
    pmid: "34290693",
    citations: 13,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Li P", "Cao Z", "Zhang S"],
    tags: ["Pan-cancer", "AHR", "Immunotherapy"],
    summaryEn: "Performed a comprehensive pan-cancer analysis across 33 cancer types to reveal the immunotherapeutic value of the aryl hydrocarbon receptor (AHR).",
    summaryZh: "对33种癌症进行全面的泛癌分析，揭示芳香烃受体（AHR）的免疫治疗价值。"
  },
  {
    id: "5mc2020",
    title: "Novel Molecular Subtypes Associated With 5mC Methylation and Their Role in Hepatocellular Carcinoma Immunotherapy",
    journal: "Frontiers in Molecular Biosciences",
    year: 2020,
    volume: "7: 562441",
    doi: "10.3389/fmolb.2020.562441",
    pmid: "33195409",
    citations: 13,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Cao Z", "Luo S", "Chen Y", "Zhang S"],
    tags: ["HCC", "5mC methylation", "Immunotherapy"],
    summaryEn: "Identified novel molecular subtypes of hepatocellular carcinoma based on 5-methylcytosine (5mC) methylation and explored their role in immunotherapy response.",
    summaryZh: "基于5-甲基胞嘧啶（5mC）甲基化识别肝细胞癌的新型分子亚型，并探索其在免疫治疗应答中的作用。"
  },
  {
    id: "ctnnb12020",
    title: "An Integrative Analysis Reveals the Underlying Association Between CTNNB1 Mutation and Immunotherapy in Hepatocellular Carcinoma",
    journal: "Frontiers in Oncology",
    year: 2020,
    volume: "10: 853",
    doi: "10.3389/fonc.2020.00853",
    pmid: "32596147",
    citations: 13,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Wang Y", "Cao Z", "Li P", "Zhang S"],
    tags: ["HCC", "CTNNB1", "Immunotherapy"],
    summaryEn: "Revealed the association between CTNNB1 mutation and the immune microenvironment and immunotherapy response in hepatocellular carcinoma.",
    summaryZh: "揭示肝细胞癌中CTNNB1突变与免疫微环境及免疫治疗应答之间的关联。"
  },
  {
    id: "hypoxialuad2020",
    title: "Identification of a Hypoxia-Associated Signature for Lung Adenocarcinoma",
    journal: "Frontiers in Genetics",
    year: 2020,
    volume: "11: 647",
    doi: "10.3389/fgene.2020.00647",
    pmid: "32655624",
    citations: 67,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Yu L", "Cao Z", "Hu H", "Luo S", "Zhang S"],
    tags: ["LUAD", "Hypoxia", "Prognostic signature"],
    summaryEn: "Developed a hypoxia-associated gene signature for prognostic stratification of lung adenocarcinoma.",
    summaryZh: "构建肺腺癌的缺氧相关基因签名，用于预后分层。"
  },
  {
    id: "mtorc12020",
    title: "A Novel Signature Based on mTORC1 Pathway in Hepatocellular Carcinoma",
    journal: "Journal of Oncology",
    year: 2020,
    volume: "2020: 8291036",
    doi: "10.1155/2020/8291036",
    pmid: "33014055",
    citations: 8,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Zhang S", "Zhang S"],
    tags: ["HCC", "mTORC1", "Prognostic signature"],
    summaryEn: "Constructed a novel prognostic signature based on the mTORC1 pathway in hepatocellular carcinoma.",
    summaryZh: "基于mTORC1通路构建肝细胞癌的新型预后签名。"
  },
  {
    id: "yinchen2020",
    title: "An Integrative Analysis Reveals the Potential Mechanism between Herbal Medicine Yinchen and Immunoregulation in Hepatocellular Carcinoma",
    journal: "BioMed Research International",
    year: 2020,
    volume: "2020: 8886914",
    doi: "10.1155/2020/8886914",
    pmid: "33457419",
    citations: 11,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Cao Z", "Yu L", "Wang Y", "Li P", "Lin Y", "Zhang S"],
    tags: ["HCC", "Yinchen", "Immunoregulation"],
    summaryEn: "Integrative analysis revealing the potential mechanism by which the herbal medicine Yinchen modulates immunoregulation in hepatocellular carcinoma.",
    summaryZh: "整合分析揭示中药茵陈（Yinchen）调节肝细胞癌免疫调控的潜在机制。"
  },
  {
    id: "acl2020",
    title: "Comparative Efficacy of Graft Options in Anterior Cruciate Ligament Reconstruction: A Systematic Review and Network Meta-Analysis",
    journal: "Arthroscopy, Sports Medicine, and Rehabilitation",
    year: 2020,
    volume: "2(5): e645–e654",
    doi: "10.1016/j.asmr.2020.05.007",
    pmid: "33135006",
    citations: 25,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Li D", "Yang B", "Tang S"],
    tags: ["ACL reconstruction", "Network meta-analysis"],
    summaryEn: "Network meta-analysis comparing the efficacy of different graft options in anterior cruciate ligament reconstruction.",
    summaryZh: "通过网状Meta分析比较前交叉韧带重建中不同移植物选择的疗效。"
  },
  {
    id: "cervicallamino2020",
    title: "Comparison of three fixation modalities for unilateral open-door cervical laminoplasty: a systematic review and network meta-analysis",
    journal: "Neurosurgical Review",
    year: 2020,
    volume: "43: 813–823",
    doi: "10.1007/s10143-018-1035-0",
    pmid: "30259268",
    citations: 11,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Li D", "Zhang R", "Chang M", "Yang B", "Tang S"],
    tags: ["Cervical laminoplasty", "Spine surgery", "Network meta-analysis"],
    summaryEn: "Systematic review and network meta-analysis comparing three fixation modalities for unilateral open-door cervical laminoplasty.",
    summaryZh: "系统综述与网状Meta分析比较单开门颈椎椎板成形术的三种固定方式。"
  },
  {
    id: "tuina2019",
    title: "Comparisons of the Effectiveness and Safety of Tuina, Acupuncture, Traction, and Chinese Herbs for Lumbar Disc Herniation: A Systematic Review and Network Meta-Analysis",
    journal: "Evidence-Based Complementary and Alternative Medicine",
    year: 2019,
    volume: "2019: 6821310",
    doi: "10.1155/2019/6821310",
    pmid: "31015852",
    citations: 51,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Li D", "Zhang R", "Chang M", "Yang B", "Tang S"],
    tags: ["TCM", "Lumbar disc herniation", "Network meta-analysis"],
    summaryEn: "Network meta-analysis comparing the effectiveness and safety of Tuina, acupuncture, traction, and Chinese herbs for lumbar disc herniation.",
    summaryZh: "网状Meta分析比较推拿、针刺、牵引与中药治疗腰椎间盘突出症的有效性与安全性。"
  },
  {
    id: "exercisesurgery2018",
    title: "Exercise therapy versus surgery for lumbar spinal stenosis: A systematic review and meta-analysis",
    journal: "Pakistan Journal of Medical Sciences",
    year: 2018,
    volume: "34(4): 879–885",
    doi: "10.12669/pjms.344.14349",
    pmid: "30190746",
    citations: 17,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Zhang R", "Chang M", "Tang S"],
    tags: ["Lumbar stenosis", "Exercise therapy", "Meta-analysis"],
    summaryEn: "Systematic review and meta-analysis comparing exercise therapy versus surgery for lumbar spinal stenosis.",
    summaryZh: "系统综述与Meta分析比较运动疗法与手术治疗腰椎管狭窄症。"
  },
  {
    id: "plif2018",
    title: "Comparative effectiveness and safety of posterior lumbar interbody fusion, Coflex, Wallis, and X-stop for lumbar degenerative diseases: A systematic review and network meta-analysis",
    journal: "Clinical Neurology and Neurosurgery",
    year: 2018,
    volume: "172: 74–81",
    doi: "10.1016/j.clineuro.2018.06.030",
    pmid: "29986199",
    citations: 34,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Li D", "Zhang R", "Chang M", "Yang B", "Tang S"],
    tags: ["Lumbar fusion", "Network meta-analysis"],
    summaryEn: "Network meta-analysis comparing the effectiveness and safety of posterior lumbar interbody fusion, Coflex, Wallis, and X-stop for lumbar degenerative diseases.",
    summaryZh: "网状Meta分析比较后路腰椎椎间融合、Coflex、Wallis与X-stop治疗腰椎退行性疾病的疗效与安全性。"
  },
  {
    id: "obliquepull2018",
    title: "Comparison Between Oblique Pulling Spinal Manipulation and Other Treatments for Lumbar Disc Herniation: A Systematic Review and Meta-Analysis",
    journal: "Journal of Manipulative and Physiological Therapeutics",
    year: 2018,
    volume: "41(9): 771–779",
    doi: "10.1016/j.jmpt.2018.04.005",
    pmid: "30871713",
    citations: 21,
    featured: false,
    role: true,
    roleEn: "First author",
    roleZh: "第一作者",
    authors: ["Mo Z", "Zhang R", "Chen J", "Shu X", "Tang S"],
    tags: ["Spinal manipulation", "Lumbar disc herniation", "Meta-analysis"],
    summaryEn: "Systematic review and meta-analysis comparing oblique pulling spinal manipulation with other treatments for lumbar disc herniation.",
    summaryZh: "系统综述与Meta分析比较斜扳推拿手法与其他方法治疗腰椎间盘突出症。"
  }
];

const PUBS_COAUTHOR = [
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
    "about.p1": "I am a postdoctoral researcher at the Bone Marrow Transplantation Center of the First Affiliated Hospital, Zhejiang University School of Medicine, and the Liangzhu Laboratory. My research career has progressed through three complementary phases: systematic reviews and network meta-analyses in evidence-based medicine, tumor-microenvironment studies of hepatocellular carcinoma (HCC), and cellular immunotherapy for blood cancers.",
    "about.p2": "In my HCC research, I integrated bioinformatics, single-cell and spatial transcriptomics, and machine-learning models to decode the immunosuppressive tumor microenvironment, uncovering hypoxia-, methylation- and immune-related signatures with prognostic and immunotherapeutic value.",
    "about.p3": "My current work focuses on engineering chimeric antigen receptor (CAR) T and NK cells \u2014 including iPSC-derived \u201coff-the-shelf\u201d CAR-NK cells \u2014 and integrating CAR-based bridging therapy with allogeneic hematopoietic stem-cell transplantation. This work has been published in the New England Journal of Medicine and Cell Reports Medicine.",
    "about.chip1": "Cellular Immunotherapy",
    "about.chip2": "HCC & Tumor Microenvironment",
    "about.chip3": "Network Meta-analysis",
    "about.chip4": "Single-cell & Spatial Omics",
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
    "pubs.firstTitle": "First / Corresponding Author",
    "pubs.coauthTitle": "Co-author",
    "pubs.empty": "Publication list in preparation — check back soon.",
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
    "about.p1": "我是浙江大学医学院附属第一医院骨髓移植中心与良渚实验室的博士后研究员。我的研究生涯历经三个阶段，环环相扣：循证医学的系统评价与网状Meta分析、肝细胞癌（HCC）肿瘤微环境研究，以及血液肿瘤的细胞免疫治疗。",
    "about.p2": "在HCC研究中，我将生物信息学、单细胞与空间转录组学以及机器学习模型相结合，解码免疫抑制性肿瘤微环境，揭示了缺氧、甲基化及免疫相关分子特征在预后与免疫治疗中的价值。",
    "about.p3": "当前我的研究聚焦于工程化嵌合抗原受体（CAR）T细胞与NK细胞\u2014\u2014包括iPSC来源的\u201c现货型\u201dCAR-NK细胞\u2014\u2014并将CAR桥接治疗与异基因造血干细胞移植相结合。相关成果发表于《新英格兰医学杂志》与《Cell Reports Medicine》。",
    "about.chip1": "细胞免疫治疗",
    "about.chip2": "HCC 与肿瘤微环境",
    "about.chip3": "网状Meta分析",
    "about.chip4": "单细胞与空间组学",
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
    "pubs.firstTitle": "第一作者 / 通讯作者",
    "pubs.coauthTitle": "合作作者",
    "pubs.empty": "论文清单整理中，敬请期待。",
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

function pubCard(p, lang) {
  const featured = p.featured;
  const badge = featured
    ? '<span class="pub-badge badge-featured">★ Featured / 亮点</span>'
    : '<span class="pub-badge badge-default">Publication / 论文</span>';
  const roleBadge = p.role
    ? '<span class="pub-badge badge-role">' + (lang === "zh" ? p.roleZh : p.roleEn) + "</span>"
    : "";
  const summary = lang === "zh" ? p.summaryZh : p.summaryEn;
  const titleLink = p.doi
    ? '<a href="https://doi.org/' + p.doi + '" target="_blank" rel="noopener">' + p.title + "</a>"
    : p.title;
  const citePill = p.citations > 0
    ? '<span class="cite-pill">Cited ' + p.citations + "×</span>"
    : "";
  return (
    '<article class="pub-card' + (featured ? " featured" : "") + '">' +
      roleBadge +
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
}

function renderPubCategory(titleKey, pubs, lang) {
  let html = '<h3 class="pub-cat-title">' + I18N[lang][titleKey] + "</h3>";
  if (!pubs.length) {
    html += '<p class="pub-empty">' + I18N[lang]["pubs.empty"] + "</p>";
  } else {
    html += '<div class="pub-list">' + pubs.map((p) => pubCard(p, lang)).join("") + "</div>";
  }
  return html;
}

function renderPublications(lang) {
  $("#pubList").innerHTML =
    renderPubCategory("pubs.firstTitle", PUBS_FIRST_AUTHOR, lang) +
    renderPubCategory("pubs.coauthTitle", PUBS_COAUTHOR, lang);
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
