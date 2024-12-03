import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { MENU_ITEMS } from '../../../constants/navigation';

const Navigation = () => {
  const location = useLocation();
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  useEffect(() => {
      setIsMobileNavigationOpen(false);
  }, [location.pathname]);

  return (
    <nav className='fixed top-0 z-10 w-full flex items-center md:justify-center justify-end max-[768px]:px-2'>
      <ul className=' h-[80px] rounded-bl-[20px] rounded-br-[20px] px-10 hidden md:flex justify-evenly items-center bg-primary shadow-navigation'>
        {MENU_ITEMS.map(({ id, title, path }) => {
          return (
            <li key={id} className='flex-grow px-8'>
              <Link
                to={path}
                className='text-light font-m_light font-normal text-[15px] cursor-pointer hover:text-secondary transition-colors duration-300'
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
        <div
          className={`fixed w-full flex flex-col justify-center items-center top-0 right-0 bottom-0 md:hidden transition-all duration-700 animate-fadeIn h-screen ${
            isMobileNavigationOpen ? 'transform-x-0 bg-primary' : 'translate-x-full opacity-0 pointer-events-none bg-transparent'
          }`}
        >
          <button
            className='md:hidden block text-xl text-secondary absolute right-4 top-2 z-30'
            aria-label='Toggle Menu'
            onClick={() => setIsMobileNavigationOpen(false)}
          >
            ✕
          </button>
          <ul className='w-full h-full flex flex-col items-center justify-center space-y-6 z-20 md:space-y-0 md:space-x-8'>
            {MENU_ITEMS.map(({ id, title, path }) => {
              return (
                <li key={id} className='pb-6'>
                  <Link
                    to={path}
                    className={`${location.pathname === path ? 'text-secondary': 'text-light'} font-m_light text-[24px]`}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      <button
        className='md:hidden block mt-2 mr-1 text-4xl text-secondary'
        aria-label='Toggle Menu'
        onClick={() => setIsMobileNavigationOpen(!isMobileNavigationOpen)}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navigation;
