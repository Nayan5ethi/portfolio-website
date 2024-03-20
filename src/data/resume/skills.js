const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript', 'Web 3'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript', 'Web 3'],
  },
  {
    title: 'Redux',
    competency: 5,
    category: ['Web Development', 'Javascript', 'Tools', 'Web 3'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Web Development', 'Javascript', 'Web 3'],
  },
  {
    title: 'Next.JS',
    competency: 4,
    category: ['Web Development', 'Javascript', 'Web 3'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools', 'Cloud Services'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'PostgreSQL/MySQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'D3',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Django',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 4,
    category: ['Tools', 'Web Development', 'Cloud Services'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Typescript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript', 'Web 3'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Go',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Firebase',
    competency: 5,
    category: ['Web Development', 'Tools', 'Cloud Services'],
  },
  {
    title: 'Firestore',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'RabbitMQ',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Ethereum',
    competency: 3,
    category: ['Web 3'],
  },
  {
    title: 'Solidity',
    competency: 3,
    category: ['Languages', 'Web 3'],
  },
  {
    title: 'Hardhat',
    competency: 3,
    category: ['Web 3'],
  },
  {
    title: 'Ethers.js',
    competency: 3,
    category: ['Web 3'],
  },
  {
    title: 'Web3.js',
    competency: 3,
    category: ['Web 3'],
  },
  {
    title: 'Alchemy',
    competency: 3,
    category: ['Web 3'],
  },
  {
    title: 'Solana',
    competency: 3,
    category: ['Web 3'],
  },
  {
    title: 'Spring Boot',
    competency: 4,
    category: ['Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#FFC0CB',
  '#ADD8E6',
  '#98FB98',
  '#B19CD9',
  '#FFFF99',
  '#FFDAB9',
  '#A5D6A7',
];

colors.sort(() => Math.random() - 0.5);

const categories = [...new Set(skills.flatMap(({ category }) => category))].map(
  (category, index) => ({
    name: category,
    color: colors[index],
  })
);

export { categories, skills };
