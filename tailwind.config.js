export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors:{
          primary: '#FF5733',
          secondary: '#33C1FF',
          background: '#F4F4F4',
          darkBackground: '#1A1A1A',
          text: '#000000',
          darkText: '#FFFFFF'
        },
        fontFamily: {
          custom: ['Poppins', 'sans-serif'],
        },
      },
    },
    darkMode: 'class', // Dark mode support
    plugins: [],
  };
  