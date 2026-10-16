/**
 * Case studies from the "Carter's People Bio & Case Studies" copy: long-form
 * features (each with its own page) and short snapshots (listed on the index).
 * `group` is one of the five site practices (by slug) for filtering.
 *
 * Copy still marked "to be confirmed" in the source is left out rather than
 * published as a placeholder; see `hold` and the omitted proof figures.
 */

export type Practice =
  | "strategy-public-policy"
  | "technology-digital-transformation"
  | "programme-project-delivery"
  | "financial-transaction-advisory"
  | "sector-advisory";

/** A paragraph, or a bulleted list. */
export type Block = string | string[];

export type Beat = { heading: string; body: Block[] };

export type Feature = {
  slug: string;
  /** Eyebrow, e.g. "Programme & Project Delivery · Independent Verification". */
  label: string;
  title: string;
  /** Plain-language descriptor carrying the formal engagement name. */
  descriptor: string;
  group: Practice;
  related: Practice[];
  /** Omitted where the copy gives no engagement date yet. */
  year?: number;
  period?: string;
  client: string;
  role: string;
  standfirst: string;
  proof: { value: string; label: string }[];
  priorities: string[];
  forNigerians: string[];
  intent: Beat;
  process: Beat;
  impact: Beat;
  opportunity: Beat;
  implementation: string[];
  seo: { title: string; description: string };
  teaser: string;
  /** Set while the copy awaits sign-off; held features are not published. */
  hold?: string;
};

export type Snapshot = {
  id: string;
  title: string;
  client: string;
  period: string;
  year: number;
  role: string;
  practice: string;
  group: Practice;
  body: string;
  result?: string;
  /** Part of the "Earlier work · 2012 to 2016" set. */
  earlier?: boolean;
};

export const INTRO = {
  heading: "From intent to impact",
  body: [
    "Carter Consulting works with governments, regulators and development partners on the systems that public services depend on: identity registers, health systems, fiscal platforms, cloud governance and housing finance. Each case study sets out the intent behind an engagement, the work involved, the impact it had and the opportunity it opened.",
    "In every one, the test is what is in use afterwards: a register whose results have been independently verified, a scorecard a state can track year on year, a national policy adopted and applied across sectors.",
  ],
};

const ALL_FEATURES: Feature[] = [
  {
    slug: "trust-at-national-scale",
    label: "Programme & Project Delivery · Independent Verification",
    title: "Trust at National Scale",
    descriptor: "Independent Verification Agent for the Nigeria Digital Identification for Development (ID4D) Project",
    group: "programme-project-delivery",
    related: ["programme-project-delivery", "technology-digital-transformation"],
    year: 2025,
    period: "2025",
    client: "National Identity Management Commission (NIMC) and the World Bank",
    role: "Independent Verification Agent (Joint Venture with the Microflex Consortium)",
    standfirst:
      "For millions of Nigerians, a national identity number is what opens a bank account, a mobile line or access to social support. When World Bank funding for the national ID programme was tied to results, those results needed independent checking. Carter was the independent auditor engaged to verify that more than 110 million identity records were issued to global cybersecurity and data privacy standards in every state.",
    proof: [
      {
        value: "36 states + FCT",
        label: "States covered by the primary dataset: every state and the Federal Capital Territory",
      },
      { value: "110M+", label: "Identity records in the register under review" },
    ],
    priorities: [
      "National Digital Economy Policy & Strategy 2020 to 2030",
      "Sustainable Development Goal target 16.9: legal identity and financial inclusion for all",
    ],
    forNigerians: [
      "A verified identity is the route to a bank account, a mobile line, tax records and social protection. The World Bank releases development funds for the programme only when results are delivered to agreed standards. Independent verification checks that the roll-out of National Identification Numbers (NINs) respects data privacy law, meets cybersecurity criteria and reaches people fairly, so the register Nigerians rely on stays accurate and secure.",
    ],
    intent: {
      heading: "Independent assurance for a national identity programme",
      body: [
        "Nigeria's identity programme is among the largest supported by the World Bank's Identification for Development (ID4D) initiative. Reported enrolments passed 130 million by 2026; the register Carter reviewed in 2025 held more than 110 million records. The NIMC Act makes the National Identification Number the country's sole official identity credential.",
        "At that scale, reported progress needs evidence that can withstand independent scrutiny. More than 180 accredited enrolment partners (Front-End Partners) delivered the service across every state and the Federal Capital Territory. NIMC and the World Bank needed to know how consistently they delivered it, how well the system caught duplicate identities, how secure the infrastructure was, and what citizens experienced when they enrolled.",
        "Because disbursements depended on verified results, the evidence had to be strong enough to support funding decisions.",
      ],
    },
    process: {
      heading: "National verification built on primary evidence",
      body: [
        "Carter began by reviewing partner guidelines and system documentation and interviewing the people responsible for running the enrolment system. That shaped a risk-ranked verification plan.",
        "Field teams then surveyed citizens, enrolment partner staff and NIMC field officers in every state, with extra coverage in areas where enrolment was low. Mystery shoppers went through enrolment themselves. Every response was captured digitally with GPS stamps and back-checked daily, and at least 15% of respondents were re-interviewed.",
        "A technical team tested the enrolment architecture, the identity verification interface and the system that detects duplicate identities, against international security standards (ISO/IEC 27001 and NIST SP 800-63) and the World Bank's own framework.",
        "No independent estimate existed of how many duplicate identities the register held, so Carter built one, combining record matching, biometric re-checks and statistical modelling.",
      ],
    },
    impact: {
      heading: "Verified results that support funding decisions",
      body: [
        "The World Bank Task Team accepted Carter's findings as the verification of record for the programme's disbursement-linked indicators, the results on which funding is released. This supported subsequent disbursement tranches, based on a nationally representative evidence base.",
        "The final report set out more than 60 findings, each rated by severity and traced to its source. NIMC is using them to review how it accredits enrolment partners, to build a cybersecurity remediation roadmap aligned to ISO 27001, and to redesign its duplicate-detection system, which is already in pilot.",
      ],
    },
    opportunity: {
      heading: "A baseline for future verification",
      body: [
        "The independent evidence base gives NIMC and the World Bank a reference point for subsequent verification waves and for tracking how identified risks are addressed. The approach is also relevant to other results-based programmes where funding or implementation decisions depend on evidence that needs to be independently tested.",
      ],
    },
    implementation: [
      "Accepted by the World Bank Task Team as the verification of record for the programme's disbursement-linked indicators, supporting subsequent disbursement tranches.",
      "Informing NIMC's review of how Front-End Enrolment Partners are accredited.",
      "Feeding a cybersecurity remediation roadmap aligned to ISO 27001 controls and a redesign of the duplicate-detection system already in pilot.",
    ],
    seo: {
      title: "Independent Verification of Nigeria's ID4D Project",
      description:
        "Independent verification of more than 110 million identity records for NIMC and the World Bank, accepted as the verification of record for disbursement.",
    },
    teaser: "Independent verification of a 110-million-record national identity register, accepted as the basis for World Bank disbursement.",
  },
  {
    slug: "evidence-before-reform-in-plateau-state",
    label: "Sector Advisory · Health Systems",
    title: "Evidence Before Reform in Plateau State",
    descriptor: "Independent diagnostic of Plateau State's healthcare delivery system",
    group: "sector-advisory",
    related: ["sector-advisory"],
    year: 2026,
    period: "2026",
    client: "Plateau State Government, through the State Ministry of Health and Social Services",
    role: "Independent Diagnostic Consultant",
    standfirst:
      "Can a resident reach a clinic? Will the right health worker be there, and essential medicines in stock? Before investing in reform, Plateau State asked Carter to conduct an independent performance assessment of its health system, by following patients through the system.",
    proof: [{ value: "10-year", label: "Phased implementation roadmap built on the evidence" }],
    priorities: [
      "Renewed Hope National Development Plan 2026 to 2030 (human capital development; subnational competitiveness)",
      "Basic Health Care Provision Fund and National Health Insurance Authority Act 2022",
      "Sustainable Development Goal target 3.8: universal health coverage",
    ],
    forNigerians: [
      "The assessment measured what a patient encounters at each step: reaching a facility, finding the right health worker, getting medicines, emergency response, referral and follow-up.",
      "Health investment can then be directed at what patients actually experience, not only at what facilities contain.",
    ],
    intent: {
      heading: "Establishing the evidence before setting priorities",
      body: [
        "Nigeria has significant ambition for health-system reform. The Basic Health Care Provision Fund, the National Health Insurance Authority Act of 2022 and state contributory schemes all point towards wider access and stronger systems. Yet implementation capacity and the quality of available evidence vary considerably across states.",
        "Plateau State's Healthy Plateau initiative brings infrastructure renewal, digital health, workforce development and governance strengthening into a wider transformation programme. Before sequencing that investment, the government needed an independent view of the current system based on evidence from facilities, health workers and patients rather than assumptions or administrative records alone.",
      ],
    },
    process: {
      heading: "Assessing the system through the patient's journey",
      body: [
        "Carter built the assessment around seven questions a patient would ask:",
        [
          "How easily can I reach a healthcare facility?",
          "Will the right health worker be there?",
          "Is the lab equipment working?",
          "Are the essential medicines in stock and affordable?",
          "If I need emergency care, will it be accessible and affordable?",
          "Will a referral lead to further care in a specialist facility I can access within the state?",
          "How will I get appropriate follow-up after treatment?",
        ],
        "Over two months, field teams inspected and audited facilities, surveyed frontline health workers anonymously, interviewed patients as they left clinic appointments at health centres, checked medicine stocks and storage, and went door to door to survey households. National datasets were used to cross-check the findings.",
        "The team then traced what it observed back to underlying causes across policy, infrastructure, financing and management. Findings were re-checked in the field, independently re-coded and validated with State Ministry of Health teams.",
        "The evidence was used to build the Healthy Plateau Scorecard, supported by a Performance Intelligence Dashboard.",
      ],
    },
    impact: {
      heading: "A reform plan grounded in evidence",
      body: [
        "The Plateau State Government validated and adopted the diagnostic. It now underpins a four-pillar Improvement Framework Masterplan and a phased ten-year implementation roadmap, which identifies priority actions the state can take in developing its health infrastructure and service delivery programme.",
        "The assessment also found strengths to build on, including the state's faith-based and private-sector providers and patients' positive views of health workers' attitude and clinical care.",
      ],
    },
    opportunity: {
      heading: "A system the state can track over time",
      body: [
        "The scorecard and dashboard give Plateau a way to monitor progress against the evidence base as implementation continues. This reduces the need to commission a new diagnostic simply to understand whether priorities are being addressed and creates a consistent basis for reviewing performance over time. The companion case study, Connecting Plateau's Health System, describes the digital architecture that carries this work forward.",
      ],
    },
    implementation: [
      "Validated and adopted by the Plateau State Government.",
      "Underpinning a four-pillar Improvement Framework Masterplan and a phased ten-year implementation roadmap, with priority actions that do not need another diagnostic.",
      "The Healthy Plateau Scorecard and Performance Intelligence Dashboard give the state a standing way to track progress.",
    ],
    seo: {
      title: "Health System Diagnostic for Plateau State",
      description:
        "An independent diagnostic of Plateau State's health system, built from evidence gathered at facilities, from health workers and from patients.",
    },
    teaser: "A diagnostic that followed the patient's journey and now underpins a ten-year health reform roadmap.",
  },
  {
    slug: "connecting-plateaus-health-system",
    label: "Sector Advisory · Health Systems and Digital",
    title: "Connecting Plateau's Health System",
    descriptor: "Digital health architecture and implementation blueprint for Plateau State",
    group: "sector-advisory",
    related: ["sector-advisory", "technology-digital-transformation"],
    year: 2026,
    period: "2026",
    client: "Plateau State Government, through the State Ministry of Health and Social Services",
    role: "Digital Health Architecture Consultant",
    standfirst:
      "Plateau State wanted records that follow the patient, specialist care that reaches beyond the big hospitals, and a clear view of how every facility is performing. Carter designed a phased digital architecture to get there, and built its first component, the Performance Intelligence Dashboard, during the assignment.",
    proof: [
      { value: "6", label: "Interlocking layers in the architecture" },
      { value: "1", label: "Dataset serving two audiences: government and investors" },
      { value: "Year 1", label: "First component built on data the state already holds" },
    ],
    priorities: [
      "National Digital Health Strategy 2023 to 2028",
      "Nigeria Data Protection Act 2023",
      "Sustainable Development Goal target 3.8: universal health coverage",
      "Renewed Hope National Development Plan 2026 to 2030 (human capital development)",
    ],
    forNigerians: [
      "The architecture is designed so that records move with the patient, specialist care reaches general hospitals and health centres beyond major centres through telemedicine, and claims under the Plateau State Contributory Healthcare Management Agency (PLASCHEMA) scheme are processed more efficiently as enrolment grows.",
    ],
    intent: {
      heading: "Translating digital-health ambition into a workable architecture",
      body: [
        "Nigeria's Digital Health Strategy 2023 to 2028 sets the national direction: a common health-data backbone (DHIS2), electronic health records and a national health identification system, aligned with the World Health Organization's Global Digital Health Strategy.",
        "For Plateau, the challenge was to translate that direction into a state-level system that could support day-to-day management. The Ministry needed better visibility of facility performance, records that could move with patients, secure data governance and technology that could support specialist care beyond major centres. PLASCHEMA also needed a more modern approach to claims processing as enrolment grew.",
        "The digital programme therefore had to support the wider Healthy Plateau transformation rather than operate as a separate technology project. It builds directly on the diagnostic described in Evidence Before Reform in Plateau State.",
      ],
    },
    process: {
      heading: "Six connected layers, sequenced for implementation",
      body: [
        "Carter organised the architecture into six connected layers: data collection; performance monitoring; the core health information system; claims and payments; telemedicine; and identity and interoperability. Each layer answers a need found in the diagnostic and can be built on its own while still connecting to the rest.",
        "Carter sequenced the work to deliver value early. The Performance Intelligence Dashboard came first, built on data the state already held. Full electronic health records, a unified payment platform and state-wide telemedicine follow in later phases, as the underlying data matures.",
        "Carter also went beyond the blueprint and built a working dashboard with two views: one for the Ministry, Joint Working Committee and State Executive Council, down to facility level; and one for private and development-finance investors looking at the state's health system.",
        "Using one dataset for both audiences was deliberate: the information used to manage the system also gives investors a clearer view of it. The telemedicine design links specialists at Plateau's tertiary hospitals with general hospitals and health centres, and the data-governance approach follows the Nigeria Data Protection Act, with hosting in Nigeria and clear accountability for health data.",
      ],
    },
    impact: {
      heading: "A phased architecture with a working first component",
      body: [
        "Plateau now has a complete digital health architecture aligned with national policy and international interoperability standards, with defined sequencing and ownership. The Performance Intelligence Dashboard was built and delivered during the assignment, giving state leadership and transformation partners a shared view of system performance from the outset.",
      ],
    },
    opportunity: {
      heading: "A pathway from the first component to the wider system",
      body: [
        "The architecture provides a clear pathway for records, payments, telemedicine and identity and interoperability to be introduced as the preceding components mature. The dashboard also provides a common evidence base for government and potential investment partners as Healthy Plateau moves into implementation.",
      ],
    },
    implementation: [
      "The Performance Intelligence Dashboard was built and delivered during the assignment, giving leadership and partners a shared view of system performance from the outset.",
      "A complete architecture with defined sequencing and ownership, aligned with national policy and international interoperability standards.",
      "A first component built on data the state already holds, with records, payments, telemedicine and identity phased in as the data environment matures.",
    ],
    seo: {
      title: "Digital Health Architecture for Plateau State",
      description:
        "A phased digital health architecture for Plateau State, starting with a working dashboard built on data the state already holds.",
    },
    teaser: "A phased architecture for digital health, led by a dashboard the state can use from the first phase.",
  },
  {
    slug: "national-framework-for-cloud-governance",
    label: "Strategy & Public Policy Advisory · Digital Policy",
    title: "A National Framework for Cloud Governance",
    descriptor: "Development of Nigeria's national cloud policy",
    group: "strategy-public-policy",
    related: ["strategy-public-policy", "technology-digital-transformation"],
    year: 2025,
    period: "2025",
    client:
      "Federal Ministry of Communications, Innovation and Digital Economy, through the National Information Technology Development Agency (NITDA)",
    role: "National Cloud Policy Consultant",
    standfirst:
      "Nigeria's cloud requirements were spread across laws, regulations and sector circulars. Carter helped bring them into a single national policy, supported by a maturity model, implementation roadmap and financing approach.",
    proof: [
      { value: "180+", label: "Stakeholders engaged across six geopolitical zones" },
      { value: "7", label: "Sectors with cloud baselines codified in subsidiary instruments" },
    ],
    priorities: [
      "National Digital Economy Policy and Strategy 2020 to 2030 (economic diversification through digital)",
      "Nigeria Data Protection Act 2023",
      "National Cybersecurity Policy",
    ],
    forNigerians: [
      "The digital services that individuals and businesses rely on are increasingly hosted in the cloud. A common basis for classifying, procuring and protecting what government hosts there supports the reliability and security of those services.",
    ],
    intent: {
      heading: "Bringing cloud governance into one framework",
      body: [
        "Nigerian organisations were moving to the cloud while the rules remained scattered across the Nigeria Data Protection Regulation, the NITDA Act and circulars from regulators such as the Central Bank of Nigeria and the Nigerian Communications Commission.",
        "The policy challenge was practical as well as legal. Questions around data sovereignty, dependence on major vendors and protection of critical infrastructure needed clearer treatment. Government institutions were also at different stages of cloud maturity, making a single requirement difficult to apply consistently.",
        "Through NITDA, the Ministry needed a policy that would identify the gaps, build agreement among stakeholders and turn the findings into actions that could be funded, implemented and measured.",
      ],
    },
    process: {
      heading: "A diagnostic assessment followed by structured consultation",
      body: [
        "Carter began with a gap assessment across legal, policy, technical and institutional dimensions, weighted by severity. It tested the findings through more than 60 interviews, five sector workshops and a national plenary, and more than 120 respondents completed an online cloud-maturity self-assessment.",
        "Those consulted ranged from government agencies, regulators and cyber-response teams to law enforcement, the judiciary, cloud and telecoms providers, civil society and academia.",
        "Carter developed a three-tier maturity model (Foundational, Developing and Advanced), mapped to the International Telecommunication Union's Global Cybersecurity Index. It gives each agency a realistic starting point and a path to improve, instead of one standard for organisations with very different capabilities.",
        "Each tier feeds a five-year roadmap in which every priority action has an owner, timeline, performance indicator and cost band. A financing plan ties actions to agency budgets and the Medium-Term Expenditure Framework, and identifies donor, multilateral and private funding. The package was tested through sector pre-validation, a cross-sector workshop and a final plenary before sign-off.",
      ],
    },
    impact: {
      heading: "A national policy with sector-level application",
      body: [
        "The policy was adopted, with sector-specific cloud baselines codified in subsidiary instruments across seven sectors.",
        "The framework provides the government with a common basis for cloud classification, procurement and incident response, while strengthening protections for critical infrastructure and cloud-hosted services.",
      ],
    },
    opportunity: {
      heading: "A framework that can be adapted",
      body: [
        "The diagnostic tools, maturity model and monitoring and evaluation framework provide a basis for future policy reviews and adaptation. The underlying challenge, cloud adoption moving faster than governance, extends beyond one country, making the approach potentially relevant to other markets developing their own cloud frameworks.",
      ],
    },
    implementation: [
      "Policy adopted, with sector-specific cloud baselines codified in subsidiary instruments across seven sectors.",
      "A common basis for cloud classification, procurement and incident response across government institutions.",
      "A five-year roadmap in which every priority action has an owner, timeline, KPI and cost band, with a financing plan tied to agency budget submissions.",
    ],
    seo: {
      title: "Developing Nigeria's National Cloud Policy",
      description:
        "How Nigeria's cloud requirements were brought into one national policy, with a maturity model, a five-year roadmap and a financing approach.",
    },
    teaser: "One national policy for cloud governance, with sector baselines across seven sectors and a five-year roadmap.",
    hold: "Adoption, timing, the seven sectors and the ITU Global Cybersecurity Index claim need confirmation before publication.",
  },
  {
    slug: "structure-before-scale",
    label: "Programme & Project Delivery · Development Finance",
    title: "Bringing Structure & Scale to Nigeria's Real Estate Sector",
    descriptor: "Programme support to a ₦1tn Federal Mortgage Fund",
    group: "programme-project-delivery",
    related: ["programme-project-delivery", "financial-transaction-advisory"],
    client: "Ministry of Finance Incorporated, MOFI Real Estate Investment Fund (MREIF)",
    role: "Programme Support Consultant",
    standfirst:
      "The Ministry of Finance Incorporated (MOFI) needed to design transaction, governance and operating arrangements for its landmark ₦1 trillion mortgage fund. Carter supported the Programme Management Unit from planning to implementation, unlocking for the first time affordable home ownership for Nigerians with mortgages of up to 20 years at a fixed interest rate of just 9.75% per annum.",
    proof: [
      { value: "₦1tn", label: "Size of the fund" },
      { value: "₦150bn", label: "First tranche from the Federal Government, which Carter supported raising" },
      { value: "₦100bn", label: "Private-sector capital, with Carter supporting investor roadshows" },
    ],
    priorities: [
      "Renewed Hope National Development Plan 2026 to 2030 (private sector-led growth)",
      "Housing finance and home ownership",
      "Sustainable Development Goal target 11.1: adequate, safe and affordable housing",
    ],
    forNigerians: [
      "The fund offers 20-year mortgages at a fixed 9.75%, designed to widen access to home ownership. Since launch it has disbursed ₦128 billion in mortgages to 1,859 families.",
    ],
    intent: {
      heading: "Putting the operating structure behind the capital",
      body: [
        "Nigeria's mortgage market has historically been small relative to the country's housing needs. The Ministry of Finance Incorporated (MOFI) established the MOFI Real Estate Investment Fund (MREIF) as a ₦1 trillion vehicle registered with the Securities and Exchange Commission (SEC), offering 20-year mortgages at a fixed 9.75%. It combines federal capital with pension and institutional investment and uses off-take guarantees to manage developer risk.",
        "Before the fund could begin lending, its legal and transaction structures had to be agreed, the financial model had to be tested, SEC registration completed, capital raised and a programme office established to coordinate the work under board and government oversight.",
      ],
    },
    process: {
      heading: "Coordinating the work required before launch",
      body: [
        "Carter supported the Programme Management Unit through the pre-funding, SEC registration and operationalisation phase. This included reviewing legal documentation and transaction structures, testing assumptions in the financial model and preparing memoranda, including fund-release requests to the Ministry.",
        "The team also supported market-sounding and investor roadshows. Across the workstreams, Carter coordinated custodians, fund managers and technical and legal advisers, maintained a document tracker and consolidated adviser feedback to keep registration and operationalisation on schedule.",
        "The institutional work included supporting adviser briefings, defining roles, onboarding programme staff, preparing the first annual operating budget and developing reports, executive presentations and talking points for MOFI's board, the Ministry of Finance, National Assembly committees and ministers.",
      ],
    },
    impact: {
      heading: "From structure to an operating fund",
      body: [
        "By the end of this phase, the fund had moved from concept to a registered, capitalised and operational vehicle. SEC registration was in place, the Federal Government had provided a first ₦150 billion tranche, roadshow activity had supported roughly ₦100 billion of private-sector capital, and a programme office and reporting rhythm were in place for the fund managers.",
        "The fund has since disbursed ₦128 billion in mortgages to 1,859 families. That subsequent lending activity belongs to the fund managers; Carter's role was to support the fund's preparation for launch.",
      ],
    },
    opportunity: {
      heading: "Disciplined execution from structure to launch",
      body: [
        "Custodians, fund managers, legal and technical advisers, the board, the Ministry and National Assembly committees all moved at different speeds on this fund, as they do on most large public funds. A single programme office with clear ownership and a steady reporting rhythm kept those pieces aligned from structure to launch. The same approach applies to other funds and reform programmes nearing launch.",
      ],
    },
    implementation: [
      "SEC registration in place, a first ₦150bn tranche from the Federal Government, and roadshow activity supporting roughly ₦100bn of private-sector capital.",
      "A programme office and reporting rhythm handed to the fund managers for ongoing operation.",
      "The fund has since disbursed ₦128bn to 1,859 families.",
    ],
    seo: {
      title: "Programme Support for a ₦1 Trillion Mortgage Fund",
      description:
        "Programme support that prepared a ₦1 trillion federal mortgage fund for launch: transaction structure, capital raise and governance.",
    },
    teaser: "The programme work that prepared a ₦1 trillion mortgage fund to begin lending.",
  },
];

/** Published features, in the order they appear in the copy. */
export const FEATURES = ALL_FEATURES.filter((f) => !f.hold);

export const SNAPSHOTS: Snapshot[] = [
  {
    id: "transaction-advisory-services-for-the-kano-state-special-agro-industrial-processing-zone",
    title: "Preparing Kano's Agro-Industrial Zone for Investment",
    client: "Special Agro-Industrial Processing Zones (SAPZ) Programme",
    period: "2025 to present",
    year: 2025,
    role: "Transaction Adviser (Joint Venture with Ernst & Young Limited)",
    practice: "Financial & Transaction Advisory",
    group: "financial-transaction-advisory",
    body: "Kano's Special Agro-Industrial Processing Zone is being prepared for structured investment. Carter, with EY, is advising the National Coordination Office on the commercial and financial assessment, transaction structure, due diligence and investor-facing analysis needed to take the project to market.",
  },
  {
    id: "development-of-the-national-assets-registry",
    title: "A National Register of Federal Assets",
    client: "Ministry of Finance Incorporated",
    period: "2023",
    year: 2023,
    role: "Digital Registry Consultant",
    practice: "Technology & Digital Transformation",
    group: "technology-digital-transformation",
    body: "The Ministry of Finance Incorporated (MOFI) needed a clearer view of the Federal Government's assets across participating entities. In six months, Carter built a digital registry covering ownership, classification, status and performance, including the underlying data standards, capture and validation workflows, portfolio reporting, documentation and knowledge transfer.",
  },
  {
    id: "investment-grade-asset-valuation-and-due-diligence-for-the-mofi-energy-and-extractives-portfolio",
    title: "Valuing the Federal Energy and Extractives Portfolio",
    client: "Federal Ministry of Finance, Budget and National Planning (MOFI portfolio)",
    period: "2023",
    year: 2023,
    role: "Valuation and Due Diligence Consultant",
    practice: "Financial & Transaction Advisory",
    group: "financial-transaction-advisory",
    body: "MOFI needed an investment-grade view of its energy and extractives portfolio and the risks associated with it. Over six months, Carter combined valuation with financial, legal, operational and market due diligence, documenting assumptions and limitations so the analysis could support investment, restructuring and strategic decisions.",
  },
  {
    id: "national-strategy-for-scaling-up-the-sanitation-market-in-selected-states",
    title: "Scaling Nigeria's Sanitation Market",
    client:
      "Federal Ministry of Water Resources, Sustainable Urban and Rural Water Supply, Sanitation and Hygiene (SURWASH) Programme (World Bank)",
    period: "2022",
    year: 2022,
    role: "Strategy Consultant",
    practice: "Sector Advisory",
    group: "sector-advisory",
    body: "Expanding sanitation required more than public infrastructure. Over nine months, Carter developed a national strategy for scaling the sanitation market in selected states, mapping institutions, providers, financiers and communities; assessing barriers to availability, affordability and adoption; and developing a behaviour-change framework, private-sector participation options and a phased roadmap.",
  },
  {
    id: "audit-of-existing-public-private-partnership-and-concession-contracts",
    title: "Auditing the Federal PPP and Concession Portfolio",
    client: "Fiscal Governance and Institutions Project (World Bank)",
    period: "2022",
    year: 2022,
    role: "PPP and Concession Audit Consultant",
    practice: "Financial & Transaction Advisory",
    group: "financial-transaction-advisory",
    body: "The Federal Government needed a clearer view of how its public-private partnership (PPP) and concession agreements were performing. Over six months, Carter compiled the portfolio, reviewed contractual obligations and milestones, assessed performance and compliance, considered fiscal, commercial, legal and governance risks, and identified gaps and unresolved obligations requiring action.",
  },
  {
    id: "development-of-a-ppp-investment-catalogue-and-sector-focused-roadmap",
    title: "A Catalogue of Investable PPP Projects",
    client: "Infrastructure Concession Regulatory Commission",
    period: "2022",
    year: 2022,
    role: "PPP Advisory Consultant",
    practice: "Financial & Transaction Advisory",
    group: "financial-transaction-advisory",
    body: "The Infrastructure Concession Regulatory Commission (ICRC) needed an investor-oriented view of the country's PPP pipeline. Carter developed an investment catalogue and sector roadmaps by reviewing projects, organising them by sector, maturity and investment potential, preparing concise project information, validating it with public-sector stakeholders and sequencing preparation priorities.",
  },
  {
    id: "creation-of-a-data-centre-for-collation-of-national-revenue",
    title: "A National Data Centre for Revenue Data",
    client: "Budget Office of the Federation",
    period: "2022",
    year: 2022,
    role: "Data Centre and Digital Infrastructure Consultant",
    practice: "Technology & Digital Transformation",
    group: "technology-digital-transformation",
    body: "The National Budget Portal depends on reliable data from multiple revenue and expenditure sources. Carter designed and installed the data-centre and warehousing infrastructure, structured the source data, secured access, integrated data from the States Fiscal Transparency, Accountability and Sustainability (SFTAS) programme and other Federal Government sources into the Portal, and trained designated staff to operate the environment.",
  },
  {
    id: "modern-skills-training-for-effective-civil-service-delivery",
    title: "Skills for Gombe's Civil Service",
    client: "Gombe State Government",
    period: "2022",
    year: 2022,
    role: "Training Consultant",
    practice: "Programme & Project Delivery (capacity building)",
    group: "programme-project-delivery",
    body: "Gombe State needed practical skills development for staff supporting day-to-day administration. Carter assessed capability needs, developed materials around the officers' actual duties, delivered training through demonstrations and exercises, assessed learning and recommended measures to sustain the gains.",
  },
  {
    id: "greenhouse-gas-inventories-for-newmap-activities",
    title: "Measuring Emissions Across NEWMAP Activities",
    client:
      "Nigeria Erosion and Watershed Management Project (NEWMAP), funded by the World Bank, Global Environment Facility and Special Climate Change Fund",
    period: "2021",
    year: 2021,
    role: "Joint Venture Consultant with PwC Nigeria",
    practice: "Sector Advisory",
    group: "sector-advisory",
    body: "NEWMAP needed a consistent way to quantify the greenhouse gas emissions associated with its activities. Over eight months, Carter and PwC Nigeria developed inventories across watershed, state and federal levels, identified emission sources, compiled activity data, quantified emissions and documented assumptions and limitations.",
  },
  {
    id: "digital-infrastructure-for-vaids-and-tax-data-harmonization-analytics-and-apis",
    title: "Harmonising Federal Tax Data",
    client: "Federal Ministry of Finance (Project Lighthouse Phase II)",
    period: "2021",
    year: 2021,
    role: "Digital Infrastructure and Data Analytics Consultant",
    practice: "Technology & Digital Transformation",
    group: "technology-digital-transformation",
    body: "Project Lighthouse Phase II required tax information from different systems to be brought into a common environment. Carter developed the digital infrastructure to harmonise and normalise data from the Voluntary Assets and Income Declaration Scheme (VAIDS) and other tax sources, with analytics for revenue intelligence, secure data connections (APIs) between authorised institutions, and the documentation, testing support and handover needed for operation.",
  },
  {
    id: "bimms",
    title: "Monitoring Government Enterprise Budgets",
    client: "Budget Office of the Federation, Fiscal Governance and Institutions Project (World Bank)",
    period: "2020",
    year: 2020,
    role: "Technology Implementation Consultant",
    practice: "Technology & Digital Transformation",
    group: "technology-digital-transformation",
    body: "The Budget Office needed a system for collecting, reviewing and monitoring budgets submitted by government-owned enterprises. In 12 weeks, Carter configured and deployed the budget monitoring system (BIMMS), including hosting, user roles and workflows, an approved data connection (API) for the accounting workstream, testing, deployment and user orientation.",
  },
  {
    id: "implementation-of-an-intranet-portal-and-content-management-system",
    title: "Connecting Public Sector Employees Across a Government Department",
    client: "Budget Office of the Federation",
    period: "2019",
    year: 2019,
    role: "Technology Implementation Consultant",
    practice: "Technology & Digital Transformation",
    group: "technology-digital-transformation",
    body: "The Budget Office needed an internal portal within a short delivery window. Carter implemented its intranet and content management system in fourteen days, covering licensing, configuration, information structure and navigation, access controls, priority-content migration and staff orientation.",
  },
  {
    id: "institutional-capacity-assessment-and-siftas-implementation-support-for-sokoto-state",
    title: "Strengthening Sokoto's Public Finance Systems",
    client: "Sokoto State Ministry of Finance (World Bank)",
    period: "2019",
    year: 2019,
    role: "Consortium Consultant, SUSMAN Consortium",
    practice: "Strategy & Public Policy Advisory",
    group: "strategy-public-policy",
    body: "Sokoto's access to performance-based funding depended on progress across several areas of public financial management. As part of the SUSMAN Consortium, Carter assessed institutional capacity against programme requirements and supported reforms covering budgeting, audited accounts, revenue, debt, payroll, procurement and arrears.",
  },
  {
    id: "gap-analysis-of-ict-needs-of-nigerian-universities-and-mdas",
    title: "Mapping ICT Gaps in Universities and MDAs",
    client: "National Information Technology Development Agency",
    period: "2016",
    year: 2016,
    role: "ICT Assessment Consultant",
    practice: "Technology & Digital Transformation",
    group: "technology-digital-transformation",
    body: "Before investing in technology, Nigerian universities and government ministries, departments and agencies (MDAs) needed a clearer view of their priority gaps. Over three months, Carter assessed infrastructure, systems, connectivity, skills and institutional capacity against required services, then ranked gaps and dependencies and proposed phased recommendations.",
    earlier: true,
  },
  {
    id: "training-of-budget-officers-on-preparation-of-the-2017-budget",
    title: "Training 850 Institutions in Zero-Based Budgeting",
    client: "Budget Office of the Federation",
    period: "2016",
    year: 2016,
    role: "National Training Consultant",
    practice: "Programme & Project Delivery (capacity building)",
    group: "programme-project-delivery",
    body: "The Federal Government was introducing a new approach to budget preparation and needed capability across its institutions. Carter trained budget officers from more than 850 Federal Government ministries, departments and agencies across the six geopolitical zones to prepare the 2017 budget using the Zero Based Budgeting web application. The work included guided exercises and documentation of implementation issues for follow-up.",
    earlier: true,
  },
  {
    id: "configuration-and-deployment-of-a-zero-based-budget-compliant-web-application",
    title: "A Digital Platform for Zero-Based Budgeting",
    client: "Budget Office of the Federation",
    period: "2016",
    year: 2016,
    role: "Application Implementation Consultant",
    practice: "Technology & Digital Transformation",
    group: "technology-digital-transformation",
    body: "The Federal Government's move to zero-based budgeting required a digital system for preparing, reviewing and consolidating submissions. Carter configured and deployed a compliant web application covering workflows, controls, digital templates, user roles and review steps, followed by testing, deployment and user support.",
    earlier: true,
  },
  {
    id: "strategic-review-and-analysis-of-federal-ministry-of-environment-activities",
    title: "A Strategic Review for the Environment Ministry",
    client: "Federal Ministry of Environment",
    period: "2015",
    year: 2015,
    role: "Strategic Review Consultant",
    practice: "Strategy & Public Policy Advisory",
    group: "strategy-public-policy",
    body: "The Ministry needed an independent assessment of its activities and how closely they aligned with its mandate. In four weeks, Carter reviewed plans and programme records, examined institutional arrangements and coordination, consulted departments and identified strategic, operational and performance gaps with prioritised recommendations.",
    earlier: true,
  },
  {
    id: "supply-and-installation-of-e-library-equipment",
    title: "An E-Library for College of Education Zing",
    client: "College of Education Zing (Tertiary Education Trust Fund)",
    period: "2014",
    year: 2014,
    role: "Equipment Supplier and Systems Integrator",
    practice: "Technology & Digital Transformation",
    group: "technology-digital-transformation",
    body: "The College of Education Zing needed the technology and infrastructure to support its e-library intervention. In 12 weeks, Carter supplied, installed and configured the required equipment, completed testing and intervention identification, and handed over the system with documentation and operating guidance.",
    earlier: true,
  },
  {
    id: "monitoring-and-evaluation-impact-assessment-of-nitda-projects",
    title: "Assessing the Impact of NITDA's Projects",
    client: "National Information Technology Development Agency",
    period: "2012",
    year: 2012,
    role: "Lead Consultant",
    practice: "Programme & Project Delivery (monitoring and evaluation)",
    group: "programme-project-delivery",
    body: "NITDA needed to understand what its projects had achieved and what could be improved. Carter developed the assessment framework, reviewed project records and performance data, gathered evidence from stakeholders and beneficiaries, and assessed outputs, outcomes, relevance and sustainability. The findings captured achievements, gaps and lessons for future ICT interventions.",
    earlier: true,
  },
];

export const featureBySlug = (slug: string) => FEATURES.find((f) => f.slug === slug);

/** Card data for a case study by feature slug or snapshot id; undefined if unknown or held. */
export const caseStudyCard = (key: string) => {
  const f = FEATURES.find((x) => x.slug === key);
  if (f) return { key, label: f.label, title: f.title, sub: f.descriptor, teaser: f.teaser, href: `/case-studies/${f.slug}` };
  const s = SNAPSHOTS.find((x) => x.id === key);
  if (s) return { key, label: s.practice, title: s.title, sub: s.client, teaser: s.body, snapshot: s };
  return undefined;
};
