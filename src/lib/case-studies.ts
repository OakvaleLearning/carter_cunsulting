/**
 * Project profiles from the case-studies copy, newest award first.
 * `practice` is the label in the copy; `group` maps it to one of the five
 * site practices (by slug) for filtering.
 */
export type CaseStudy = {
  id: string;
  number: string;
  year: number;
  client: string;
  title: string;
  practice: string;
  group: string;
  funding: string;
  role: string;
  status: "Completed" | "Ongoing";
  summary: string;
  deliverHeading: string;
  deliverables: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    "id": "independent-verification-agent-for-the-nigeria-digital-identification-for-development-project",
    "number": "01",
    "year": 2025,
    "client": "Nigeria Digital Identification for Development Project",
    "title": "Independent Verification Agent for the Nigeria Digital Identification for Development Project",
    "practice": "Monitoring and Verification",
    "group": "programme-project-delivery",
    "funding": "Nigeria ID4D Project",
    "role": "Independent Verification Agent in Joint Venture",
    "status": "Completed",
    "summary": "Carter Consulting, in joint venture with the Microflex Consortium, was appointed as the Independent Verification Agent for the Nigeria Digital Identification for Development Project under the National Identity Management Commission. The three-month engagement established an independent assurance function for reviewing project evidence, validating reported results and supporting objective assessment of implementation performance. The assignment was structured to give the Project Implementation Unit a clear, evidence-based basis for confirming achievements, identifying gaps and strengthening accountability across the digital identity programme.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Developed an independent verification approach aligned with the project terms of reference.",
      "Reviewed project records, implementation evidence and supporting documentation.",
      "Tested reported outputs and achievements against agreed verification requirements.",
      "Engaged the Project Implementation Unit and relevant implementation stakeholders.",
      "Documented verification findings, exceptions and evidence gaps requiring resolution.",
      "Prepared independent verification reports to support transparent project decision-making."
    ]
  },
  {
    "id": "transaction-advisory-services-for-the-kano-state-special-agro-industrial-processing-zone",
    "number": "02",
    "year": 2025,
    "client": "Special Agro Industrial Processing Zones Programme",
    "title": "Transaction Advisory Services for the Kano State Special Agro Industrial Processing Zone",
    "practice": "Financial and Transaction Advisory",
    "group": "financial-transaction-advisory",
    "funding": "Islamic Development Bank",
    "role": "Transaction Adviser in Joint Venture",
    "status": "Ongoing",
    "summary": "Carter Consulting, in joint venture with Ernst and Young Limited, is providing transaction advisory services for the Kano State Special Agro Industrial Processing Zone. The ongoing engagement is supporting the National Coordination Office in preparing the project for structured investment and implementation. The advisory team is bringing together commercial, financial, institutional and transaction-planning inputs, while clarifying the delivery model, assessing project viability, strengthening investor readiness and developing a credible pathway for mobilising private and public sector participation.",
    "deliverHeading": "What Carter Consulting is delivering",
    "deliverables": [
      "Reviewing the project concept, institutional context and transaction objectives.",
      "Assessing commercial, financial and implementation considerations for the proposed zone.",
      "Supporting the development of an appropriate transaction and delivery structure.",
      "Undertaking due diligence on information required for investment and procurement decisions.",
      "Preparing investor-facing analysis and transaction documentation for stakeholder review.",
      "Advising the programme team through project preparation, validation and transaction planning."
    ]
  },
  {
    "id": "development-of-the-national-assets-registry",
    "number": "03",
    "year": 2023,
    "client": "Ministry of Finance Incorporated",
    "title": "Development of the National Assets Registry",
    "practice": "Technology and Digital Transformation",
    "group": "technology-digital-transformation",
    "funding": "Ministry of Finance Incorporated",
    "role": "Digital Registry Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was engaged by the Ministry of Finance Incorporated to develop the National Assets Registry. The six-month assignment was designed to establish a structured digital platform for consolidating information on national assets and improving the visibility, governance and management of the Federal Government portfolio. The engagement combined asset-information design, data standardisation, workflow development and reporting requirements to support a reliable institutional record of ownership, classification, status and performance across participating entities.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Defined the registry architecture, information requirements and core asset-data structure.",
      "Developed consistent classifications and data standards for national asset records.",
      "Designed workflows for data capture, review, validation and periodic updating.",
      "Supported the consolidation and quality review of asset information from participating institutions.",
      "Configured reporting and visibility features for portfolio oversight and decision-making.",
      "Provided implementation documentation, knowledge transfer and operational guidance for the registry."
    ]
  },
  {
    "id": "investment-grade-asset-valuation-and-due-diligence-for-the-mofi-energy-and-extractives-portfolio",
    "number": "04",
    "year": 2023,
    "client": "Federal Ministry of Finance Budget and National Planning",
    "title": "Investment Grade Asset Valuation and Due Diligence for the MOFI Energy and Extractives Portfolio",
    "practice": "Financial and Transaction Advisory",
    "group": "financial-transaction-advisory",
    "funding": "Federal Government of Nigeria",
    "role": "Asset Valuation and Due Diligence Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was appointed to conduct an investment-grade asset valuation and due diligence exercise for the Ministry of Finance Incorporated energy and extractives portfolio. The six-month engagement was intended to provide a defensible view of portfolio value, asset condition, ownership considerations, commercial prospects and material risks. The work supported stronger portfolio oversight by combining valuation analysis with financial, legal, operational and market-focused due diligence suitable for investment, restructuring and strategic decision-making.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Established the portfolio inventory and information requirements for the valuation exercise.",
      "Reviewed financial, legal, operational and ownership information for relevant assets.",
      "Applied appropriate valuation methodologies to the energy and extractives portfolio.",
      "Assessed market conditions, commercial prospects and material portfolio risks.",
      "Documented valuation assumptions, limitations and supporting evidence.",
      "Prepared investment-grade valuation and due diligence outputs for MOFI decision-makers."
    ]
  },
  {
    "id": "national-strategy-for-scaling-up-the-sanitation-market-in-selected-states",
    "number": "05",
    "year": 2022,
    "client": "Federal Ministry of Water Resources SURWASH Programme",
    "title": "National Strategy for Scaling Up the Sanitation Market in Selected States",
    "practice": "Sector Advisory",
    "group": "sector-advisory",
    "funding": "World Bank",
    "role": "Strategy Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was engaged by the Sustainable Urban and Rural Water Supply Sanitation and Hygiene Programme to develop a national strategy for scaling up the sanitation market in selected Nigerian states. The nine-month assignment focused on the market, institutional and implementation conditions required to expand access to sanitation products and services. The work supported a coordinated approach to public and private participation, market development, stakeholder alignment and practical sequencing of interventions across participating states.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Assessed sanitation-market conditions, actors, service gaps and demand constraints.",
      "Mapped public institutions, private providers, financiers and community stakeholders.",
      "Reviewed barriers affecting sanitation-product availability, affordability and adoption.",
      "Developed strategic options for expanding private-sector participation and market reach.",
      "Prepared a national scaling strategy with implementation priorities and institutional responsibilities.",
      "Defined an actionable roadmap for phased delivery, monitoring and stakeholder coordination."
    ]
  },
  {
    "id": "audit-of-existing-public-private-partnership-and-concession-contracts",
    "number": "06",
    "year": 2022,
    "client": "Fiscal Governance and Institutions Project",
    "title": "Audit of Existing Public Private Partnership and Concession Contracts",
    "practice": "Financial and Transaction Advisory",
    "group": "financial-transaction-advisory",
    "funding": "World Bank",
    "role": "PPP and Concession Audit Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was appointed by the Fiscal Governance and Institutions Project to audit existing public private partnership and concession contracts. The six-month engagement provided a structured review of the Federal Government concession portfolio, with attention to contractual obligations, implementation performance, fiscal exposure, governance arrangements and compliance risks. The assignment was designed to strengthen oversight by producing an evidence-based view of contract status and practical recommendations for improved concession management.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Compiled and organised the portfolio of existing PPP and concession agreements.",
      "Reviewed contractual terms, obligations, milestones and institutional responsibilities.",
      "Assessed implementation performance and compliance by contracting parties.",
      "Evaluated material fiscal, commercial, legal and governance risks.",
      "Identified documentation gaps, unresolved obligations and areas requiring corrective action.",
      "Prepared contract-audit findings and recommendations for stronger portfolio oversight."
    ]
  },
  {
    "id": "development-of-a-ppp-investment-catalogue-and-sector-focused-roadmap",
    "number": "07",
    "year": 2022,
    "client": "Infrastructure Concession Regulatory Commission",
    "title": "Development of a PPP Investment Catalogue and Sector Focused Roadmap",
    "practice": "Infrastructure and PPP Advisory",
    "group": "financial-transaction-advisory",
    "funding": "Federal Government of Nigeria",
    "role": "PPP Advisory Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was appointed by the Infrastructure Concession Regulatory Commission to develop a PPP investment catalogue and sector-focused roadmap. The engagement supported the identification and presentation of credible public private partnership opportunities across priority sectors. It combined project-pipeline review, sector analysis, investor information and implementation sequencing to create a practical resource for investment promotion, project preparation and coordinated PPP development.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Reviewed the existing PPP pipeline and identified priority investment opportunities.",
      "Organised projects by sector, maturity, delivery requirements and investment potential.",
      "Prepared concise project information for inclusion in the investment catalogue.",
      "Developed sector-focused roadmaps covering preparation priorities and implementation sequencing.",
      "Validated project information with relevant public-sector stakeholders.",
      "Produced an investor-oriented catalogue and roadmap to support PPP market engagement."
    ]
  },
  {
    "id": "creation-of-a-data-centre-for-collation-of-national-revenue",
    "number": "08",
    "year": 2022,
    "client": "Budget Office of the Federation",
    "title": "Creation of a Data Centre for Collation of National Revenue",
    "practice": "Technology and Digital Transformation",
    "group": "technology-digital-transformation",
    "funding": "Federal Government of Nigeria",
    "role": "Data Centre and Digital Infrastructure Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was engaged by the Budget Office of the Federation to create a data centre for the collation of national revenue information. The assignment supported the National Budget Portal by bringing together revenue and expenditure data from relevant government sources, structuring it for analysis and establishing the digital infrastructure required for secure warehousing and access. The work connected data discovery, integration, hardware deployment, security and staff capacity building within one implementation.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Identified relevant national revenue and expenditure data and information sources.",
      "Mined, collated, categorised and structured data in usable digital formats.",
      "Designed and installed the infrastructure required for government data warehousing.",
      "Provided relevant ICT hardware and established secure data-access mechanisms.",
      "Integrated available SFTAS and Federal Government data into the National Budget Portal.",
      "Trained designated staff to operate and maintain the implemented data environment."
    ]
  },
  {
    "id": "modern-skills-training-for-effective-civil-service-delivery",
    "number": "09",
    "year": 2022,
    "client": "Gombe State Government",
    "title": "Modern Skills Training for Effective Civil Service Delivery",
    "practice": "Human Capital and Capacity Building",
    "group": "programme-project-delivery",
    "funding": "Gombe State Government",
    "role": "Training Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was appointed to train selected secretaries and data-entry officers in the Gombe State Civil Service on modern skills for effective service delivery. The engagement focused on strengthening practical workplace capabilities, improving administrative efficiency and supporting more consistent use of contemporary tools and service standards. The programme was structured to combine relevant learning content, facilitated instruction, practical exercises and participant assessment for public officers with operational responsibilities.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Reviewed the capability requirements of participating civil-service personnel.",
      "Developed practical training materials aligned with administrative and data-entry responsibilities.",
      "Delivered facilitated sessions on modern workplace and service-delivery skills.",
      "Used demonstrations and exercises to reinforce practical application of learning.",
      "Assessed participant understanding and identified areas requiring additional support.",
      "Prepared programme documentation and recommendations for sustaining improved performance."
    ]
  },
  {
    "id": "greenhouse-gas-inventories-for-newmap-activities",
    "number": "10",
    "year": 2021,
    "client": "Nigeria Erosion and Watershed Management Project",
    "title": "Greenhouse Gas Inventories for NEWMAP Activities",
    "practice": "Climate and Sustainability Advisory",
    "group": "sector-advisory",
    "funding": "World Bank GEF and SCCF",
    "role": "Joint Venture Consultant",
    "status": "Completed",
    "summary": "Carter Consulting Nigeria and PwC Nigeria were appointed to conduct greenhouse gas inventories for NEWMAP activities at watershed, state and relevant federal levels. The eight-month engagement established a consistent evidence base for identifying emission sources, compiling activity data and quantifying greenhouse gas impacts associated with programme interventions. The assignment supported environmental accountability, climate reporting and better integration of emissions considerations into watershed and erosion-management decision-making.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Established the inventory methodology, boundaries, data requirements and reporting approach.",
      "Collected and reviewed activity data from watershed, state and federal programme levels.",
      "Identified relevant emission sources and applied appropriate calculation methods.",
      "Conducted data-quality checks and documented assumptions, limitations and evidence gaps.",
      "Prepared greenhouse gas inventories and supporting technical reports.",
      "Shared findings and practical recommendations with programme stakeholders."
    ]
  },
  {
    "id": "digital-infrastructure-for-vaids-and-tax-data-harmonization-analytics-and-apis",
    "number": "11",
    "year": 2021,
    "client": "Federal Ministry of Finance",
    "title": "Digital Infrastructure for VAIDS and Tax Data Harmonization Analytics and APIs",
    "practice": "Technology and Digital Transformation",
    "group": "technology-digital-transformation",
    "funding": "Federal Government of Nigeria",
    "role": "Digital Infrastructure and Data Analytics Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was engaged for Project Lighthouse Phase II to deliver digital infrastructure for VAIDS and tax-data harmonisation, normalisation, analytics and application programming interfaces. The assignment focused on transforming fragmented tax-related information into a structured and interoperable data environment. It combined data engineering, analytics enablement, secure integration and platform infrastructure to support stronger revenue intelligence and coordinated use of tax data across authorised government institutions.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Reviewed available VAIDS and tax-data sources, formats and integration requirements.",
      "Harmonised and normalised data to improve consistency, quality and analytical usability.",
      "Designed the digital infrastructure required for secure data processing and storage.",
      "Enabled analytical workflows for revenue intelligence and decision support.",
      "Developed APIs for controlled exchange of information between authorised systems.",
      "Provided implementation documentation, testing support and operational handover guidance."
    ]
  },
  {
    "id": "bimms",
    "number": "12",
    "year": 2020,
    "client": "Budget Office of the Federation FGIP",
    "title": "Configuration and Deployment of BIMMS for Government Owned Enterprises",
    "practice": "Technology and Digital Transformation",
    "group": "technology-digital-transformation",
    "funding": "World Bank",
    "role": "Technology Implementation Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was appointed under the Fiscal Governance and Institutions Project to configure and deploy a Budget Information Management and Monitoring System for Government Owned Enterprises. The twelve-week engagement covered technology licensing, hosting, system configuration and implementation support. BIMMS was intended to improve the structured collection, monitoring and management of budget information from Government Owned Enterprises while enabling controlled integration with the accounting workstream through an approved application programming interface.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Configured BIMMS to support budget-information submission and monitoring requirements.",
      "Provided the required technology licensing and hosted system environment.",
      "Established user roles, workflows and controls for Government Owned Enterprises.",
      "Enabled approved API access for the associated accounting workstream.",
      "Tested system functionality, information flows and implementation readiness.",
      "Supported deployment, user orientation and initial operational use of the platform."
    ]
  },
  {
    "id": "implementation-of-an-intranet-portal-and-content-management-system",
    "number": "13",
    "year": 2019,
    "client": "Budget Office of the Federation",
    "title": "Implementation of an Intranet Portal and Content Management System",
    "practice": "Technology and Digital Transformation",
    "group": "technology-digital-transformation",
    "funding": "Federal Government of Nigeria",
    "role": "Technology Implementation Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was engaged by the Budget Office of the Federation to implement an intranet portal and content management system. The fourteen-day assignment provided a central internal environment for publishing, organising and accessing institutional information. The implementation combined application licensing, portal configuration, content structuring and staff-focused deployment support to improve internal communication, information availability and controlled management of organisational content.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Confirmed portal requirements, users, content categories and access needs.",
      "Provided and configured the required application licences and system components.",
      "Implemented the intranet structure, navigation and content-management workflows.",
      "Established appropriate user access and administrative controls.",
      "Tested portal functionality and supported the migration of priority content.",
      "Oriented designated staff and handed over implementation documentation."
    ]
  },
  {
    "id": "institutional-capacity-assessment-and-siftas-implementation-support-for-sokoto-state",
    "number": "14",
    "year": 2019,
    "client": "Sokoto State Ministry of Finance",
    "title": "Institutional Capacity Assessment and SIFTAS Implementation Support for Sokoto State",
    "practice": "Public Financial Management Advisory",
    "group": "strategy-public-policy",
    "funding": "World Bank",
    "role": "Consortium Consultant",
    "status": "Completed",
    "summary": "Carter Consulting participated in the SUSMAN Consortium appointed by the Sokoto State Government to conduct an institutional capacity assessment and support implementation of the State Fiscal Transparency Accountability and Sustainability programme. The performance-based engagement focused on helping the state achieve applicable Disbursement Linked Indicators by strengthening public financial management systems, transparency, revenue administration, procurement, debt management and fiscal reporting capabilities.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Assessed institutional capacity and readiness against applicable SIFTAS requirements.",
      "Supported improvements in budgeting, audited accounts and fiscal reporting transparency.",
      "Advised on cash management, treasury controls and reduction of revenue leakages.",
      "Supported reforms in internally generated revenue, debt management and payroll controls.",
      "Strengthened public procurement practices and domestic-arrears management processes.",
      "Developed fiscal-responsibility and medium-term expenditure framework support materials."
    ]
  },
  {
    "id": "gap-analysis-of-ict-needs-of-nigerian-universities-and-mdas",
    "number": "15",
    "year": 2016,
    "client": "National Information Technology Development Agency",
    "title": "Gap Analysis of ICT Needs of Nigerian Universities and MDAs",
    "practice": "Technology and Digital Transformation",
    "group": "technology-digital-transformation",
    "funding": "Federal Government of Nigeria",
    "role": "ICT Assessment Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was engaged by the National Information Technology Development Agency to conduct a gap analysis of the ICT needs of Nigerian universities and Ministries Departments and Agencies. The three-month assignment assessed existing capabilities against operational and service requirements, providing a structured basis for prioritising technology investment. The work connected infrastructure, systems, connectivity, skills and institutional considerations to practical recommendations for closing critical ICT gaps.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Defined the assessment framework, data requirements and institutional coverage.",
      "Reviewed existing ICT infrastructure, systems, connectivity and support capabilities.",
      "Engaged participating universities and government institutions to validate operational needs.",
      "Compared current capabilities with required service and technology standards.",
      "Identified priority gaps, dependencies and investment requirements.",
      "Prepared a consolidated gap-analysis report and phased recommendations for improvement."
    ]
  },
  {
    "id": "training-of-budget-officers-on-preparation-of-the-2017-budget",
    "number": "16",
    "year": 2016,
    "client": "Budget Office of the Federation",
    "title": "Training of Budget Officers on Preparation of the 2017 Budget",
    "practice": "Human Capital and Capacity Building",
    "group": "programme-project-delivery",
    "funding": "Federal Government of Nigeria",
    "role": "National Training Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was engaged by the Budget Office of the Federation to train budget officers from more than 850 Ministries Departments and Agencies across Nigeria’s six geopolitical zones. The programme prepared participants to use the Zero Based Budgeting web application for development of the 2017 federal budget. The assignment combined nationwide training coordination, system-focused instruction and practical exercises to strengthen consistent application of the new budgeting approach.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Developed the national training plan, schedule and participant-support materials.",
      "Prepared practical guidance on Zero Based Budgeting and the web application.",
      "Coordinated delivery across the six geopolitical zones.",
      "Trained budget officers from more than 850 Federal Government institutions.",
      "Used guided exercises to reinforce budget preparation and system use.",
      "Documented participation, learning outcomes and implementation issues for follow-up."
    ]
  },
  {
    "id": "configuration-and-deployment-of-a-zero-based-budget-compliant-web-application",
    "number": "17",
    "year": 2016,
    "client": "Budget Office of the Federation",
    "title": "Configuration and Deployment of a Zero Based Budget Compliant Web Application",
    "practice": "Technology and Digital Transformation",
    "group": "technology-digital-transformation",
    "funding": "Federal Government of Nigeria",
    "role": "Application Implementation Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was appointed by the Budget Office of the Federation to configure and deploy a web-based application compliant with the Federal Government’s Zero Based Budgeting requirements. The engagement supported the shift to a more structured digital process for preparing, reviewing and consolidating budget submissions. It brought together application configuration, budgeting workflows, user controls, testing and implementation support for use across government institutions.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Translated Zero Based Budgeting requirements into application workflows and controls.",
      "Configured digital templates for preparation and submission of budget information.",
      "Established user roles, review steps and validation requirements.",
      "Tested the application against functional and operational expectations.",
      "Deployed the web-based solution for Federal Government budget preparation.",
      "Supported user onboarding, issue resolution and early-stage implementation."
    ]
  },
  {
    "id": "strategic-review-and-analysis-of-federal-ministry-of-environment-activities",
    "number": "18",
    "year": 2015,
    "client": "Federal Ministry of Environment",
    "title": "Strategic Review and Analysis of Federal Ministry of Environment Activities",
    "practice": "Strategy and Institutional Advisory",
    "group": "strategy-public-policy",
    "funding": "Federal Government of Nigeria",
    "role": "Strategic Review Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was appointed by the Federal Ministry of Environment to undertake a strategic review and analysis of the Ministry’s activities. The four-week engagement provided an independent assessment of programmes, institutional priorities and operational performance. The work was intended to clarify alignment with the Ministry’s mandate, identify gaps affecting delivery and present practical recommendations for stronger planning, coordination and execution.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Reviewed strategic plans, programme documents and records of ministerial activities.",
      "Assessed alignment between ongoing activities and the Ministry’s statutory mandate.",
      "Examined institutional arrangements, coordination mechanisms and delivery constraints.",
      "Consulted relevant departments and stakeholders to validate findings.",
      "Identified strategic, operational and performance gaps requiring attention.",
      "Prepared a strategic review report with prioritised recommendations for improvement."
    ]
  },
  {
    "id": "supply-and-installation-of-e-library-equipment",
    "number": "19",
    "year": 2014,
    "client": "College of Education Zing",
    "title": "Supply and Installation of E Library Equipment",
    "practice": "Technology and Digital Transformation",
    "group": "technology-digital-transformation",
    "funding": "TETFund",
    "role": "Equipment Supplier and Systems Integrator",
    "status": "Completed",
    "summary": "Carter Consulting was awarded the contract to supply and install e-library equipment for the College Library at the College of Education Zing. The twelve-week assignment supported the institution in establishing the technology base required for improved digital access to learning resources. The work covered equipment supply, installation, configuration, testing and operational handover under the applicable TETFund library intervention.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Confirmed equipment specifications, quantities and installation requirements.",
      "Supplied the approved e-library equipment and associated components.",
      "Installed and configured equipment within the College Library environment.",
      "Tested the installed components for functionality and readiness for use.",
      "Applied the required TETFund intervention identification to supplied items.",
      "Provided operational guidance, documentation and formal handover support."
    ]
  },
  {
    "id": "monitoring-and-evaluation-impact-assessment-of-nitda-projects",
    "number": "20",
    "year": 2012,
    "client": "National Information Technology Development Agency",
    "title": "Monitoring and Evaluation Impact Assessment of NITDA Projects",
    "practice": "Monitoring and Evaluation",
    "group": "programme-project-delivery",
    "funding": "Federal Government of Nigeria",
    "role": "Lead Consultant",
    "status": "Completed",
    "summary": "Carter Consulting was appointed as lead consultant to conduct a monitoring and evaluation impact assessment of projects implemented by the National Information Technology Development Agency. The assignment provided an independent basis for understanding project performance, results and practical effects across intended beneficiaries and institutions. It combined evidence review, stakeholder input and performance analysis to identify achievements, implementation gaps and opportunities for improving future ICT interventions.",
    "deliverHeading": "What Carter Consulting was engaged to deliver",
    "deliverables": [
      "Developed the impact-assessment framework, indicators and evidence requirements.",
      "Reviewed project records, implementation reports and available performance data.",
      "Collected stakeholder and beneficiary evidence on project delivery and results.",
      "Assessed outputs, outcomes, relevance and sustainability of selected interventions.",
      "Identified implementation gaps, lessons and opportunities for programme improvement.",
      "Prepared the consolidated monitoring and evaluation impact-assessment report."
    ]
  }
];
