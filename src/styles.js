export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  lightGrey: '215, 236, 255',
  lighterGrey: '216, 216, 216',
  grey: '187, 187, 187',
  softerGrey: '120, 127, 140',
  fiftyGrey: '128, 128, 128',
  mediumGrey: '108, 117, 128',
  darkerGrey: '75, 83, 95',
  dark: '51, 51, 51',
  fadedBlue: '24, 32, 42',
  darkNavyBlue: '12, 19, 28',
  navyBlue: '17, 23, 31',
  fadedNavyBlue: '31, 43, 55',
  brightBlue: '58, 113, 242',
  blue: '58, 113, 242',
  fadedDarkBlue: '79, 98, 114',
  lightBlue: '147, 160, 178',
  lighterBlue: '157, 171, 187',
  gold: '246, 203, 71',
  orange: '235, 129, 9',
  green: '11, 176, 113',
  lightGreen: '0, 194, 120',
  darkGreen: '0, 163, 106',
  lighterGreen: '10, 255, 162',
  purple: '50, 50, 93',
  red: '221, 69, 65',
  facebook: '68, 93, 147',
  twitter: '0, 162, 249'
};

export const fonts = {
  tiny: '8px',
  small: '12px',
  medium: '16px',
  large: '18px',
  big: '22px',
  h1: '42px',
  h2: '32px',
  h3: '24px',
  h4: '20px',
  h5: '17px',
  h6: '14px'
};

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out'
};

export const responsive = {
  xxs: {
    min: 'min-width: 359px',
    max: 'max-width: 360px'
  },
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
  },
  xl: {
    min: 'min-width: 1399px',
    max: 'max-width: 1400px'
  }
};

export const globalStyles = `
@font-face {
  font-family: 'FreightText';
  src: url('/fonts/FreightText Pro Book.eot');
  src: url('/fonts/FreightText Pro Book.eot?#iefix') format('embedded-opentype'),
    url('/fonts/FreightText Pro Book.woff2') format('woff2'),
    url('/fonts/FreightText Pro Book.woff') format('woff'),
    url('/fonts/FreightText Pro Book.svg#FreightText Pro Book') format('svg');
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  unicode-range: U+0020-00FE;
}

@font-face {
  font-family: 'FreightText';
  src: url('/fonts/FreightText Pro Book Italic.eot');
  src: url('/fonts/FreightText Pro Book Italic.eot?#iefix') format('embedded-opentype'),
    url('/fonts/FreightText Pro Book Italic.woff2') format('woff2'),
    url('/fonts/FreightText Pro Book Italic.woff') format('woff'),
    url('/fonts/FreightText Pro Book Italic.svg#FreightText Pro Book Italic') format('svg');
  font-weight: 400;
  font-style: italic;
  font-stretch: normal;
  unicode-range: U+0020-00FE;
}

@font-face {
  font-family: 'FreightText';
  src: url('/fonts/FreightText Pro Bold.eot');
  src: url('/fonts/FreightText Pro Bold.eot?#iefix') format('embedded-opentype'),
    url('/fonts/FreightText Pro Bold.woff2') format('woff2'),
    url('/fonts/FreightText Pro Bold.woff') format('woff'),
    url('/fonts/FreightText Pro Bold.svg#FreightText Pro Bold') format('svg');
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  unicode-range: U+0020-00FE;
}

@font-face {
  font-family: 'FF Mark Pro';
  src: url('/fonts/MarkPro-Book.eot');
  src: url('/fonts/MarkPro-Book.eot?#iefix') format('embedded-opentype'),
    url('/fonts/MarkPro-Book.woff2') format('woff2'),
    url('/fonts/MarkPro-Book.woff') format('woff'),
    url('/fonts/MarkPro-Book.svg#MarkPro-Book') format('svg');
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  unicode-range: U+0020-00FE;
}

@font-face {
  font-family: 'FF Mark Pro';
  src: url('/fonts/MarkPro-Medium.eot');
  src: url('/fonts/MarkPro-Medium.eot?#iefix') format('embedded-opentype'),
    url('/fonts/MarkPro-Medium.woff2') format('woff2'),
    url('/fonts/MarkPro-Medium.woff') format('woff'),
    url('/fonts/MarkPro-Medium.svg#MarkPro-Medium') format('svg');
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  unicode-range: U+0020-00FE;
}

@font-face {
  font-family: 'FF Mark Pro';
  src: url('/fonts/MarkPro-Bold.eot');
  src: url('/fonts/MarkPro-Bold.eot?#iefix') format('embedded-opentype'),
    url('/fonts/MarkPro-Bold.woff2') format('woff2'),
    url('/fonts/MarkPro-Bold.woff') format('woff'),
    url('/fonts/MarkPro-Bold.svg#MarkPro-Bold') format('svg');
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  unicode-range: U+0020-00FE;
}



  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x:
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
    overflow-y:auto;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  	-webkit-text-size-adjust: 100%;
    -webkit-overflow-scrolling: touch;
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
