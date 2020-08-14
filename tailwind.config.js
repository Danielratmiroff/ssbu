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
        white: '#FCFDFF',
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
      grey: {
        10: '#E9EAED',
        20: '#D4D5DB',
        30: '#BEC1CA',
        40: '#A8ACB8',
        50: '#9297A6',
        60: '#7D8294',
        70: '#676D82',
        80: '#515971',
        90: '#3C445F',
        100: '#262F4D',
      },
      red: {
        10: '#FFF2F0',
        20: '#FFE5E0',
        30: '#FFCCC2',
        40: '#FFB2A3',
        50: '#FF9985',
        60: '#FF7F66',
        70: '#F25B3A',
        80: '#E64E29',
      },
      green: {
        10: '#EDFFF5',
        20: '#CBF8DE',
        30: '#9AF8C1',
        40: '#6FE9A3',
        50: '#5BE295',
        60: '#42D681',
        70: '#2ACE6F',
        80: '#2EC06C',
      },
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