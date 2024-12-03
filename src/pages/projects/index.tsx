import Page from '../../components/layouts/page';
import Project from '../../components/projects/project';
import PageTitle from '../../components/shared/page-title';
import { IPortfolio } from '../../constants/types';

interface IProjects {
  data: Pick<IPortfolio, 'projects'>;
}
const Projects = ({ data }: IProjects) => {
  return (
    <Page className='!w-full p-3 !pb-[30px]'>
      <PageTitle>Projects</PageTitle>
      <div className='w-full grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6 animate__animated animate__fadeIn   animate__delay-1s'>
        {data.projects.map(
          ({ title, role, description, demo_link, teck_stacks }) => {
            return (
              <Project
                title={title}
                role={role}
                description={description}
                demo_link={demo_link}
                tech_stacks={teck_stacks}
              />
            );
          }
        )}
      </div>
    </Page>
  );
};

export default Projects;
