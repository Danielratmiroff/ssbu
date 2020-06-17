module.exports = {
  theme: {
    screens: {
      mobile: '768px',
      tablet: '768px',
      desktop: '1024px',
    },
    colors: {
      primary: {
        100: '#ebf8ff',
        300: '#90cdf4',
        500: '#4299e1',
        700: '#2b6cb0',
        900: '#2a4365',
      },
      secondary: {
        red: '#EE4555',
        blue: '#4574EE',
        purple: '#E045EE',
        green: '#5DEE45',
        900: '#744210',
      },
      grey: {
        100: '#EFF1F3',
        300: '#faf089',
        500: '#ecc94b',
        700: '#b7791f',
        900: '#744210',
      },
    },
    extend: {
      boxShadow: {
        huge: '0 30px 60px -15px rgba(0, 0, 0, .25)'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ],
    options: {
      whitelistPatterns: [ 
    /-(leave|enter|appear)(|-(to|from|active))$/, 
    /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ],
    },
  }
}