
interface IPage {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const Page = ({ children, className, contentClassName }: IPage) => {
  
  return (
    <div
      className={`flex flex-col items-center md:!p-0 md:!pt-[150px] bg-primary transition !py-[18px] min-h-screen !pt-[50px] ${className || ''}`}
    >
      <div className={`min-[1120px]:!max-w-[1100px] min-[1020px]:!max-w-[900px] min-[320px]:!max-w-[85%] ${contentClassName || ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Page;
