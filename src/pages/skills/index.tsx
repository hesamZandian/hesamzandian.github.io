import Page from '../../components/layouts/page';
import PageTitle from '../../components/shared/page-title';
import { IPortfolio } from '../../constants/types';

interface ISkills {
  data: IPortfolio;
}

const Skills = ({ data }: ISkills) => {
  return (
    <Page>
      <PageTitle>Skills</PageTitle>
      <div className='w-full'>
        {data.skills.map(({ title, still_learning, skills }) => {
          return (
            <>
              <h4
                className={`text-[18px] border-l-[3px] border-secondary font-m_bold text-secondary py-2 px-3 my-4 uppercase max-[830px]:text-[14px] ${
                  still_learning ? '!border-none !pl-0 capitalize mb-3' : ``
                }`}
              >
                {title}
              </h4>
              <div className='w-full flex items-center flex-wrap gap-[10px] pl-3'>
                {skills.map((skill) => (
                  <span className='text-[16px] border border-dashed border-secondary text-light rounded-md p-2 max-[830px]:mr-[5px] max-[830px]:text-sm'>
                    {skill}
                  </span>
                ))}
              </div>
            </>
          );
        })}
      </div>
    </Page>
  );
};
export default Skills;
