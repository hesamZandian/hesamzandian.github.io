import React from 'react';

interface LoadingWrapperProps {
  loading: boolean;
  children: React.ReactNode;
}

const Loading = (props: LoadingWrapperProps) => {
  const { loading, children } = props;

  if (loading) {
    return (
      <div className='fixed top-0 right-0 w-full h-full flex flex-col justify-center items-center bg-primary'>
        <div className='relative w-[80px] h-[80px]'>
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={`absolute top-[33px] w-[13px] h-[13px] rounded-full bg-secondary ${
                  index === 0
                    ? 'left-[8px] animate-loading-ellipsis1'
                    : index === 1
                    ? 'left-[8px] animate-loading-ellipsis2'
                    : index === 2
                    ? 'left-[32px] animate-loading-ellipsis2'
                    : 'left-[56px] animate-loading-ellipsis3'
                }`}
              />
            ))}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;
