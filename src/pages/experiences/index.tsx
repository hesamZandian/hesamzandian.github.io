import { IExperienceItem, IPortfolio } from "../../constants/types";
import Experience from "../../components/experiences/experience";
import Page from "../../components/layouts/page";
import PageTitle from "../../components/shared/page-title";

interface IExperiences {
  data: Pick<IPortfolio, "experiences">;
}

const Experiences = ({ data }: IExperiences) => {

  return (
    <Page className=' pt-[140px] max-[830px]:!pt-[60px]'>
        <PageTitle>Experiences</PageTitle>
        {data?.experiences.map((work_experience: IExperienceItem) => {
          return (
            <Experience data={work_experience} />
          );
        })}
    </Page>
  );
};

export default Experiences;
