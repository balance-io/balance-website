export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  dark: '51, 51, 51',
  grey: '187, 187, 187',
  lightGrey: '215, 236, 255',
  softerGrey: '120, 127, 140',
  darkGrey: '128, 128, 128',
  mediumGrey: '108, 117, 128',
  fadedBlue: '24, 32, 42',
  navyBlue: '17, 23, 31',
  darkBlue: '55, 61, 73',
  blue: '58, 113, 242',
  fadedDarkBlue: '79, 98, 114',
  lightBlue: '147, 160, 178',
  lighterBlue: '157, 171, 187',
  gold: '246, 203, 71',
  orange: '235, 129, 9',
  green: '11, 176, 113',
  purple: '50, 50, 93',
  lightGreen: '10, 255, 162',
  red: '221, 69, 65'
};

export const fonts = {
  small: '12px',
  medium: '16px',
  large: '18px',
  h1: '32px',
  h2: '28px',
  h3: '24px',
  h4: '20px',
  h5: '17px'
};

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out'
};

export const responsive = {
  xs: {
    min: 'min-width: 479px',
    max: 'max-width: 480px'
  },
  sm: {
    min: 'min-width: 639px',
    max: 'max-width: 640px'
  },
  md: {
    min: 'min-width: 959px',
    max: 'max-width: 960px'
  },
  lg: {
    min: 'min-width: 1023px',
    max: 'max-width: 1024px'
  }
};

export const globalStyles = `
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  #___gatsby, div[data-reactroot] {
    height: 100%;
    width: 100%;
  }

  @media screen and (${responsive.sm.max}) {
    html, body {
  		position: relative;
  		max-width: 100%;
  		overflow-x: hidden;
  	}
  }

  body {
    font-family: 'FF Mark Pro', "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
  	font-stretch: normal;
    font-size: ${fonts.medium};
    color: rgb(${colors.dark});
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  	-webkit-text-size-adjust: 100%;
  }

  button:active,
  button:focus,
  button.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }

  [tabindex] {
    outline: none;
    height: 100%;
  }

  a, p, h1, h2, h3, h4, h5, h6 {
  	text-decoration: none;
  	margin: 0;
  	padding: 0;
  }

  h1 {
    font-size: ${fonts.h1}
  }
  h2 {
    font-size: ${fonts.h2}
  }
  h3 {
    font-size: ${fonts.h3}
  }
  h4 {
    font-size: ${fonts.h4}
  }
  h5 {
    font-size: ${fonts.h5}
  }
  h6 {
    font-size: ${fonts.h6}
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  ul, li {
  	list-style: none;
  	margin: 0;
  	padding: 0;
  }

  * {
    box-sizing: border-box !important;
  }

  button {
    border-style: none;
    line-height: 1em;
  }
`;
