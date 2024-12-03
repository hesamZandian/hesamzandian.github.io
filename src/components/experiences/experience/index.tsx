import { IExperienceItem } from '../../../constants/types';

interface IExperience {
  data: IExperienceItem;
}

const Experience = (props: IExperience) => {
  const { data } = props;
  return (
    <div className='w-full' key={data.id}>
      <div className='max-w-full md:max-w-[55%] flex items-center mb-[24px] text-sm shadow-company-card rounded-[80px]'>
        <div className='flex flex-col justify-center items-center rounded-full w-20 h-20 mr-4 shadow-company-image-card'>
          <img
            alt='company'
            loading='lazy'
            src={data?.company_logo}
            className='w-12 h-12'
          />
        </div>
        <div className='w-[calc(100% - 80px)] flex flex-col'>
          <h3 className='text-secondary text-[18px] max-[830px]:!text-[16]'>
            {data?.company_name}
          </h3>
          <span className='text-secondary text-[18px] max-[830px]:!text-[12]'>
            {data?.role}
          </span>
          <span className='ml-2 text-slate-gray max-[830px]:!text-[10px] max-[830px]:!ml-0'>
            {data?.country} - {data?.city} | {data?.start_date} -{' '}
            {data?.end_date ?? 'Present'}
          </span>
        </div>
      </div>
      <div className='pl-[25px] max-[830px]:!pl-0'>
        <h3 className='text-md font-m_bold text-secondary'>
          Responsibilities:
        </h3>
        <ul className='p-0 mt-4 mb-11'>
          {data.responsibilities.map((responsibility: string, rdx: number) => {
            return (
              <li className='text-md mb-1 marker:text-secondary list-disc'>
                <span key={rdx} className='text-light'>
                  {responsibility}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
