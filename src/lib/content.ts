export const NAV = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/our-people", label: "Our People" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const HERO_PHRASES = [
  "government policy",
  "development ambition",
  "business strategy",
];

export const CLOSING_PHRASES = [
  "a new policy…",
  "a major investment…",
  "a technology platform…",
  "a reform programme…",
  "a new operating model…",
];

export type Practice = {
  number: string;
  slug: string;
  title: string;
  statement: string;
  proof: { title: string; client: string; slug: string };
  image: string;
};

export const PRACTICES: Practice[] = [
  {
    number: "01",
    slug: "strategy-public-policy",
    title: "Strategy & Public Policy Advisory",
    statement:
      "Translating ambition into implementable strategy, and policy intent into actionable instruments and models for organisations making consequential choices about growth, reform, investment and performance.",
    proof: {
      title: "Federal Capital Project Expenditure Study",
      client: "World Bank / IDA",
      slug: "federal-capital-project-expenditure-study",
    },
    image: "/images/strategy.jpg",
  },
  {
    number: "02",
    slug: "technology-digital-transformation",
    title: "Technology & Digital Transformation",
    statement:
      "Enterprise architecture and digital government platforms designed around the way organisations need to operate and the outcomes they intend to deliver.",
    proof: {
      title: "Budget Information Management and Monitoring Software (BIMMS)",
      client: "Budget Office of the Federation",
      slug: "bimms",
    },
    image: "/images/tech.jpg",
  },
  {
    number: "03",
    slug: "programme-project-delivery",
    title: "Programme & Project Delivery",
    statement:
      "Capability and discipline required to take complex programmes from strategy and mobilisation through implementation, governance and delivery, with the structures needed to sustain results.",
    proof: {
      title: "Nationwide ICT Capacity Building for Tertiary Education",
      client: "45+ institutions, six geopolitical zones",
      slug: "nationwide-ict-capacity-building",
    },
    image: "/images/delivery.jpg",
  },
  {
    number: "04",
    slug: "financial-transaction-advisory",
    title: "Financial & Transaction Advisory",
    statement:
      "Bringing financial, commercial and transaction expertise to complex investment decisions, from tax and risk assessment through business case development, value-chain planning, transaction structuring and execution.",
    proof: {
      title: "LPG Value Chain Business Planning",
      client: "Levene Energy / NSIA",
      slug: "lpg-value-chain-business-planning",
    },
    image: "/images/finance.jpg",
  },
  {
    number: "05",
    slug: "sector-advisory",
    title: "Sector Advisory — Energy, Environment & Health Systems",
    statement:
      "Advisory grounded in specialist expertise to address complex sector and institutional challenges, spanning energy transition, environmental and social risk, infrastructure, health system performance, financing and reform.",
    proof: {
      title: "Framework for LPG Adoption as a Low-Carbon Alternative",
      client: "World Bank / NEWMAP",
      slug: "lpg-adoption-framework",
    },
    image: "/images/sector.jpg",
  },
];

/** Practice title without its sector subtitle, e.g. "Sector Advisory". */
export const shortTitle = (title: string) => title.split(" — ")[0];

// Wordmarks stand in until approved partner logo files are supplied.
export const PARTNERS = [
  { short: "World Bank", name: "Nigeria Erosion and Watershed Management Project (NEWMAP)" },
  { short: "NSIA", name: "Nigeria Sovereign Investment Authority" },
  { short: "Levene", name: "Levene Energy" },
  { short: "NITDA", name: "National Information Technology Development Agency" },
  { short: "FCTA", name: "Federal Capital Territory Administration" },
  { short: "Budget Office", name: "Federal Ministry of Budget and National Planning" },
];

export const PILLARS = [
  {
    title: "Intellectual Rigour",
    body: "We begin with evidence. Our analysis draws on primary research, local data and a clear understanding of the institutional context in which decisions are made. We test assumptions against what is known, identify what is not, and build recommendations around the realities of the problem rather than a predetermined solution.",
  },
  {
    title: "Cross-Domain Fluency",
    body: "Complex problems rarely sit within a single discipline. Our teams work across strategy, technology, policy, finance and sector expertise, bringing the relevant perspectives together around the problem to be solved. This allows the strategic case, operating model, technology requirements and route to implementation to be considered as parts of the same decision.",
  },
  {
    title: "Institutional Access & Understanding",
    body: "Our work across government departments, regulators, international development partners and the private sector has given us a practical understanding of how institutions operate, how decisions are made and where implementation can become constrained. We bring that understanding into the design of our recommendations, with close attention to governance, financing, institutional capacity and the conditions required for adoption.",
  },
  {
    title: "Delivery Discipline",
    body: "We consider implementation requirements from the outset. Programmes and recommendations are developed with clear governance, resources, responsibilities, delivery milestones and measures of success. Where our role extends into implementation, we work alongside the client to establish the structures and capability required to move the work from design into sustained delivery.",
  },
];

/** Offices, also marked on the About map; coords are [longitude, latitude]. */
/**
 * Offices, also marked on the About map. Coords are [longitude, latitude];
 * `country` must match the country's name in world-atlas (e.g. "United Kingdom").
 */
export const OFFICES: { city: string; country: string; address: string; coords: [number, number] }[] = [
  { city: "Abuja", country: "Nigeria", address: "32 Bamenda Crescent, Wuse Zone 3", coords: [7.4891, 9.0765] },
  { city: "Kano", country: "Nigeria", address: "56 Badawa Layout, Nassarawa GRA", coords: [8.5364, 12.0022] },
  { city: "Lagos", country: "Nigeria", address: "15 Abagbon Close, Victoria Island", coords: [3.4219, 6.4281] },
  { city: "London", country: "United Kingdom", address: "20-22 Wenlock Road, N1 7GU", coords: [-0.0937, 51.5321] },
];

/* ---------- About ---------- */

export const PRINCIPLES = [
  {
    title: "Insight",
    body: "We look beyond the immediate brief to understand the institutional, commercial, regulatory and operational realities that shape a decision. We examine the assumptions behind a problem, the interests and constraints of those involved, and the factors that may determine whether a proposed course of action can succeed. This broader view allows us to bring clarity to complex decisions and identify considerations that may not be apparent at the outset.",
  },
  {
    title: "Relevance",
    body: "We develop advice that is grounded in the context in which it will be applied. Our recommendations take account of the resources, capabilities, systems, incentives and constraints of the organisations and markets we work with. We believe advice is most valuable when it reflects the realities of the environment and provides a practical basis for decision-making, investment and implementation.",
  },
  {
    title: "Accountability",
    body: "We remain focused on the outcome, taking responsibility for the quality and implications of our advice. Where our role extends into implementation, we bring the same discipline to governance, execution and performance. We work with clients to maintain a clear connection between the decisions being made, the resources committed and the results expected, recognising that good advice ultimately has to stand up in practice.",
  },
];

/** Track record milestones. Add entries between 2009 and today; the ruler spans the full range. */
export const TIMELINE: { year: number; title: string; body?: string }[] = [
  { year: 2009, title: "Carter Consulting established" },
  { year: 2026, title: "Offices in Abuja, Kano, Lagos and London" },
];
export const TIMELINE_RANGE = [2009, 2026] as const;

/**
 * Map locations: coords are [longitude, latitude]. Each links a place to
 * selected assignments.
 */
export const WORK_LOCATIONS: {
  id: string;
  name: string;
  region: string;
  coords: [number, number];
  /** Map view to fly to: "world", "africa", or a covered country's name. */
  view: string;
  engagements: string[];
}[] = [
  {
    id: "abuja",
    name: "Abuja & the FCT",
    region: "Nigeria",
    coords: [7.4951, 9.0579],
    view: "Nigeria",
    engagements: [
      "BIMMS",
      "NITDA Compliance Framework",
      "FCTA E-Government Systems Integration",
      "Economic Dashboard & Policy Analysis Laboratory",
    ],
  },
];

export const CAREER_LINES = [
  "Considering a new role…",
  "a broader field of work…",
  "the opportunity to work across disciplines…",
  "a place where your judgement is valued…",
  "or the next stage of your professional development…",
];

/* ---------- Services ---------- */

type Capability = { title: string; body: string };

/** Services-page detail for each practice, keyed by the practice slug. */
export const SERVICES: Record<
  string,
  { intro: string; capabilities?: Capability[]; sectors?: { name: string; items: Capability[] }[] }
> = {
  "strategy-public-policy": {
    intro:
      "We help governments, institutions and businesses translate strategic ambition into clear priorities, sound policy and executable plans. Our work considers the institutional, regulatory, political and operational conditions that shape what can be achieved.",
    capabilities: [
      {
        title: "Strategy Development & Alignment",
        body: "We translate organisational and business priorities into strategies with clear objectives, implementation pathways and resource requirements.",
      },
      {
        title: "Public Policy Design & Regulatory Reform",
        body: "We develop evidence-based policies, regulatory frameworks and implementation models informed by institutional context and stakeholder interests.",
      },
      {
        title: "Institutional & Operational Advisory",
        body: "We support organisations in responding to changing environments, strengthening performance, and aligning operating models, capabilities, and resources with strategic priorities.",
      },
    ],
  },
  "technology-digital-transformation": {
    intro:
      "We design technology around the required organisational or public-service outcome, connecting strategy, enterprise architecture, systems, and implementation.",
    capabilities: [
      {
        title: "IT Strategy & Enterprise Architecture",
        body: "We translate strategic priorities into practical technology architectures and roadmaps that support business and institutional objectives.",
      },
      {
        title: "Digital Government & Systems Deployment",
        body: "We design and deploy digital platforms and systems for institutional and national-scale environments, with consideration for interoperability, adoption, governance and sustainability.",
      },
      {
        title: "ICT Capability & Compliance",
        body: "We assess technology capability, establish compliance frameworks and build the skills and structures required for sustainable adoption and effective system management.",
      },
    ],
  },
  "programme-project-delivery": {
    intro:
      "We provide the structures, governance and delivery discipline required to move complex programmes from strategic intent to implementation and measurable results.",
    capabilities: [
      {
        title: "Programme Design & Governance",
        body: "We establish programme structures, governance arrangements, delivery priorities and performance frameworks that enable effective management of risk, value and benefits.",
      },
      {
        title: "Delivery & Risk Management",
        body: "We support delivery teams to identify and manage the technological, economic, political and operational factors that can affect programme performance.",
      },
      {
        title: "Benefits Realisation & Institutional Handover",
        body: "We build capability transfer, institutional ownership and benefits assessment into delivery so that results can be sustained beyond the engagement.",
      },
    ],
  },
  "financial-transaction-advisory": {
    intro:
      "We advise public and private-sector clients on the financial, commercial and structural decisions that underpin investment, transactions and long-term partnerships. Our work spans financial analysis, tax and assurance, investment cases, transaction structuring, and public-private partnership and concession development.",
    capabilities: [
      {
        title: "Tax, Audit & Risk Assurance",
        body: "We advise on corporate and personal taxation, withholding tax and VAT, alongside audit, financial controls and risk management. Our work supports regulatory compliance, strengthens assurance and provides clients with a clearer basis for financial and commercial decision-making.",
      },
      {
        title: "Transaction & Investment Advisory",
        body: "We develop business plans, investment cases, value-chain analysis and feasibility assessments to support investment decisions and transaction execution. Our work considers commercial viability, financing requirements, risk allocation and the interests of investors, lenders and other stakeholders.",
      },
      {
        title: "PPP & Concession Advisory",
        body: "We support governments, institutions and private-sector partners across the development, structuring and management of public-private partnerships and concessions. This includes project and opportunity assessment, commercial and financial structuring, risk allocation, procurement support, negotiation and ongoing contract and performance management.",
      },
    ],
  },
  "sector-advisory": {
    intro:
      "We combine sector expertise with our strategy, technology, financing and programme capabilities to address complex challenges across energy, environment and health systems.",
    sectors: [
      {
        name: "Energy",
        items: [
          {
            title: "Market & Regulatory Design",
            body: "We advise on market structures, regulatory frameworks and institutional arrangements that support energy transition and investment.",
          },
          {
            title: "Financing & Investment Advisory",
            body: "We develop investment cases, business plans and value-chain analysis for energy infrastructure and related opportunities.",
          },
          {
            title: "Infrastructure & Distribution Planning",
            body: "We support the planning and development of energy infrastructure and distribution systems, with project capabilities tailored to client requirements.",
          },
        ],
      },
      {
        name: "Environment",
        items: [
          {
            title: "Environmental & Social Impact Assessment",
            body: "We assess environmental and social risks associated with development activity and support the development of appropriate management measures.",
          },
          {
            title: "Environmental Management & Safeguards",
            body: "We develop Environmental Management Plans and Environmental and Social Management Frameworks aligned with applicable regulatory and development-partner requirements.",
          },
          {
            title: "Sustainability & Climate Advisory",
            body: "We support organisations to assess climate and sustainability considerations across operations, supply chains and investment decisions.",
          },
        ],
      },
      {
        name: "Health Systems",
        items: [
          {
            title: "Health Market Shaping & Regulatory Design",
            body: "We support governments and regulators to establish the institutional and regulatory conditions required for effective and sustainable health markets.",
          },
          {
            title: "Health Financing & Transaction Advisory",
            body: "We advise on financing structures that bring together public, private and development capital to support health-sector investment.",
          },
          {
            title: "Health Systems Design & Delivery",
            body: "We support subnational governments and institutions to plan and sequence health services, infrastructure and workforce requirements within financeable implementation roadmaps.",
          },
          {
            title: "Digital & Data Infrastructure",
            body: "Digital and data capabilities underpin our health-sector work, supporting the registries, information systems and digital infrastructure required for effective governance, financing and service delivery.",
          },
        ],
      },
    ],
  },
};

/* ---------- Contact ---------- */

export const CONTACT_HEADLINES = [
  "For decisions where conventional approaches fall short",
  "For projects without an established playbook",
  "For assignments where precedent is not enough",
  "For challenges that require more than a template",
  "For work that demands clarity, judgement and perspective",
];

export const PRACTICE_AREAS = [
  "Strategy & Public Policy Advisory",
  "Technology & Digital Transformation",
  "Programme & Project Delivery",
  "Financial & Transaction Advisory",
  "Sector Advisory — Energy, Environment & Health",
  "General enquiry",
];

export const GENERAL_CONTACT = {
  email: "info@carterltd.com",
  phone: "+234 703 396 7940",
};

export const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Practice Areas" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/our-people", label: "Our People" },
  { href: "/contact", label: "Contact Us" },
];
