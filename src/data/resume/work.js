/**
 * @typedef {Object} Position
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Upcoming',
    position: 'Upcoming',
    url: '',
    startDate: '2023-04-01',
    endDate: undefined,
    summary: '',
    highlights: [],
  },
  {
    name: 'Climate Connect Digital',
    position: 'SDE-1',
    url: 'https://www.climateconnect.digital/',
    startDate: '2022-10-12',
    endDate: '2023-03-17',
    summary: `Climate Connect Digital is a climate-tech company that provides a platform for energy trading, analytics, and forecasting.`,
    highlights: [
      'Develoed and implemented a highly scalable Carbon Credit Trading platform, using microservices architecture, enabling seamless trading among 1000+ users worldwide.',
      'Established a modular React component library, reducing redundancy and boosting feature development by 40%.',
      "Led the development of CarbonShop's Inventory service, applying Test-Driven Development (TDD) principles and industry best practices, ensuring reliability and scalability of services and RESTful APIs.",
      'Engineered robust pipelines for seamless data ingestion into our systems using serverless technologies, resulting in a 25% reduction in processing time.',
      'Pioneered the deployment pipeline for CarbonShop, reducing deployment time and ensuring a seamless and automated workflow.',
    ],
  },
  {
    name: 'Indian Oil Corporation Limited',
    position: 'Freelance Developer',
    url: 'https://www.iocl.com/',
    startDate: '2022-09-01',
    endDate: '2023-02-28',
    summary: ``,
    highlights: [
      'GatePass - Engineered and implemented GatePass, a dynamic visitor and material management solution for Indian Oil, now operational in over 1500 locations across India.',
      'Achieved a 40% improvement in operational efficiency and security by leveraging React, Zustand, Chakra and Spring Boot.',
    ],
  },
  {
    name: 'KainSkep',
    position: 'Full Stack Intern',
    url: 'https://www.kainskep.com/',
    startDate: '2022-05-01',
    endDate: '2022-09-30',
    summary: ``,
    highlights: [
      'Developed a comprehensive Inventory Management application, focusing on frontend technologies including React.js and Redux.',
      'Implemented RESTful APIs for authentication, dashboard displays, and CRUD operations using Express.js, Node.js, and MongoDB.',
      'Ensured a seamless user experience through the creation of a responsive and intuitive user interface from Figma designs.,',
    ],
  },
];

export default work;
