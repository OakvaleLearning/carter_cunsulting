/** One line of a person's project profile; `caseStudy` is the matching case-study id, when there is one. */
export type Project = { role: string; project: string; caseStudy?: string };

export type Person = {
  name: string;
  role: string;
  /** Omitted until a confirmed biography is supplied. */
  bio?: string;
  experience?: string[];
  education?: string[];
  projects?: Project[];
  /** The closing personal line of the biography. */
  interests?: string;
  linkedin?: string;
};

export type Group = { id: string; title: string; people: Person[] };

// Case-study ids (see lib/case-studies.ts) that people's project profiles point to.
const CS = {
  id4d: "independent-verification-agent-for-the-nigeria-digital-identification-for-development-project",
  sapz: "transaction-advisory-services-for-the-kano-state-special-agro-industrial-processing-zone",
  assets: "development-of-the-national-assets-registry",
  pppCatalogue: "development-of-a-ppp-investment-catalogue-and-sector-focused-roadmap",
  revenueDc: "creation-of-a-data-centre-for-collation-of-national-revenue",
  newmap: "greenhouse-gas-inventories-for-newmap-activities",
  lighthouse: "digital-infrastructure-for-vaids-and-tax-data-harmonization-analytics-and-apis",
  bimms: "bimms",
};

const SAPZ = "Transaction Advisory Services, Kano State Special Agro-Industrial Processing Zone (SAPZ)";
const PLATEAU = "Diagnostic Assessment of Healthcare Delivery System, Plateau State";
const OAKS = "Market Feasibility Assessment for Project Oaks: GMP-Compliant Pharmaceutical Manufacturing Advisory";
const NEWMAP_GHG = "GHG Inventories of NEWMAP Activities at Watershed, State and Federal Level";
const PPP_CATALOGUE = "Development of PPP Investment Catalogue and Sector-Focused Roadmap";
const IPSAS =
  "Needs Assessment and Roadmap for the Implementation of International Public Sector Accounting Standards (IPSAS) & ERP Systems";

const p = {
  adeniyi: {
    name: "Dr Adeniyi Onamusi",
    role: "Managing Partner",
    bio: "Adeniyi is a medical doctor with more than 20 years of experience in corporate strategy and business development. He advises multinationals and public and private institutions on strategy, digital transformation and complex programme management, and has led Carter Consulting since 2009.",
    experience: [
      "Executive Consultant, Office for Nigerian Content Development in ICT (ONC)",
      "Chief Strategy Officer, Technology Support Center, Nigeria",
      "Head of Strategy & Human Capital, Alteq ICT, Nigeria",
    ],
    education: [
      "MSc Major Programme Management, University of Oxford",
      "MSc International Management, University of Liverpool",
      "MSc Marketing, Durham University",
      "MBBS, Olabisi Onabanjo University",
      "Chartered Certified Accountant, FCA",
      "Public Financial Management, ACCA",
      "Project Management Professional (PMP), Project Management Institute",
      "Certified Information Systems Auditor® (CISA), ISACA",
    ],
    projects: [
      { role: "Project Lead", project: "Institutional Restructuring of the Ministry of Finance Incorporated (MOFI)" },
      {
        role: "Project Lead",
        project: "Configuration and Deployment of the Budget Information Management & Monitoring System (BIMMS)",
        caseStudy: CS.bimms,
      },
      { role: "Project Lead", project: PLATEAU },
      { role: "Project Lead", project: PPP_CATALOGUE, caseStudy: CS.pppCatalogue },
      {
        role: "Project Lead",
        project: "Independent Verification Auditors for the Inventorisation of GHG Emissions of NEWMAP Intervention Sites",
        caseStudy: CS.newmap,
      },
      { role: "Project Lead", project: IPSAS },
    ],
    interests:
      "In his spare time, Frenzo enjoys the game of chess, cooking, quality time with his family and unwinding with action movies.",
    linkedin: "https://www.linkedin.com/in/drfrenzo/",
  },
  tayo: {
    name: "Temitayo Falana",
    role: "Chief Operating Officer",
    bio: "Tayo has 24 years of experience in ICT, digital infrastructure and programme management. He works with government institutions and development partners, including World Bank-supported programmes. He leads Carter's operations and delivery and has been with the firm since 2017.",
    experience: [
      "Technical Adviser to the Permanent Secretary, Ministry of Budget and National Planning",
      "Independent Consultant, European Union (Nigeria)",
      "Senior Programme Manager, Peniels Mercantile Limited",
      "Programme Manager and Business Consultant, Alteq (ICT) Limited",
    ],
    education: [
      "MSc Information Systems and Business Strategy, University of Surrey",
      "B.Eng Electrical and Electronics Engineering, Federal University of Technology, Akure",
      "Project Management Professional (PMP), Project Management Institute",
    ],
    projects: [
      { role: "Digital Infrastructure Adviser", project: "National Cloud Policy" },
      { role: "Technical Verification Expert", project: "ID4D Independent Verification", caseStudy: CS.id4d },
      { role: "ICT Infrastructure Lead", project: "National Revenue Data Centre", caseStudy: CS.revenueDc },
      { role: "Systems Configuration Lead", project: "BIMMS for Government-Owned Enterprises", caseStudy: CS.bimms },
      { role: "Senior Consultant", project: NEWMAP_GHG, caseStudy: CS.newmap },
      { role: "Technical Lead", project: "Project Lighthouse", caseStudy: CS.lighthouse },
    ],
    interests: "Outside of work, Tayo enjoys watching football, mentoring young people, and public speaking.",
    linkedin: "https://linkedin.com/in/tayo-falana-b50905248",
  },
  david: {
    name: "Prof. David Agogo",
    role: "Director",
    bio: "David has worked at the intersection of technology, analytics and strategy since 2007. A Director of Carter since 2011, he advises organisations on digital transformation, cloud adoption, data governance and AI strategy. He is the author of Ready, Go! Get Set? AI Strategy Playbook, Cloud Agnostic Readiness for a Multiplier Advantage and Timeless Analytics.",
    experience: [
      "Academic Director, Operations and Supply Chain, University of Utah",
      "Assistant Professor, Information Systems and Business Analytics, Florida International University",
      "Solutions Architect and Strategy Consultant, Alteq (ICT) Ltd",
    ],
    education: [
      "PhD Management Information Systems, University of Massachusetts",
      "MBA Business Administration, Management and Operations, University of Massachusetts",
      "BEng Electrical and Computer Engineering, Federal University of Technology Minna",
      "Certifications in AWS, Google Cloud, project management and data governance",
    ],
    projects: [{ role: "Technical Consultant", project: "National Sovereign Cloud Initiative (NITDA)" }],
    interests: "David enjoys music and creative projects outside work, as well as spending time with family.",
    linkedin: "https://linkedin.com/in/a9090z",
  },
} satisfies Record<string, Person>;

export const LEADERSHIP_TEAM: Person[] = [p.adeniyi, p.tayo, p.david];

export const PRACTICE_TEAMS: Group[] = [
  {
    id: "technology-digital-transformation",
    title: "Technology & Digital Transformation",
    people: [
      p.david,
      {
        name: "Ezra Ochijenu",
        role: "Senior Consultant",
        bio: "Ezra has worked in consulting, data analytics and project management since 2021. He joined Carter in 2023 as a Consulting Intern, progressed through Associate Consultant to Senior Consultant, and now supports project delivery and research on ICT and public policy engagements.",
        experience: ["Data Analyst Intern, National Examinations Council (NECO)"],
        education: [
          "MBA candidate (class of 2027), Ahmadu Bello University",
          "BTech Industrial Mathematics, Federal University of Technology Minna",
          "Member, Chartered Institute of Project Management of Nigeria (CIPMN)",
        ],
        projects: [{ role: "Infrastructure Team Lead", project: SAPZ, caseStudy: CS.sapz }],
        interests: "In his personal time, Ezra enjoys playing home video games on PS4.",
        linkedin: "https://www.linkedin.com/in/ezra-ochijenu-1a0015ba",
      },
    ],
  },
  {
    id: "programme-project-delivery",
    title: "Programme & Project Delivery",
    people: [
      {
        name: "Abraham Atteh",
        role: "Senior Consultant, Strategy & Digital Transformation",
        bio: "Abraham has more than a decade of experience in management consulting, institutional reform and digital transformation. He joined Carter in 2019 and works with government and development agencies on public finance reform, strategy and programme delivery.",
        experience: ["Strategic Lead, Development and Management Consultancy, McGeorge Consulting"],
        education: ["B.Eng Mechanical Engineering, University of Ilorin", "MBA, University of Ilorin"],
        projects: [
          {
            role: "Technical Implementation Consultant",
            project: "Project Lighthouse (pilot phase)",
            caseStudy: CS.lighthouse,
          },
          { role: "Consultant", project: NEWMAP_GHG, caseStudy: CS.newmap },
          { role: "Consultant", project: "Oil and Gas E&P Cost Management: Capacity Enhancement for NPDC Staff" },
          { role: "Lead Consultant", project: "Development of the NASENI Strategic Roadmap" },
          { role: "Project Lead", project: "Capacity Enhancement Training for the NASENI Development Institutes" },
        ],
        interests:
          "Away from work, Abraham enjoys playing golf, networking and celebrating life with good company.",
        linkedin: "https://www.linkedin.com/in/attehabraham/",
      },
      {
        name: "Emmanuella Arikpo",
        role: "Consultant, Corporate Strategy",
        bio: "Emmanuella works in strategy consulting and public policy, delivering programmes across healthcare, agriculture, education and private sector development. She joined Carter in 2025 and works on healthcare, agriculture and verification engagements.",
        experience: ["Researcher, Civic Hive Youth Research Network"],
        education: ["BSc Political Science, University of Lagos"],
        projects: [
          {
            role: "Workstream Lead",
            project: `${SAPZ}: sesame market feasibility and value chain assessment`,
            caseStudy: CS.sapz,
          },
        ],
        interests:
          "When she's not at work, Emmanuella enjoys reading, volunteering and designing UI/UX interfaces.",
        linkedin: "https://www.linkedin.com/in/emmanuella-arikpo-a8796b3a0/",
      },
      {
        name: "Rere Oye",
        role: "Senior Consultant",
        bio: "Rere is a lawyer with more than five years of experience advising governments, regulators, development partners and investors on transactions, regulatory compliance and independent verification. She joined Carter in 2023.",
        experience: ["Senior Legal Counsel, Dentons ACAS-Law"],
        education: [
          "Master of Finance, University of Cambridge (Judge Business School)",
          "B.L., Nigerian Law School",
          "LLB, University of Leicester",
          "Member, Nigerian Bar Association",
        ],
        projects: [
          { role: "Legal Expert", project: "ID4D Independent Verification", caseStudy: CS.id4d },
          { role: "Legal Expert", project: "ICRC Concession Agreements Review" },
          { role: "Legal Expert", project: "Fintech Acquisition" },
        ],
        interests: "At leisure, Rere enjoys playing board games, swimming, reading, and travelling.",
        linkedin: "https://linkedin.com/in/rere-oye-9a06a4164",
      },
    ],
  },
  {
    id: "financial-transaction-advisory",
    title: "Financial & Transaction Advisory",
    people: [
      {
        name: "Toluwanimi Adeyefa",
        role: "Head of Finance and Investment",
        bio: "Toluwanimi has nearly a decade of experience in banking, asset management and investment, advising on infrastructure and real estate finance, fund operations and transaction financing. He joined Carter in 2026 and leads the finance and investment team.",
        experience: [
          "Head of Infrastructure Fund Operations and Senior Portfolio Manager, Stanbic IBTC Asset Management",
          "Portfolio Manager, Stanbic IBTC Asset Management (United Kingdom)",
          "International Trade Analyst, Stanbic IBTC Bank",
        ],
        education: [
          "MBA, Nexford University",
          "BSc Economics, University of Ibadan",
          "CFA Program Level 2 candidate, CFA Institute",
        ],
        projects: [
          { role: "Financial Viability Expert", project: OAKS },
          { role: "Financial Viability Expert", project: SAPZ, caseStudy: CS.sapz },
          { role: "Finance Expert", project: "Fintech Acquisition" },
        ],
        interests: "To recharge, Toluwanimi enjoys playing & watching tennis, football and movies.",
        linkedin: "https://www.linkedin.com/in/toluwanimi-adeyefa-846ba669/",
      },
      {
        name: "Emmanuel Anthony",
        role: "Senior Consultant, Financial & Transaction Advisory",
        bio: "Emmanuel has more than five years of experience in advisory and financial services. He joined Carter in 2025 and works on public-sector and multilateral-funded programmes across fiscal reform, independent verification and transaction structuring.",
        experience: [
          "Finance, Audit and Tax Manager, Euston British International High School",
          "Accountant, Financial Operations, Unforgettable Moment Shortlet Limited",
        ],
        education: ["BSc Accounting, University of Jos", "Member, Association of Chartered Accountants"],
        projects: [
          {
            role: "Senior Consultant",
            project: `${SAPZ}: investment, PPP and SPV structuring`,
            caseStudy: CS.sapz,
          },
          { role: "Financial Model Expert", project: PLATEAU },
          { role: "Financial Analyst", project: OAKS },
        ],
        interests: "Beyond work, Emmanuel enjoys playing football, hiking and reading.",
        linkedin: "https://www.linkedin.com/in/emmanuel-anthony-791446186/",
      },
    ],
  },
  {
    id: "sector-advisory",
    title: "Sector Advisory",
    people: [
      {
        name: "Dr Funke Onamusi",
        role: "Director",
        bio: "Funke is a medical doctor and healthcare management consultant with nearly two decades of experience in health and social care management and workforce development. She has led transformation programmes in digital health, financial improvements and service redesign for local health systems, payers, commissioners and providers in the UK and Nigeria.",
        experience: [
          "Programme Manager, Better Care Fund, NHS Luton CCG and Luton Borough Council",
          "Service Manager, Cambridgeshire Community Services NHS Trust",
          "Interim Project Manager, Quality and Clinical Governance, Central and North West London NHS Foundation Trust",
          "Assistant Manager, Health Advisory, KPMG UK",
        ],
        education: [
          "DBA, UCL Global Business School of Health (in progress)",
          "Private Equity & Venture Capital, Imperial College London",
          "Shaping Healthcare Delivery Policy, Harvard Kennedy School of Government",
          "MSc International Health Management, Imperial College London",
          "Financial Management Diploma, ACCA UK",
          "MBBS, Olabisi Onabanjo University",
        ],
        projects: [
          { role: "Healthcare Specialist", project: PLATEAU },
          { role: "Consultant", project: "Corporate Health Assessment Programmes" },
          { role: "Clinical Lead", project: "Tele-health Pilot for Rural Clinics" },
        ],
        interests:
          "When she's off the clock, Funke enjoys reading legal thrillers, watching documentaries and period dramas, travelling, bonding with her kids, cooking, learning Italian and piano.",
        linkedin: "https://www.linkedin.com/in/fonamusi/",
      },
      {
        name: "Adeola Olaleye",
        role: "Lead, Market Research and Insights",
        bio: "Adeola has more than nine years of experience in market research, communications and policy research. Since joining Carter in 2022, Adeola has led market and policy research for government and development-sector clients across digital policy, sanitation, youth development and healthcare.",
        experience: ["Social Media Manager, Classic Packaging, Lagos"],
        education: [
          "MA Communication and Language Arts, University of Ibadan",
          "BA Communication Arts, Bowen University",
          "Certificate in Digital Marketing, Institute of Digital Marketing",
        ],
        projects: [
          { role: "Market Feasibility Expert", project: SAPZ, caseStudy: CS.sapz },
          {
            role: "M&E Expert",
            project: "Independent Verification Agent for Nigeria Digital Identification for Development (ID4D)",
            caseStudy: CS.id4d,
          },
          { role: "Team Lead", project: PLATEAU },
          {
            role: "Media & Communications Expert",
            project: "Establishment & Restructuring of the Ministry of Finance Incorporated (MOFI)",
          },
          { role: "Team Member", project: "Sovereign Cloud Policy & Office for Nigerian Content (ONC)" },
          { role: "Project Lead", project: OAKS },
        ],
        interests: "For balance, Adeola enjoys watching movies & series, quality rest and wellness.",
        linkedin: "https://www.linkedin.com/in/adeola-olaleye-b60604161/",
      },
      {
        name: "Elijah Sunday",
        role: "Senior Consultant, Sector Advisory",
        bio: "Elijah has more than six years of experience in agribusiness, agritech, food systems and development programmes. He joined Carter in 2026 and works on multi-location advisory and field assignments across agribusiness and development.",
        experience: [
          "Senior Associate, Farmer Engagement and Hub Coordination, Hello Tractor",
          "Analyst, Data and Reporting, CropIT",
          "Process Control Analyst, Babban Gona",
        ],
        education: [
          "Master's in Financial Mathematics, University of Abuja",
          "Bachelor's in Mathematics and Statistics, Kogi State University",
        ],
        projects: [{ role: "Value Chain Analyst", project: SAPZ, caseStudy: CS.sapz }],
        interests:
          "Beyond work, Elijah enjoys leading conversations on agribusiness & social impact, travelling, and going on field trips.",
        linkedin: "https://www.linkedin.com/in/elijah-sunday-477b341b3/",
      },
      {
        name: "Morolake Onamusi",
        role: "Consultant, Environment Advisory",
        bio: "Morolake has more than a decade of experience across technology, education, data and consulting. She joined Carter in 2017 as a Data Analyst and is now a Consultant in Environment Advisory, where she conducts independent verification and evidence review for public-sector and development programmes.",
        experience: ["Data Manager, Educate Nigeria Foundation", "Installation and Support Executive, CHAMS PLC"],
        education: [
          "Mini-MBA, International Business Management Institute (IBMI)",
          "Human Resource Management, International Business Management Institute (IBMI)",
          "BSc Computer Science, University of Lagos",
          "Computer Forensics Associate, Computer Forensics in Nigeria",
        ],
        projects: [
          { role: "Data Analyst", project: "GHG Inventory for NEWMAP", caseStudy: CS.newmap },
          {
            role: "Trainer",
            project: "Budget Information Management and Monitoring Software (BIMMS)",
            caseStudy: CS.bimms,
          },
          { role: "Executive Assistant to the COO", project: "Project Lighthouse (VAIDS)", caseStudy: CS.lighthouse },
        ],
        interests: "When she's not working, Rolake enjoys karaoke, playing games and writing.",
        linkedin: "https://www.linkedin.com/in/morolake-onamusi/",
      },
      {
        name: "Caleb Adejoh",
        role: "Consultant",
        bio: "Caleb is a consultant with a background in pharmacy, data analysis and digital product development. He joined Carter in 2026 and works on business development and health sector engagements.",
        experience: ["Pharmacist, Yellowmed Pharmacy", "Pharmacy Intern, National Assembly of Nigeria"],
        education: ["BSc Pharmacy, Madonna University"],
        projects: [
          { role: "Market Strategy Consultant", project: OAKS },
          {
            role: "ESS & M&E Consultant",
            project: "Kano Special Agro-Industrial Processing Zones (SAPZ) Programme",
            caseStudy: CS.sapz,
          },
          { role: "Healthcare Diagnostic Consultant", project: PLATEAU },
        ],
        interests: "Caleb's hobbies and interests include playing chess, gardening, reading, and writing poetry.",
        linkedin: "https://www.linkedin.com/in/caleb-adejoh-9a729b203",
      },
      {
        name: "Joshua Daniel",
        role: "Consultant",
        bio: "Daniel is a consultant with a background in aeronautical engineering and operations. He joined Carter in 2025 as an Associate Consultant and now works on World Bank, AfDB and IsDB-funded programmes in independent verification, agrifinance and financial appraisal.",
        experience: [
          "Manager, Production and Operations, a manufacturing company in Kano",
          "CAD Designer, Scientific Equipment Development Institute (NASENI)",
        ],
        education: [
          "MBA candidate, Ahmadu Bello University",
          "B.Eng Aeronautical and Astronautical Engineering, Kwara State University",
        ],
        projects: [
          { role: "Data Analyst", project: "ID4D Independent Verification", caseStudy: CS.id4d },
          { role: "Co-Lead, Infrastructure Workstream", project: "SAPZ Kano", caseStudy: CS.sapz },
          {
            role: "Project Manager",
            project: "Development of an Integrated Management Information System (MIS) for Kuntaur Area Council, The Gambia",
          },
        ],
        interests: "In his spare time, Joshua enjoys jogging and hangouts.",
        linkedin: "https://www.linkedin.com/in/daniel-joshua-39789110a/",
      },
      {
        name: "Oluoma Ezionye-Eboh",
        role: "Consultant, Sector Advisory",
        bio: "Oluoma is a consultant with a background in electrical engineering, working across infrastructure, public sector reform and development finance. Oluoma joined Carter in 2026 and supports technical assessments, feasibility studies and due diligence for government and development-sector clients.",
        education: ["Electrical Engineering, University of Nigeria, Nsukka"],
        projects: [
          { role: "Consultant", project: `${SAPZ}: technical and feasibility assessment`, caseStudy: CS.sapz },
          { role: "Consultant", project: "Fintech Acquisition Due Diligence" },
        ],
        interests: "When he's off the clock, Oluoma enjoys playing football.",
        linkedin: "https://www.linkedin.com/in/oluoma-ezionye-eboh-707a121a0/",
      },
    ],
  },
];

export const ASSOCIATES: Person[] = [
  {
    name: "Joshua Ofiwe",
    role: "Technical Adviser",
    bio: "Joshua has more than eight years of experience in transaction advisory and development finance. As a Technical Adviser at Carter since 2023, he supports multilateral-funded programmes for government institutions and development finance institutions.",
    experience: ["IFRS Reporting Officer, Fidelity Bank", "Account Relationship Manager, Fidelity Bank"],
    education: [
      "BSc Accounting, University of Abuja",
      "Chartered Accountant (ACA), ICAN",
      "Financial Modeling and Valuation Analyst (FMVA)",
      "Project Finance Bootcamp, BFI and CFA Society Nigeria",
    ],
    projects: [
      { role: "Technical Adviser", project: SAPZ, caseStudy: CS.sapz },
      { role: "Technical Adviser", project: "NASENI Finance and Accounts Automation" },
      { role: "Programme Support", project: "Operationalisation of MREIF" },
    ],
    interests:
      "To unwind, Joshua enjoys working out, watching movies, reading, listening to music, and spending time with his family.",
    linkedin: "https://www.linkedin.com/in/joshuaofiwe/",
  },
  {
    name: "Abiola Adebiyi",
    role: "Technical Adviser",
    bio: "Abiola has more than five years of experience in programme delivery, development finance and independent verification. As a Technical Adviser at Carter, Abiola supports World Bank-backed and other public sector programmes.",
    experience: [
      "Forensic Accountant, General Compliance Ltd",
      "Technical Support Assistant, Asset Management Corporation of Nigeria (AMCON)",
    ],
    education: [
      "MSc Sustainable Development, University of Sussex",
      "BSc Accounting and Management, University of Essex",
    ],
    projects: [
      {
        role: "Technical Assistant",
        project: "ID4D Independent Verification (North Central Zone)",
        caseStudy: CS.id4d,
      },
      { role: "Project Manager", project: SAPZ, caseStudy: CS.sapz },
    ],
    interests: "In her spare time, Abiola enjoys playing badminton and flute.",
    linkedin: "https://www.linkedin.com/in/abiolaadebiyi/",
  },
  {
    name: "Olumide Famuyide",
    role: "Technical Adviser",
    bio: "Olumide has more than twenty years of experience in digital transformation and enterprise technology across enterprise software, procurement and aviation operations. As a Technical Adviser at Carter, he supports large-scale transformation projects for public and private sector clients in West and Central Africa.",
    experience: [
      "Project Management Lead, West and Central Africa, SITA",
      "Territory Account Manager, West Africa, Hitachi Data Systems",
      "Application Sales Representative, Public Sector, Oracle",
    ],
    education: [
      "MSc Information Technology with Business and Management, University of Sussex",
      "BSc Civil Engineering, University of Lagos",
      "Project Management Professional (PMP), Project Management Institute",
    ],
    projects: [
      { role: "Technical Adviser", project: SAPZ, caseStudy: CS.sapz },
      { role: "Technical Adviser", project: "National Assets Registry", caseStudy: CS.assets },
      { role: "Technical Adviser", project: PPP_CATALOGUE, caseStudy: CS.pppCatalogue },
      {
        role: "Technical Adviser",
        project: "Independent Verification Auditors for the Inventorisation of GHG Emissions of NEWMAP Intervention Sites",
        caseStudy: CS.newmap,
      },
      { role: "Technical Adviser", project: IPSAS },
    ],
    interests: "In his leisure time, Olumide enjoys the game of cricket, rokeby, tennis, and reading.",
    linkedin: "https://www.linkedin.com/in/olumide-famuyide-a879714/",
  },
];

/** Everyone on the site, each once. */
export const ALL_PEOPLE: Person[] = [...LEADERSHIP_TEAM, ...PRACTICE_TEAMS.flatMap((t) => t.people), ...ASSOCIATES].filter(
  (person, i, all) => all.indexOf(person) === i,
);

/** The Carter people whose project profiles reference a case study, with their role on it. */
export const teamFor = (caseStudyId: string) =>
  ALL_PEOPLE.flatMap((person) =>
    (person.projects ?? [])
      .filter((pr) => pr.caseStudy === caseStudyId)
      .slice(0, 1)
      .map((pr) => ({ name: person.name, role: pr.role })),
  );

export const EXPERTISE_AREAS = [
  "Strategy & Public Policy",
  "Technology & Digital Transformation",
  "Programme & Project Delivery",
  "Financial & Transaction Advisory",
  "Energy, Environment & Health Systems",
  "Other",
];

/** Name without honorifics, as a file slug: "Prof. David Agogo" → "david-agogo". */
const slug = (name: string) =>
  name
    .replace(/^(Dr|Prof\.?)\s+/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Portraits in public/images/people, named `<slug>-480.webp`. Add a slug here when a new photo is supplied.
const PHOTOS = new Set([
  "abiola-adebiyi",
  "abraham-atteh",
  "adeniyi-onamusi",
  "adeola-olaleye",
  "caleb-adejoh",
  "david-agogo",
  "elijah-sunday",
  "emmanuella-arikpo",
  "ezra-ochijenu",
  "funke-onamusi",
  "joshua-daniel",
  "joshua-ofiwe",
  "morolake-onamusi",
  "olumide-famuyide",
  "oluoma-ezionye-eboh",
  "rere-oye",
  "temitayo-falana",
]);

export const photoOf = (name: string) => {
  const s = slug(name);
  return PHOTOS.has(s) ? `/images/people/${s}-480.webp` : undefined;
};

export const initials = (name: string) =>
  name
    .replace(/^(Dr|Prof\.?)\s+/, "")
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
