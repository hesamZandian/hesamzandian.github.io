
interface IButton {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: IButton) => {

  return (
    <button
      className={`flex flex-col justify-center items-center rounded-large px-5 py-2 font-m_medium text-text transition-shadow cursor-pointer 
      bg-primary text-light shadow-default-dark-btn hover:shadow-hover-dark-btn active:shadow-active-dark-btn ${
        className || ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
