import Page from '../../components/layouts/page';
import PageTitle from '../../components/shared/page-title';
import { IPortfolio } from '../../constants/types';

interface IEducation {
  data: Pick<
    IPortfolio,
    'graduate_degree' | 'graduate_duration' | 'university' | 'graduate_location'
  >;
}

const Educations = ({ data }: IEducation) => {
  return (
    <Page
      className='!justify-start pt-[165px] max-[830px]:!pt-[60px]'
      contentClassName='w-full'
    >
      <PageTitle>Educations</PageTitle>
      <div className='w-full shadow-card  rounded-[8px] p-[22px]'>
        <div className='w-full flex justify-between items-center flex-wrap'>
          <div className='flex flex-col'>
            <p className='text-left text-light text-xl max-[830px]:text-[16px]'>
              {data.university}
            </p>
            <span className='text-md max-[830px]:text-[14px] text-light'>
              {data.graduate_degree} 
            </span>
          </div>
          <div className='flex flex-col'>
            <span className='text-sm max-[830px]:text-[14px] text-light'>
              {data.graduate_location}
            </span>
            <span className='text-md max-[830px]:text-[14px] text-light'>
              {data.graduate_duration}
            </span>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Educations;
