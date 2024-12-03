import Button from '../../shared/button';

interface IProject {
  title: string;
  role: string;
  description: string;
  demo_link?: string;
  tech_stacks: string[];
}
const Project = ({
  title,
  role,
  description,
  demo_link,
  tech_stacks,
}: IProject) => {
  return (
    <div className='w-full flex flex-col justify-between shadow-card p-[22px] rounded-[8px] text-light'>
      <div className='flex flex-col'>
        <h1 className='text-xl text-secondary'>{title}</h1>
        <h4 className='text-secondary mb-2'>{role}</h4>
        <p className='text-sm leading-6 mt-2'>{description}</p>
      </div>
      <div className='flex flex-wrap gap-2 mt-4'>
        {tech_stacks.map((tech_stack) => (
          <span className='text-sm border border-dashed border-secondary text-light rounded-md px-2 leading-6 max-[830px]:mr-[5px]'>
            {tech_stack}
          </span>
        ))}
      </div>
      {demo_link && <Button className='mt-3 !text-sm'>
        {' '}
        <a
          target='_blank'
          rel='noreferrer'
          href={demo_link}
          className='text-center w-full pl-2 !text-secondary'
        >
          Show Demo Or Project
        </a>
      </Button>}
    </div>
  );
};

export default Project;
