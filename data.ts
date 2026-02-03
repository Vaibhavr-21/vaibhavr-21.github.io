import { Job, EducationItem, Certification, PersonalInfo, SkillCategory } from './types';
import profileImage from './public/Vaibhav.jpg';

export const personalInfo: PersonalInfo = {
  name: "Vaibhav Reddy",
  title: "Lead SAP ABAP Consultant",
  email: "reddyvaibhav@gmail.com",
  phone: "+91 - 8310561223",
  location: "Bangalore, India",
  summary: "Dedicated SAP ABAP developer with over 12 years of experience. Passionate about optimizing business processes through robust software solutions. Seeking to leverage extensive programming expertise to contribute to dynamic projects, enhance system efficiency, and drive innovation within the SAP environment.",
  languages: ["English", "Hindi", "German (A1)"],
  // Replace this URL with your own photo URL or a local path like "/profile.jpg"
  photoUrl: profileImage
};

// Re-organized into logical groups for better readability
export const skillCategories: SkillCategory[] = [
  {
    title: "Core ABAP & Development",
    skills: [
      "Interactive & Classical Reports",
      "Module Pool Programming",
      "ALV (List, Grid, SALV)",
      "BADI / User Exits / Enhancements",
      "BAPIs & RFCs",
      "Smart Forms & Adobe Forms",
      "Performance Tuning (SAT, ST05)"
    ]
  },
  {
    title: "S/4HANA & Modern Tech",
    skills: [
      "SAP S/4HANA Migration",
      "ABAP on HANA",
      "SAP Fiori / OData Services",
      "ATC & Custom Code Migration",
      "Eclipse ADT & Quickfixes",
      "WebMethods Integration"
    ]
  },
  {
    title: "Functional & Integration",
    skills: [
      "ALE / EDI / IDOCs",
      "SAP MM / SD",
      "SAP FI / PP",
      "SAP QM / PM / TM",
      "Master Data Governance (MDG)"
    ]
  }
];

export const experienceData: Job[] = [
  {
    id: "infosys-apple",
    company: "Infosys",
    designation: "Principal Consultant",
    duration: "September 2025 – Present",
    projects: [
      {
        name: "Apple Inc.",
        role: "Principal Consultant",
        duration: "September 2025 – Present",
        tags: ["SAP SD", "SAP ECC", "Radar", "Reporting"],
        responsibilities: [
          "Working on Radar tickets primarily involving changes to custom reports in the SD module within the SAP ECC system.",
          "Analyzing and resolving complex incidents related to sales order processing and billing.",
          "Optimizing legacy ABAP code for better performance and maintainability.",
          "Collaborating with functional consultants to map business requirements to technical solutions."
        ]
      }
    ]
  },
  {
    id: "high-noon-solventum",
    company: "High Noon Consulting (Deloitte)",
    designation: "Lead ABAP Consultant",
    duration: "February 2025 – May 2025",
    projects: [
      {
        name: "Solventum",
        role: "Lead Developer",
        duration: "February 2025 – May 2025",
        leavingReason: "Promoting individuals based on personal loyalty or tenure rather than technical competence or leadership merit.",
        tags: ["SAP TM", "SAP QM", "EWM Integration", "BOPF"],
        responsibilities: [
          "Contributed to Solventum's IT transformation project as part of the ABAP implementation team for major wave releases.",
          "Developed and implemented enhancements in SAP TM and SAP QM modules.",
          "Implemented FIFO-based load sequence calculation logic for Freight Orders in SAP TM during EWM load instruction transfers.",
          "Added shipping group text from custom tables to FO notes as a text node.",
          "Restricted modifications to Quality Certificates in SAP QM (QC01/QC02) if user status 'ZREL' is set to safeguard data integrity."
        ]
      }
    ]
  },
  {
    id: "high-noon-wbd",
    company: "High Noon Consulting (Deloitte)",
    designation: "Lead ABAP Consultant",
    duration: "March 2024 – September 2024",
    projects: [
      {
        name: "WBD",
        role: "Lead Developer",
        duration: "March 2024 – September 2024",
        leavingReason: "Forcing high-performers to fix legacy technical debt indefinitely while giving \"exciting\" new AI or Greenfield projects to favorites.",
        tags: ["Fiori", "UI5", "MDG", "Performance Tuning"],
        responsibilities: [
          "Led the enhancement of a custom analytical Fiori app by adding new fields to selection criteria and output list.",
          "Resolved performance bottlenecks related to late app loading.",
          "Identified and resolved performance issues within Fiori apps reducing processing times.",
          "Supervised development activities within Master Data Governance (MDG) module.",
          "Provided guidance and mentorship to junior ABAP developers."
        ]
      }
    ]
  },
  {
    id: "cbsi",
    company: "CBSI Global (LTI Mindtree)",
    designation: "Senior Application Packaging Consultant",
    duration: "Jan 2023 – Aug 2023",
    projects: [
      {
        name: "S4 HANA Migration (Chevron Phillips Chemical)",
        leavingReason: "Restructuring of the team led to unexpected role changes.",
        tags: ["S/4HANA", "Migration", "ATC Checks", "SPDD/SPAU"],
        responsibilities: [
          "Provided leadership to a team of 3 Junior ABAP Developers for S4 HANA migration.",
          "Identified, defined scope, and addressed custom codes within legacy SAP R3 for migration.",
          "Utilized ATC check, ADT in Eclipse, Quickfixes, and Custom Code Migration Fiori app.",
          "Analyzed SAP Notes and implemented code adjustments for S4 HANA standards.",
          "Collaborated with Fiori consultants for Root Cause Analysis (RCA) of bugs.",
          "Spearheaded development of a custom report for mass upload of Routing master data in PP module."
        ]
      }
    ]
  },
  {
    id: "ameri100",
    company: "Ameri100",
    designation: "Senior SAP Consultant",
    duration: "Feb 2020 – July 2022",
    projects: [
      {
        name: "S4 HANA Implementation & AMS (GTI Statia / Baltimore Aircoil / TOYO TIRES)",
        leavingReason: "Management shift in strategic direction impacted project continuity.",
        tags: ["Implementation", "Adobe Forms", "LSMW", "OData"],
        responsibilities: [
          "Served as SME for custom developments within SAP SD and MM modules for two end-to-end S4 HANA implementation projects.",
          "Implemented code pushdown and optimization techniques for S4 HANA.",
          "Created Adobe forms using classical and Fragment-based approaches with backend OData logic.",
          "Participated in data migration tasks using LSMW tool.",
          "Created specialized BDC report for bulk creation of production orders in SAP PP using transaction variants to handle duplicate fields.",
          "Enhanced efficiency of ABAP reports using standard SAP tools for static code and dynamic SQL analysis."
        ]
      }
    ]
  },
  {
    id: "capgemini",
    company: "Capgemini",
    designation: "Senior SAP Consultant",
    duration: "Jan 2019 – May 2020",
    projects: [
      {
        name: "Oil and Gas Company (Equinor)",
        leavingReason: "Budget constraints forced a reduction in external consultant headcount.",
        tags: ["Support", "RICEF", "Enhancements"],
        responsibilities: [
          "Diagnosed and resolved technical issues reported in support incidents and CR tickets.",
          "Implemented enhancements and customizations to existing SAP functionalities.",
          "Developed new reports, interfaces, conversions, enhancements, and forms (RICEF objects).",
          "Maintained documentation for ABAP developments."
        ]
      }
    ]
  },
  {
    id: "caterpillar",
    company: "Caterpillar India Pvt Ltd",
    designation: "IT Analyst",
    duration: "July 2016 – Jan 2019",
    projects: [
      {
        name: "Plan to Stock, SPP Support",
        leavingReason: "Internal reorganization shifted focus away from this initiative.",
        tags: ["APO", "CIF", "IDoc", "Legacy Integration"],
        responsibilities: [
          "Processed IDOCs and monitored interfaces to ensure integration between systems.",
          "Configured Core Interface (CIF) for data transfer between ECC and APO systems.",
          "Executed code modifications and enhanced mass upload reports.",
          "Submitted incidents to SAP for bugs in standard reports and applied SNOTE patches.",
          "Employed ticketing tools like Remedy, HPQC, Tidal, SAP Solman, ServiceNow.",
          "Collaborated with cross-functional teams to address interface challenges involving Legacy Systems (COBOL), SAP ECC, SPP, CRM, and EWM."
        ]
      }
    ]
  },
  {
    id: "tcs",
    company: "Tata Consultancy Services",
    designation: "SAP ABAP Consultant",
    duration: "June 2013 – Feb 2016",
    projects: [
      {
        name: "Pharma Company (Johnson and Johnson)",
        duration: "December 2014 – February 2016",
        leavingReason: "Project scope re-evaluation led to team downsizing.",
        tags: ["Global Rollout", "FI Module", "Adobe Forms"],
        responsibilities: [
          "Contributed to end-to-end implementation and roll-out projects for MM, SD, and FI modules.",
          "Created Global IDoc Framework for FI module streamlining GL account posting.",
          "Crafted Adobe forms and Driver reports for varied Invoice form printing using FormCalc and Javascript.",
          "Developed custom report for lockbox file processing.",
          "Crafted custom Adobe forms for FI Module's automatic payment run (F110)."
        ]
      },
      {
        name: "Pharma Company (Roche)",
        duration: "June 2013 – December 2014",
        leavingReason: "Vendor consolidation process affected the current engagement.",
        tags: ["Smart Forms", "ALV", "QM/WM"],
        responsibilities: [
          "Participated in implementation and development of RICEF objects for MM, SD, QM and FI.",
          "Executed enhancements for inspection lots and functional locations.",
          "Developed smart forms and label printing specifically for WM module.",
          "Created sophisticated custom report for FI module with dynamic ALV layouts and PDF attachment capabilities."
        ]
      }
    ]
  },
  {
    id: "mahindra",
    company: "Mahindra Satyam",
    designation: "Software Engineer",
    duration: "July 2010 – June 2013",
    projects: [
      {
        name: "Consumer Goods Company (Sony)",
        duration: "June 2012 – June 2013",
        leavingReason: "Transition of project ownership to internal stakeholders.",
        tags: ["QA", "Unicode Conversion", "Code Analysis"],
        responsibilities: [
          "Worked in ABAP QA Team analyzing code for issues and standards deviation.",
          "Maintained reports on code quality status.",
          "Participated in Unicode check and conversion activities for upgrade to SAP ECC."
        ]
      },
      {
        name: "FMCG Company (Nestle)",
        duration: "July 2010 – June 2012",
        leavingReason: "Strategic realignment of IT resources.",
        tags: ["Support", "IDoc Monitoring"],
        responsibilities: [
          "Managed business-critical data failures for IDOC message types (ORDERS, DESADV, MATMAS, etc.).",
          "Provided first-level analysis of IDoc errors.",
          "Utilized HP Service Manager and Remedy for incident management."
        ]
      }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    course: "MCA",
    institution: "Jain Engg. College",
    university: "V.T.U (Bangalore)",
    year: "2007-10",
    percentage: "67.63%"
  },
  {
    course: "BCA",
    institution: "B.H.S First Grade College",
    university: "Bangalore",
    year: "2004-07",
    percentage: "70.85%"
  },
  {
    course: "HSC / 12th",
    institution: "G.N Khalsa college",
    university: "Mumbai",
    year: "2003-04",
    percentage: "64.33%"
  },
  {
    course: "SSC / 10th",
    institution: "St John the Baptist high school",
    university: "Mumbai",
    year: "2001-02",
    percentage: "75.73%"
  }
];

export const certificationsData: Certification[] = [
  { name: "Development Associate - ABAP with SAP NetWeaver 7.50" },
  { name: "Development Specialist - ABAP for SAP HANA" },
  { name: "SAP Certified Development Associate - SAP Fiori Application Developer" },
  { name: "SAP Certified Development Associate – ABAP with SAP NetWeaver 7.0 (Siemens)" },
  { name: "German Language A1 level (Goethe Institute, Bangalore)" }
];

export const awards = [
  "Awarded 'Star Performer' and 'On the Spot Award' in TCS"
];
