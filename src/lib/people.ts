export type Person = {
  name: string;
  role: string;
  /** Omitted until a confirmed biography is supplied. */
  bio?: string;
  linkedin?: string;
};

export type Group = { id: string; title: string; people: Person[] };

const p = {
  adeniyi: {
    name: "Dr Adeniyi Onamusi",
    role: "Managing Partner",
    bio: "Adeniyi Onamusi is a management executive with experience across corporate strategy, business development, corporate finance and human capital management. His work includes strategic planning, revenue optimization, talent development, strategic alliances, process improvement and organizational expansion, with a focus on helping businesses and professionals achieve sustainable growth across Africa.",
    linkedin: "https://www.linkedin.com/in/drfrenzo/",
  },
  tayo: {
    name: "Tayo Falana",
    role: "Chief Operating Officer",
    bio: "Tayo Falana is a technology and business transformation professional with over 15 years of experience across telecommunications, information technology, project management, research and analytics. His work includes IT strategy, digital transformation, technology solutions, project and risk management, business continuity and process improvement, with experience supporting public- and private-sector organizations and international development initiatives.",
    linkedin: "https://linkedin.com/in/tayo-falana-b50905248",
  },
  david: {
    name: "Prof. David Agogo",
    role: "Director, Technology & Digital Transformation",
    bio: "David Agogo is a technology strategist, academic and consultant with expertise across artificial intelligence, cloud computing, data analytics and digital transformation. His work includes AI strategy, business analytics, data governance, cloud technologies and technology-enabled organizational transformation, complemented by experience in academic research, teaching and building capabilities for an increasingly AI-driven economy.",
    linkedin: "https://linkedin.com/in/a9090z",
  },
} satisfies Record<string, Person>;

export const LEADERSHIP_TEAM: Person[] = [p.adeniyi, p.tayo, p.david];

export const PRACTICE_TEAMS: Group[] = [
  {
    id: "strategy-public-policy",
    title: "Strategy & Public Policy Advisory",
    people: [{ name: "Gbeminiyi Onikute", role: "Practice Lead" }],
  },
  {
    id: "technology-digital-transformation",
    title: "Technology & Digital Transformation",
    people: [
      p.david,
      {
        name: "Ezra Ochijenu",
        role: "Consultant",
        bio: "Ezra Ochijenu is a management consultant with experience in technology advisory, data analytics and project management. His work includes supporting organizations with technology-enabled solutions, data visualization, business analysis and digital process improvement, combining analytical insight with practical project management to help organizations improve operations and make informed technology decisions.",
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
        role: "Practice Lead",
        bio: "Abraham Atteh is a management consultant with experience across public- and private-sector transformation, transaction advisory and strategic planning. His work includes project concept development, financial analysis, scenario planning and business process improvement, with experience supporting major institutional transformation initiatives and working with multilateral agencies.",
        linkedin: "https://www.linkedin.com/in/attehabraham/",
      },
      {
        name: "Emmanuella Arikpo",
        role: "Consultant",
        linkedin: "https://www.linkedin.com/in/emmanuella-arikpo-a8796b3a0/",
      },
      {
        name: "Rere Oye",
        role: "Consultant",
        bio: "Rere Oye is a Consultant, Programme & Project Delivery professional with a legal and corporate advisory background. Her experience spans project coordination, stakeholder engagement, research and analysis, and business assessment, with additional exposure to investment and emerging sectors including HealthTech, PropTech and artificial intelligence.",
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
        role: "Practice Lead",
        bio: "Toluwanimi Adeyefa is a financial and transaction advisory professional with extensive experience across banking, asset management, trade services and investment management. His work includes financial analysis, transaction monitoring, trade advisory, risk management and investment operations, with eight years of experience at Stanbic IBTC across banking and asset management and experience managing infrastructure fund operations. He brings a strong understanding of financial markets, investment strategy and risk to his work at Carter Consulting.",
        linkedin: "https://www.linkedin.com/in/toluwanimi-adeyefa-846ba669/",
      },
      {
        name: "Emmanuel Anthony",
        role: "Consultant",
        bio: "Emmanuel Chisom Anthony is a Senior Consultant in Financial & Transaction Advisory with over five years of experience across transaction advisory, development finance and public-sector financial reform. His work includes financial analysis, investment structuring, PPP and SPV structuring, fiscal reform assessment and independent verification, with experience supporting World Bank, IsDB and other multilateral-funded programmes across Nigeria.",
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
        role: "Director, Sector Advisory",
        bio: "Funke Onamusi is a healthcare management and strategy professional with nearly two decades of experience across healthcare consulting, programme leadership, workforce development and entrepreneurship. Her work includes healthcare systems transformation, operational strategy, workforce development, digital learning and social impact initiatives, with experience building and scaling healthcare services and developing solutions that address workforce and service delivery challenges.",
        linkedin: "https://www.linkedin.com/in/fonamusi/",
      },
      {
        name: "Caleb Adejoh",
        role: "Consultant (Health)",
        bio: "Caleb Adejoh is a consultant with a focus on data, technology and business development, particularly in building solutions that support the growth of Nigerian SMEs. His work includes data-driven strategy, digital ecosystem development, platform management and identifying opportunities that improve business visibility and access to finance, with a strong interest in using technology to drive sustainable economic growth.",
        linkedin: "https://www.linkedin.com/in/caleb-adejoh-9a729b203",
      },
      {
        name: "Elijah Sunday",
        role: "Consultant",
        bio: "Elijah Sunday is a Senior Consultant with over six years of experience across agribusiness, AgriTech, development programmes and market systems strengthening. His work includes strategy execution, programme and project management, agricultural value chains, field operations, monitoring and evaluation, and stakeholder engagement, with experience supporting donor-funded initiatives reaching over 200,000 farmers and agribusinesses. He combines data-driven analysis with practical field expertise to translate strategic priorities into measurable programme outcomes.",
        linkedin: "https://www.linkedin.com/in/elijah-sunday-477b341b3/",
      },
      {
        name: "Adeola Olaleye",
        role: "Consultant (Environment)",
        bio: "Adeola Olaleye is a Consultant in Sector Advisory with experience in marketing communications, digital marketing and creative content development. Her expertise includes research, content strategy, social media management, search engine optimization, email marketing and campaign development, supporting organizations with effective communication and digital engagement strategies.",
        linkedin: "https://www.linkedin.com/in/adeola-olaleye-b60604161/",
      },
      {
        name: "Morolake Onamusi",
        role: "Consultant",
        bio: "Morolake Onamusi is a technology and consulting professional with over a decade of experience across technology, education, data, and digital transformation. Her work includes technology-enabled solutions, product development, research and analysis, stakeholder engagement, and digital transformation, with experience supporting organizations in applying technology to improve operations and address complex challenges across education and other sectors.",
        linkedin: "https://www.linkedin.com/in/morolake-onamusi/",
      },
      { name: "Olawale Tinko", role: "Consultant" },
      {
        name: "Joshua Daniel",
        role: "Consultant (Energy)",
        bio: "Daniel Joshua is a Consultant in Sector Advisory with experience across strategy, operations and data analysis, complemented by an academic background in Aeronautical and Astronautical Engineering. His work involves applying analytical and strategic approaches to support organizational decision-making, operational improvement and sector-focused advisory engagements.",
        linkedin: "https://www.linkedin.com/in/daniel-joshua-39789110a/",
      },
      {
        name: "Oluoma Ezionye-Eboh",
        role: "Consultant (Environment)",
        bio: "Oluoma Ezionye-eboh is a Consultant in Sector Advisory with a focus on environmental advisory. His work supports sector-focused consulting engagements, contributing to research, analysis and advisory activities related to environmental and development priorities.",
        linkedin: "https://www.linkedin.com/in/oluoma-ezionye-eboh-707a121a0/",
      },
    ],
  },
];

export const ASSOCIATES: Person[] = [
  {
    name: "Joshua Ofiwe",
    role: "Consultant / Technical Adviser",
    bio: "Joshua Ofiwe is a Consultant and Technical Adviser with over eight years of experience across transaction advisory, development finance and project finance. His work includes programme implementation, independent verification, investor readiness, project planning and multi-stakeholder coordination, with extensive experience supporting World Bank, AfDB and IsDB-funded initiatives across Nigeria.",
    linkedin: "https://www.linkedin.com/in/joshuaofiwe/",
  },
  {
    name: "Abiola Adebiyi",
    role: "Consultant",
    bio: "Abiola Adebiyi is a development consultant and social impact professional with over six years of experience across programme delivery, development finance, transaction advisory and public-sector reform. Her work includes programme implementation, independent verification, transaction advisory, forensic and compliance reviews, stakeholder engagement and institutional transformation, with experience supporting World Bank and DFI-backed programmes, government institutions and private-sector advisory mandates.",
    linkedin: "https://www.linkedin.com/in/abiolaadebiyi/",
  },
  {
    name: "Olumide Famuyide",
    role: "Consultant",
    bio: "Olumide Famuyide is a digital transformation and business solutions professional with over 20 years of experience across enterprise technology, aviation and public-sector solutions. His career includes senior account management and technology sales roles, as well as consulting and public-sector advisory experience. His work spans strategic account management, enterprise software, technology deployment, business development and transformation initiatives, with extensive experience supporting organizations across West and Central Africa.",
    linkedin: "https://www.linkedin.com/in/olumide-famuyide-a879714/",
  },
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
  "tayo-falana",
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
