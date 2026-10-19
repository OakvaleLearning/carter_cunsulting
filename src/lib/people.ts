export type Person = {
  name: string;
  role: string;
  /** Omitted until a confirmed biography is supplied. */
  bio?: string;
  experience?: string[];
  education?: string[];
  /** The closing personal line of the biography. */
  interests?: string;
  linkedin?: string;
};

export type Group = { id: string; title: string; people: Person[] };

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
        interests: "In his personal time, Ezra enjoys playing home video games on PS4.",
        linkedin: "https://www.linkedin.com/in/ezra-ochijenu-1a0015ba",
      },
      {
        name: "Morolake Onamusi",
        role: "Senior Consultant",
        bio: "Morolake has more than a decade of experience across technology, education, data and consulting. She joined Carter in 2017 as a Data Analyst and is now a Consultant in Environment Advisory, where she conducts independent verification and evidence review for public-sector and development programmes.",
        experience: ["Data Manager, Educate Nigeria Foundation", "Installation and Support Executive, CHAMS PLC"],
        education: [
          "Mini-MBA, International Business Management Institute (IBMI)",
          "Human Resource Management, International Business Management Institute (IBMI)",
          "BSc Computer Science, University of Lagos",
          "Computer Forensics Associate, Computer Forensics in Nigeria",
        ],
        interests: "When she's not working, Rolake enjoys karaoke, playing games and writing.",
        linkedin: "https://www.linkedin.com/in/morolake-onamusi/",
      },
    ],
  },
  {
    id: "programme-project-delivery",
    title: "Programme & Project Delivery",
    people: [
      {
        name: "Abraham Atteh",
        role: "Senior Consultant",
        bio: "Abraham has more than a decade of experience in management consulting, institutional reform and digital transformation. He joined Carter in 2019 and works with government and development agencies on public finance reform, strategy and programme delivery.",
        experience: ["Strategic Lead, Development and Management Consultancy, McGeorge Consulting"],
        education: ["B.Eng Mechanical Engineering, University of Ilorin", "MBA, University of Ilorin"],
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
        interests: "To recharge, Toluwanimi enjoys playing & watching tennis, football and movies.",
        linkedin: "https://www.linkedin.com/in/toluwanimi-adeyefa-846ba669/",
      },
      {
        name: "Emmanuel Anthony",
        role: "Senior Consultant",
        bio: "Emmanuel has more than five years of experience in advisory and financial services. He joined Carter in 2025 and works on public-sector and multilateral-funded programmes across fiscal reform, independent verification and transaction structuring.",
        experience: [
          "Finance, Audit and Tax Manager, Euston British International High School",
          "Accountant, Financial Operations, Unforgettable Moment Shortlet Limited",
        ],
        education: ["BSc Accounting, University of Jos", "Member, Association of Chartered Accountants"],
        interests: "Beyond work, Emmanuel enjoys playing football, hiking and reading.",
        linkedin: "https://www.linkedin.com/in/emmanuel-anthony-791446186/",
      },
      {
    name: "Abiola Adebiyi",
    role: "Technical Advisor",
    bio: "Abiola has more than five years of experience in programme delivery, development finance and independent verification. As a Technical Advisor at Carter, Abiola has supported World Bank-backed and other public sector programmes.",
    experience: [
      "Forensic Accountant, General Compliance Ltd",
      "Technical Support Assistant, Asset Management Corporation of Nigeria (AMCON)",
    ],
    education: [
      "MSc Sustainable Development, University\u00a0of\u00a0Sussex",
      "BSc Accounting and Management, University of Essex",
    ],
    interests: "In her spare time, Abiola enjoys playing badminton and flute.",
    linkedin: "https://www.linkedin.com/in/abiolaadebiyi/",
  }
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
        interests:
          "Beyond work, Elijah enjoys leading conversations on agribusiness & social impact, travelling, and going on field trips.",
        linkedin: "https://www.linkedin.com/in/elijah-sunday-477b341b3/",
      },
      {
        name: "Caleb Adejoh",
        role: "Consultant",
        bio: "Caleb is a consultant with a background in pharmacy, data analysis and digital product development. He joined Carter in 2026 and works on business development and health sector engagements.",
        experience: ["Pharmacist, Yellowmed Pharmacy", "Pharmacy Intern, National Assembly of Nigeria"],
        education: ["BSc Pharmacy, Madonna University"],
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
        interests: "In his spare time, Joshua enjoys jogging and hangouts.",
        linkedin: "https://www.linkedin.com/in/daniel-joshua-39789110a/",
      },
      {
        name: "Oluoma Ezionye-Eboh",
        role: "Consultant, Sector Advisory",
        bio: "Oluoma is a consultant with a background in electrical engineering, working across infrastructure, public sector reform and development finance. Oluoma joined Carter in 2026 and supports technical assessments, feasibility studies and due diligence for government and development-sector clients.",
        education: ["Electrical Engineering, University of Nigeria, Nsukka"],
        interests: "When he's off the clock, Oluoma enjoys playing football.",
        linkedin: "https://www.linkedin.com/in/oluoma-ezionye-eboh-707a121a0/",
      },
    ],
  },
];

export const ASSOCIATES: Person[] = [
  // {
  //   name: "Joshua Ofiwe",
  //   role: "Technical Advisor",
  //   bio: "Joshua has more than eight years of experience in transaction advisory and development finance. As a Technical Advisor at Carter, he has supported multilateral-funded programmes for government institutions and development finance institutions.",
  //   experience: ["IFRS Reporting Officer, Fidelity Bank", "Account Relationship Manager, Fidelity Bank"],
  //   education: [
  //     "BSc Accounting, University of Abuja",
  //     "Chartered Accountant (ACA), ICAN",
  //     "Financial Modeling and Valuation Analyst (FMVA)",
  //     "Project Finance Bootcamp, BFI and CFA Society Nigeria",
  //   ],
  //   interests:
  //     "To unwind, Joshua enjoys working out, watching movies, reading, listening to music, and spending time with his family.",
  //   linkedin: "https://www.linkedin.com/in/joshuaofiwe/",
  // },
  {
    name: "Abiola Adebiyi",
    role: "Technical Advisor",
    bio: "Abiola has more than five years of experience in programme delivery, development finance and independent verification. As a Technical Advisor at Carter, Abiola has supported World Bank-backed and other public sector programmes.",
    experience: [
      "Forensic Accountant, General Compliance Ltd",
      "Technical Support Assistant, Asset Management Corporation of Nigeria (AMCON)",
    ],
    education: [
      "MSc Sustainable Development, University\u00a0of\u00a0Sussex",
      "BSc Accounting and Management, University of Essex",
    ],
    interests: "In her spare time, Abiola enjoys playing badminton and flute.",
    linkedin: "https://www.linkedin.com/in/abiolaadebiyi/",
  },
  // {
  //   name: "Olumide Famuyide",
  //   role: "Technical Advisor",
  //   bio: "Olumide has more than twenty years of experience in digital transformation and enterprise technology across enterprise software, procurement and aviation operations. As a Technical Advisor at Carter, he has supported large-scale transformation projects in West and Central Africa.",
  //   experience: [
  //     "Project Management Lead, West and Central Africa, SITA",
  //     "Territory Account Manager, West Africa, Hitachi Data Systems",
  //     "Application Sales Representative, Public Sector, Oracle",
  //   ],
  //   education: [
  //     "MSc Information Technology with Business and Management, University\u00a0of\u00a0Sussex",
  //     "BSc Civil Engineering, University of Lagos",
  //     "Project Management Professional (PMP), Project Management Institute",
  //   ],
  //   interests: "In his leisure time, Olumide enjoys the game of cricket, rokeby, tennis, and reading.",
  //   linkedin: "https://www.linkedin.com/in/olumide-famuyide-a879714/",
  // },
];

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
  "toluwanimi-adeyefa",
  "emmanuel-anthony",
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
