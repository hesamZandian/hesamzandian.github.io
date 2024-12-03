
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', // Adjust paths according to your project structure
  ], 
  theme: {
    extend: {
      colors: {
        primary: '#12232e',
        secondary: '#4da8da',
        'navigation-sidebar': '#12232ecf',
        'night-blue': '#007cc7',
        'dark-blue': '#203647',
        'slate-gray': 'rgb(136, 145, 150)',
        light: '#eefbfb',
      },
      borderRadius: {
        large: '100px', // Custom border-radius
      },
      boxShadow: {
        'default-light-btn': '-1px 2px 3px #D1D1D1, inset -1px 1px 4px -3px #00D8FF',
        'hover-light-btn': '0px 0px 7px rgba(77, 168, 218, 0.5), -1px 2px 3px #4DA8DA, inset -1px 1px 4px -3px #00D8FF',
        'active-light-btn': 'inset -1px 2px 3px #D1D1D1, inset 1px -1px 4px -3px #00D8FF',
        'default-dark-btn': '-1px 2px 3px #0C161D, inset -1px 1px 4px -3px #00D8FF',
        'hover-dark-btn': '0px 0px 7px rgba(77, 168, 218, 0.5), -1px 2px 3px #0C161D, inset -1px 1px 4px -3px #00D8FF',
        'active-dark-btn': 'inset -1px 2px 3px #0C161D, inset 1px -1px 4px -3px #00D8FF',
        navigation: '0px 3px 12px -3px rgba(0, 216, 255, 0.3)',
        card: '-12px 12px 12.32px 0px rgba(0, 0, 0, 0.25), 0px 1.57px 8px -4.71px rgba(0, 216, 255, 1) inset',
        'experience-card': '-3px 2px 6px rgba(77, 168, 218, 0.25), inset 0px 1.56907px 11.830px -4.70721px #00d8ff',
        'company-card': '0px 1.54528px 3.09056px rgba(77, 168, 218, 0.5)',
        'company-image-card': '0.754098px -0.754098px 3.01639px rgba(77, 168, 218, 0.5);',
      },
      fontSize: {
        text: '18px',
      },
      fontFamily: {
        light: ['M_Light'],
        m_regular: ['M_Regular'],
        m_medium: ['M_Medium'],
        m_black: ['M_Black'],
        m_bold: ['M_Bold'],
      },
      keyframes: {
        'fadeIn': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateZ(0)',
          },
        },
        'loading-ellipsis1': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'loading-ellipsis2': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(24px, 0)' },
        },
        'loading-ellipsis3': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
      animation: {
        'loading-ellipsis1': 'loading-ellipsis1 0.6s infinite',
        'loading-ellipsis2': 'loading-ellipsis2 0.6s infinite',
        'loading-ellipsis3': 'loading-ellipsis3 0.6s infinite',
      },
      spacing: {
        '80px': '80px', 
        '13px': '13px',
      },
    },
  },
  plugins: [],
};
