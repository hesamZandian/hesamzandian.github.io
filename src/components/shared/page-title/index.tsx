import React from 'react';

interface IPageTitle {
  children: React.ReactNode;
}

const PageTitle = ({ children }: IPageTitle) => {
  return (
    <h1 className='text-[28px] font-m_bold mt-[24px] text-secondary max-[830px]:text-[18px] uppercase mb-6'>
      {children}
    </h1>
  );
};

export default PageTitle;
