export type TProject = {
  name: string
  synopsis: string
  description: string
  summary: string[]
  stack: string[]
  url: string | null
  bg: string
}

export const projects: TProject[] = [
  {
    name: "NFT NFT Gallery",
    synopsis: "Ninja NFT gallery",
    description: `Ninja NFT gallery is a platform that displays NFTs minted on the Ninja Protocol platform. The platform features a rich UI with advanced searching and sorting capabilities.`,
    summary: ["NFT", "Minting", "Gallery"],
    stack: ["react", "tanstackQuery", "typescript", "firebase"],
    url: "https://www.gallery.ninjaprotocol.io",
    bg: "#020817",
  },
  {
    name: "Nakise",
    synopsis: "Beneficiary Management System",
    description: `Nakise is a beneficiary management system that allows organizations to register and manage their beneficiaries for various programs/events.
     The system has a custom form builder that allows organizations to create custom forms for their beneficiaries to fill.
      The system also has a custom workflow builder that allows organizations to create custom workflows for their beneficiaries. Other features include a module for facillitators to manage their beneficiaries,
       give them assessments and generate reports.`,
    summary: [
      "Form Builder",
      "Rich Text Editor",
      "Assessment Module",
      "Roles & Permissions",
    ],
    stack: ["react", "tanstackQuery", "materialUI", "dotNet"],
    url: null,
    bg: "#FFA500",
  },
  {
    name: "Leadway",
    synopsis: "Employee Benefits Management System",
    description: `The Portal is a multi-tenant application that allows companies to register and manage their employees and dependents health insurance plans. 
       After a comapny registers, employees can also self-enroll and manage their dependents. I specifically worked on features such as the custom
       themeing and layout setup, the employee self-enrollment feature, Core Authentication and Authorization module integrations which included 2FA. I collaborated with colleagues 
       on the overall architecture of the client side of the application.`,
    summary: [
      "Custom Themeing",
      "Two Factor Authentication",
      "Subdomain Routing",
      "Multi-tenant",
    ],
    stack: ["react", "tanstackQuery", "antD", "dotNet"],
    url: "https://leadwayhealth.com/corporate/",
    bg: "#7FFF00",
  },
  {
    name: "IProkure",
    synopsis: "Procurement processes Management System",
    description: `Iprokure is a procurement management system that allows Government MDA's to manage their procurement processes. 
    It comprises of several user roles and permissions ranging, 
    The system digitizes the entire procurement process from the creation of the procurement plan to the award of the contract. Payment, contract lifecycle management, legal documents, 
    State budgets among others are managed on the system, I currently co-lead the team that maintains and supports the client side of the application.`,
    summary: [
      "Access Control",
      "Workflow Management",
      "Document Generation",
      "Payment",
    ],
    stack: ["react", "redux", "materialUI", "dotNet"],
    url: "https://eprocurement.deltappc.dl.gov.ng",
    bg: "#0bc5ea",
  },
  {
    name: "Polleasy",
    synopsis: "Election Management System",
    description: `Polleasy is a multi-tenanted election management solution that provides election strategy, planning, political survey, opinion polls, incidence reports,
     campaign, election management and monitoring services. 
     It has a plethora of user types and roles. I worked on the client side of the application alongside a team of developers,
     I specifically worked on poll creation workflows which comprises of dynamic interactive forms, drag and drop UI, voIP calls, data visualization and geoJSON maps.
      `,
    summary: [
      "multi-tenant",
      "voIP calls",
      "websockets",
      "data visualization",
      "Polls",
    ],
    stack: ["react", "tanstackQuery", "materialUI", "django"],
    url: null,
    bg: "#9400D3",
  },
  {
    name: "ApilMe",
    synopsis: "Credit and financing platform",
    description: `ApilMe is a credit and financing platform. The system offers Micro-pension, Micro-insurance, Micro-credit and Miro-savings services to small businesses.
     The system comprises of different user roles ranging from the business owners to the agents, and the administrators. The Admins have a portal where they can monitor the activities of the agents, 
     manage business owners, claims, transactions and other activities.
    This software is still being actively developed and I am leading the development effort on the client side of the application alongside a team of developers,`,
    summary: [
      "Access Control",
      "Data visualization",
      "Authentication",
      "Payment",
    ],
    stack: ["react", "tanstackQuery", "typescript", "chakraUI"],
    url: "https://apil.me",
    bg: "#00FF7F",
  },
  {
    name: "Whip Store",
    synopsis: "Ecommerce platform",
    description: `Whip Store is an ecommerce platform that allows users to purchase products online, the target is small businesses whose inventory is not too large.
     The system integrates with whatsapp and email to manage orders and send notifications to the users. The system also has a dashboard where the business owners can manage their products,
     I led the development effort on the client side of the application,`,
    summary: ["Ecommerce", "Payment", "Order Management"],
    stack: ["react", "tanstackQuery", "typescript", "firebase", "chakraUI"],
    url: "https://exotic-whip-web.pages.dev",
    bg: "#FF0080",
  },
  {
    name: "Flares",
    synopsis: "Pseudo anonymous social timeline",
    description: `Flares is a social timeline that allows users to post anonymously, there are different type of posts ranging from text, 
    images and links, posts can also be flared up(voted) and sorted by most recent or the system uses cloudfare workers 
      kv storage and firebase on the backend, it is still being built out to be a full fledged social 
      network where users can create private timelines and have only a selected group follow them.`,
    summary: ["Social Network", "Private timelines", "Blazingly fast"],
    stack: [
      "react",
      "tanstackQuery",
      "javascript",
      "materialUI",
      "firebase",
      "cloudflare",
    ],
    url: "https://flares-4je.pages.dev",
    bg: "#00FFFF",
  },
]
