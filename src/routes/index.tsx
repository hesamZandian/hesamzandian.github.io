import { portfolioInfo } from '../constants/portfolioInfo';

// pages
import About from '../pages/about';
import Educations from '../pages/educations';
import Experiences from '../pages/experiences';
import Projects from '../pages/projects';
import Skills from '../pages/skills';

export const PAGE_ROUTES = [
  {
    id: 1,
    path: '/',
    element: <About data={portfolioInfo} />,
  },
  {
    id: 2,
    path: '/skills/',
    element: <Skills data={portfolioInfo} />,
  },
  {
    id: 3,
    path: '/educations/',
    element: <Educations data={portfolioInfo} />,
  },
  {
    id: 4,
    path: '/experiences/',
    element: <Experiences data={portfolioInfo} />,
  },
  {
    id: 4,
    path: '/projects/',
    element: <Projects data={portfolioInfo} />,
  },
];
