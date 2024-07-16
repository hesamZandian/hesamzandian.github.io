import snappcarfix from "../assets/images/snappcarfix.png";
import viramadarpishran from "../assets/images/viramadarpishran.png";

export const portfolioInfo = {
  full_name: `Hesam Zandian`,
  role: `Front End Developer`,
  about_me: `I’m a passionate and young Software Engineer packing more than 3 years of hands-on experience as a front end developer. Yet willing to work with 
backend technologies as well to expand my current skill set. I’m Looking for a challenging environment where I can prove my ability to solve complex problems and bring value to both the customers and the business.
`,
  university: `Shahid Rajaee Technical and Vocational College of kashan`,
  certificate: `Front End Web Development Certification FreeCodeCamp`,
  graduate_degree: `B.Sc Computer Software Engineering`,
  graduate_duration: `January 2020 – January 2022`,
  work_experiences: [
    {
      company_logo: snappcarfix,
      company_name: `SnappCarFix`,
      role: `Front End Team Lead`,
      country: `Iran`,
      city: `Isfahan`,
      start_date: `April 2022`,
      end_date: `March 2024`,
      responsibilities: [
        `Led and managed a front-end team in the end-to-end execution of various projects, demonstrating hands-on involvement from conception to maintenance.`,
        `Transitioned the styling system to Tailwind CSS and made React projects TypeScript-based, using Vite for enhanced performance.`,
        `Played a key role in managing large-scale projects such as Carfillo and Snappcarfix, showcasing proficiency in handling complex initiatives.`,
        `Designed and implemented a unified layout design system, simplifying color handling for efficient re-branding.`,
        `Utilized GraphQL to optimize overall web application performance.`,
        `Contributed to the recruitment process by reviewing resumes and coordinating interviews.`,
        `Collaborated effectively with web designers, back-end developers, and UX designers to ensure the seamless design, development, testing, and improvement of web products.`,
      ],
    },
    {
      company_logo: viramadarpishran,
      company_name: `Vira Madar Pishran`,
      role: `Front End Developer`,
      country: `Iran`,
      city: `Isfahan`,
      start_date: `August 2020`,
      end_date: `March 2022`,
      responsibilities: [
        `Planned, developed, tested, and maintained responsive websites and web applications.`,
        ` Utilized chart libraries such as Nivo Charts and ApexCharts for data visualization.`,
        `Successfully implemented 2 Progressive Web Applications (PWA) and 1 E-Commerce Dashboard Panel using React.`,
        `Developed 3 websites using Next.js, leveraging its server-side rendering capabilities.`,
        `Engineered reusable components deployed across all projects to enhance development efficiency.`,
        `Restructured an e-commerce project from React to Next.js, resulting in an 80% performance improvement.`,
      ],
    },
  ],
  skills: [
    {
      title: `Back-end Skills`,
      skills: [`Node.js`, `Express`, `MongoDB`, `Postgresql`, `MySQL`, `SQL`],
    },
    {
      title: `Front-end Skills`,
      skills: [
        `JavaScript`,
        `TypeScript`,
        `React`,
        `Next`,
        `HTML`,
        `CSS`,
        `SASS`,
        `Tailwind CSS`,
        `Jest`,
        `Cypress`,
        `StoryBook`,
        `Vue (Familiar)`,
      ],
    },
    {
      title: `Soft Skills`,
      skills: [
        `Agile`,
        `Teamwork`,
        `Time Management`,
        `Documentation`,
        `Team Leadership and Management`,
        `Collaborative Development`,
      ],
    },
    {
      title: `Learning Now...`,
      still_learning: true,
      skills: [`Go`],
    },
  ],
};
