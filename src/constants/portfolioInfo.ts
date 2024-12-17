import snappcarfix from '../assets/images/snappcarfix.png';
import viramadarpishran from '../assets/images/viramadarpishran.png';
import tahatech from '../assets/images/tahatech.png';
import { IPortfolio } from './types';

export const portfolioInfo: IPortfolio = {
  full_name: 'Hesam Zandian',
  role: 'Front End Engineer',
  university: 'Shahid Rajaee Technical and Vocational University of kashan',
  certificate: 'Front End Web Development Certification FreeCodeCamp',
  graduate_degree: 'B.Sc Computer Software Engineering',
  graduate_location: 'Esfahan - Iran',
  graduate_duration: 'January 2020 – January 2022',
  resume_link:
    'https://drive.google.com/file/d/1_mwEwMsePTV6pvKmU5RZ5_iiobYANixy/view?usp=sharing',
  experiences: [
    {
      id: 1,
      company_logo: snappcarfix,
      company_name: 'SnappCarFix',
      role: 'Front End Team Lead',
      country: 'Iran',
      city: 'Isfahan',
      start_date: 'April 2022',
      end_date: 'March 2024',
      responsibilities: [
        'Led the front-end development team to deliver complex projects like Carfillo and SnappCarFix, managing tasks from planning to deployment and ongoing maintenance.',
        'Migrated existing projects to TypeScript and Tailwind CSS, significantly improving performance and maintainability.',
        'Designed a unified layout system to simplify branding updates and make styling changes easier across all projects.',
        'Mentored and guided 2 junior developers and 1 new engineer, helping them grow their soft skills and technical expertise. Supported them in working across various project types with a unified technology stack.',
        'Contributed to the recruitment process by reviewing resumes and coordinating interviews.',
      ],
    },
    {
      id: 2,
      company_logo: viramadarpishran,
      company_name: 'Vira Madaar Pishran',
      role: 'Front End Developer',
      country: 'Iran',
      city: 'Isfahan',
      start_date: 'August 2020',
      end_date: 'March 2022',
      responsibilities: [
        'Implemented complex interactive charts for websites and admin panels using the Nivo library, enhancing data visualization and user experience.',
        'Developed responsive websites and applications, including 2 Progressive Web Applications (PWAs) and an e-commerce admin panel.',
        'Transitioned a large e-commerce project from React to Next.js, significantly improving load times and overall performance.',
        'Developed 3 high-performance websites with Next.js, utilizing its server-side rendering (SSR) capabilities to enhance load times, SEO, and overall user experience.',
      ],
    },
    {
      id: 3,
      company_logo: tahatech,
      company_name: 'TahaTech',
      role: 'Front End Developer',
      country: 'Iran',
      city: 'Isfahan',
      start_date: 'Jan 2020',
      end_date: 'Aug 2020',
      responsibilities: [
        'Designed and implemented CMS dashboards for various products, creating user-friendly interfaces and enabling efficient data management.',
        'Took on back-end responsibilities, leveraging Node.js, Express, and MongoDB to develop and maintain robust server-side functionalities.',
      ],
    },
  ],
  skills: [
    {
      title: 'Back-end Skills',
      skills: ['Node.js', 'Express', 'MongoDB', 'Postgresql', 'MySQL'],
    },
    {
      title: 'Front-end Skills',
      skills: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next',
        'HTML',
        'CSS',
        'SASS',
        'Tailwind CSS',
        'Jest',
        'Cypress',
        'StoryBook',
        'Vue (Familiar)',
      ],
    },
    {
      title: 'Soft Skills',
      skills: ['Agile', 'Teamwork', 'Time Management', 'Documentation'],
    },
    {
      title: 'Learning Now...',
      still_learning: true,
      skills: ['Back-End development', 'Database Systems & Architecture'],
    },
  ],
  projects: [
    {
      title: 'SnappCarfix',
      role: 'Front End Team Lead',
      description:
        'Online store for car consumables for Snapp internet taxi drivers in Iran with more than 1000 sales per day. also this is a PWA project.',
      teck_stacks: [
        'JavaScript',
        'TypeScript',
        'React',
        'HTML',
        'CSS',
        'SASS',
        'Tailwind',
      ],
      demo_link: 'https://snappcarfix.com',
    },
    {
      title: 'Moshaveremon',
      role: 'Front End Engineer',
      description:
        'Platform for consulting and connecting with real estate advisors. also this is a PWA project.',
      teck_stacks: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next',
        'HTML',
        'CSS',
        'Tailwind',
      ],
      demo_link: 'https://moshaveremon.ir',
    },
    {
      title: 'Polvar',
      role: 'Front End Developer',
      description:
        'Online store for purchasing and comparing products like mobile phones, tablets, and accessories.',
      teck_stacks: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next',
        'HTML',
        'CSS',
        'Tailwind',
      ],
      demo_link: 'https://polvar.com',
    },
    {
      title: 'Maxeo',
      role: 'Front End Developer',
      description: `Maxeo is a free online tool designed for comprehensive SEO testing and website analysis, 
      tailored for Persian websites and WordPress platforms. It helps users evaluate their website's performance in search engines like Google, 
      providing actionable insights to improve rankings and visibility.`,
      teck_stacks: ['JavaScript', 'TypeScript', 'React', 'Next', 'HTML', 'CSS'],
      demo_link: 'https://maxeo.io',
      
    },
  ],
};
