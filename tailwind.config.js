module.exports = {
  theme: {
    screens: {
      xs: '320px',
      sm: '540px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      primary: {
        dark: '#040941',
        white: '#ffffff',
        blue: '#1D6DE3',
        grey: '#F0F4FF',
      },
      secondary: {
        red: '#cc1b1b',
        lightblue: '#3DADF2',
        orange: '#f28f18',
        purple: '#7463e0',
        green: '#26a35b',
        blue: '#436af7',
      },
      // spacing: {
      //   sm: '8px',
      //   md: '16px',
      //   lg: '24px',
      //   xl: '48px',
      // },
      tier: {
        A: '#D71C1C',
        B: '#FF9619',
        C: '#27AE60',
        D: '#3DADF2',
        E: '#4A71FF',
        F: '#7FBFFF',
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