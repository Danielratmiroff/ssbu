module.exports = {
  theme: {
    screens: {
      borderRadius: {
        'xl' : '24px',
      },
      mobile: '320px',
      tablet: '768px',
      desktop: '1024px',
    },
    colors: {
      primary: {
        dark: '#040941',
        white: '#ffffff',
        blue: '#1D6DE3',
        grad: 'linear-gradient(90deg, rgba(29,109,227,1) 0%, rgba(0,194,255,1) 78%)',
        grey: '#F0F4FF',
      },
      secondary: {
        red: '#D71C1C',
        lightblue: '#3DADF2',
        orange: '#FF9619',
        purple: '#7F6DF2',
        green: '#27AE60',
        blue: '#4A71FF',
      },
      // spacing: {
      //   sm: '8px',
      //   md: '16px',
      //   lg: '24px',
      //   xl: '48px',
      // },
      grey: {
        100: '#F0F4FF',
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