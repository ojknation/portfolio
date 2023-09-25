export const projects = [
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
    stack: ["react", "redux", "materialUI", "dotNet"],
    url: null,
  },
  {
    name: "Leadway Portal",
    synopsis: "Employee Benefits Management System",
    description: `The Portal is a multi-tenant application that allows companies to register and manage their employees and dependents health insurance plans. 
       After a comapny registers, employees can also self-enroll and manage their dependents. The system also issues an ID card to each employee. The project was executed with great teamwork, I specifically worked on features such as the custom
       themeing and layout setup, the employee self-enrollment feature, Core Authentication and Authorization module integrations which included 2FA. I collaborated with colleagues 
       on subdomain routing on the client side, API integrations, Reuseable components, and the overall architecture of the client side of the application. I led maintenance and support of the application before it was handed over to the client.`,
    summary: [
      "Custom Themeing",
      "Two Factor Authentication",
      "Subdomain Routing",
      "Dynamic forms",
      "Multi-tenant",
    ],
    stack: ["react", "tanstackQuery", "AntD", "dotNet"],
    url: "https://leadwayhealth.com/corporate/",
  },
  {
    name: "Iprokure",
    synopsis: "Procurement processes Management System",
    description: `Iprokure is a procurement management system that allows Government MDA's to manage their procurement processes. 
    It is a very large system comprising of several user roles ranging from the procurement officers to the vendors, government rank officials, 
    the application has a complex system of access control and permission management.
    The system digitizes the entire procurement process from the creation of the procurement plan to the award of the contract. Payment, contract lifecycle management, legal documents, 
    State budgets among others are managed on the system, I currently co-lead the team that maintains and supports the client side of the application.`,
    summary: [
      "Access Control",
      "Workflow Management",
      "Document Management",
      "Payment",
    ],
    stack: ["react", "redux", "materialUI", "dotNet"],
    url: "https://eprocurement.deltappc.dl.gov.ng",
  },
  {
    name: "Polleasy",
    synopsis: "Election Management System",
    description: `Polleasy is a multi-tenanted election management solution that provides election strategy, planning, political survey, opinion polls, incidence reports,
     campaign, election management and monitoring services. The system is dynamic and can cater to government structure of different countries, and elections at different levels. 
     It has a plethora of user types and roles, ranging from super admins to executives, campaign managers, agents, and voters. I worked on the client side of the application alongside a team of developers,
     I specifically worked on poll creation workflows which comprises of dynamic interactive forms, drag and drop UI, data visualization and complex API integrations, I also worked on
     the call center module which allows agents to make calls to voters and log their responses among other features
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
    stack: [
      "react",
      "tanstackQuery",
      "typescript",
      "chakraUI",
      "data visualization",
    ],
    url: "https://apil.me",
  },
  {
    name: "Whip Store",
    synopsis: "Ecommerce platform",
    description: `Whip Store is an ecommerce platform that allows users to purchase products online, the target is small businesses whose inventory is not too large.
     The system integrates with whatsapp and email to manage orders and send notifications to the users. The system also has a dashboard where the business owners can manage their products,
     I led the development effort on the client side of the application,`,
    summary: ["ECommerce", "Payment", "Inventory", "Order Management"],
    stack: ["react", "tanstackQuery", "typescript", "firebase", "chakraUI"],
    url: "https://exotic-whip-web.pages.dev",
  },
]
