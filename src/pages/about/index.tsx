import React from 'react';
import Button from '../../components/shared/button';

import samImg from '../../assets/images/sam.png';
import aboutBackDarkImg from '../../assets/images/hero-back-dark.png';

import { IPortfolio } from '../../constants/types';
import SocialMedia from '../../components/social-media';
import Page from '../../components/layouts/page';

interface IAbout {
  data: Pick<
    IPortfolio,
    'full_name' | 'role' | 'resume_link'
  >;
}

const About = ({ data }: IAbout) => {

  return (
    <Page>
      <div className='w-full flex justify-between items-end mb-[16px] max-[830px]:!flex-col max-[830px]:!items-center'>
        <div className='max-[830px]:w-full max-[830px]:!order-2'>
          <div className='w-full mb-[35px] max-[830px]:!mt-4 max-[830px]:text-center'>
            <span className='text-secondary text-[21px]'>Hi I'm</span>
            <h2 className='font-m_bold text-secondary text-[38px] max-[970px]:!text-[32px] max-[830px]:!text-[24px]'>
              {data.full_name}
            </h2>
            <span className='font-m_regular text-[38px] max-[970px]:!text-[32px] max-[830px]:!text-[24px] text-light'>
              {data.role}
            </span>
          </div>
          <div className='flex flex-row-reverse max-[830px]:justify-between items-center '>
            <SocialMedia />
            <a href={data.resume_link} target='_blank' rel='noreferrer'>
              <Button className='text-secondary'>Download CV</Button>
            </a>
          </div>
        </div>
        <svg className='fixed top-full'>
          <clipPath id='heroClipPath' clipPathUnits='objectBoundingBox'>
            <path d='M1,0.465 C1,0.721,0.724,1,0.402,0.999 C0.123,1,0,0.974,0,0.717 C0,0.461,0.192,0.001,0.546,0.001 C0.797,0.001,1,0.209,1,0.465'></path>
          </clipPath>
        </svg>
        <div className='relative flex flex-col justify-center items-center max-[830px]:order-1 '>
          <div className='h-[417px] overflow-hidden max-[830px]:!h-[240px] w-full [clip-path:url(#heroClipPath)]'>
            <img
              loading='lazy'
              src={aboutBackDarkImg}
              alt='About back'
              height='100%'
              className='!h-full'
            />
            <div className='absolute bottom-[31px] -right-[13px] h-[470px] max-[830px]:h-[270px] max-[830px]:bottom-[-5px] max-[830px]:-right-[8px]'>
              <img
                loading='lazy'
                alt='Hesam Zandian'
                className='w-[410px] h-[516px] [clip-path: url(#heroClipPath)] overflow-hidden max-[830px]:w-[218px] max-[830px]:h-[275px]'
                src={samImg}
              />
            </div>
          </div>
        </div>
      </div>
      <p className='text-[18px] max-[830px]:text-[14px] text-light font-m_regular'>
        I am a <strong className='font-m_bold'>Front End Engineer</strong> with{' '}
        <strong className='font-m_bold'>over 4 years of experience</strong> in
        web development.
        <br />
        My focus is on front-end, with familiarity in back-end technologies and
        a genuine eagerness <br/>to deepen my knowledge in back-end.
        <br />I strongly believe that learning is a continuous journey , and
        there is always so much for me to learn.
      </p>
    </Page>
  );
};

export default About;
