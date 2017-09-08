export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  dark: '51, 51, 51',
  grey: '221, 221, 221',
  lightGrey: '241, 240, 250',
  darkGrey: '128, 128, 128',
  blue: '97, 218, 251',
  lightBlue: '197, 242, 255',
  gold: '246, 203, 71',
  green: '11, 176, 113',
  lightGreen: '10, 255, 162',
  red: '221, 69, 65'
};

export const fonts = {
  small: '12px',
  medium: '16px',
  large: '18px',
  h1: '30px',
  h2: '28px',
  h3: '24px',
  h4: '18px',
  h5: '16px'
};

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out'
};

export const padding = {
  smallPadding: '15px',
  mediumPadding: '25px',
  largePadding: '50px'
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
    min: 'min-width: 999px',
    max: 'max-width: 1000px'
  },
  lg: {
    min: 'min-width: 1199px',
    max: 'max-width: 1200px'
  }
};

export const globalStyles = `
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
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

  a {
    text-decoration: none;
    color: inherit;
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
