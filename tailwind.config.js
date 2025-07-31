module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
     colors: {
        gray:'#475467',
        background: '#F9FAFB',
        white: '#FFFFFF',
        'border-gray':'#EAECF0',
        header:'#FEF3F2',
        orange:'#FF692E',
        border:'#D0D5DD'
      },
      screens: {

  'xs': '320px', 
  'sm':'640px',
  'md': '1280px',   
  'lg': '1536px',   
},
       boxShadow: {
    'xs': '0 1px 2px rgba(16,24,40,0.05)',
  },
   backgroundImage: {
        'dooj-gradient': 'linear-gradient(135deg, #F3B33E 0%, #EB693C 52.25%)',
      },
   fontFamily: {
        kohinoor: ['"Kohinoor Bangla"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
