export const colors = {
  white: "255, 255, 255",
  black: "0, 0, 0",
  lightGrey: "216, 216, 216",
  grey: "187, 187, 187",
  softGrey: "161, 161, 172",
  blueishGrey: "28, 34, 42",
  blueGray19: "38, 43, 49",
  blueGray19BackgroundArrow: "46, 52, 59",
  darker: "25, 25, 25",
  dark: "51, 51, 51",
  darkTwo: "47, 49, 55",
  darkerNavyBlue: "12, 12, 13",
  darkNavyBlue: "12, 19, 28",
  navyBlue: "17, 23, 31",
  lightNavyBlue: "44, 49, 51",
  brightBlue: "58, 113, 242",
  lightBrightBlue: "89, 158, 255",
  blue: "58, 113, 242",
  lightBlue: "147, 160, 178",
  lighterBlue: "157, 171, 187",
  green: "11, 176, 113",
  lightPurple: "139, 78, 167",
  purple: "50, 50, 93",
  red: "221, 69, 65",
  twitter: "93, 156, 245",
  backgroundGray: "44, 47, 56",
  backgroundNavy: "7, 24, 39",
  darkBackground: "1, 31, 60",
  lightHeaderGrey: "204, 230, 227",
  lightFooterDivider: "202, 208, 216",
  darkFooterDivider: "31, 45, 61",
  darkFooterLinks: "49, 51, 54",
  github: "52, 54, 57",
  balanceGreen: "0, 192, 120",
  exchangeGreen: "37, 184, 130",
  managerButton: "61, 107, 168"
};

export const fonts = {
  tiny: "10px",
  small: "12px",
  medium: "16px",
  large: "18px",
  big: "22px",
  h1: "42px",
  h2: "32px",
  h3: "24px",
  h4: "20px",
  h5: "17px",
  h6: "14px"
};

export const transitions = {
  short: "all 0.1s ease-in-out",
  base: "all 0.2s ease-in-out",
  long: "all 0.3s ease-in-out"
};

export const responsive = {
  short: {
    min: "min-height: 479px",
    max: "max-height: 480px"
  },
  xxs: {
    min: "min-width: 359px",
    max: "max-width: 360px"
  },
  xs: {
    min: "min-width: 479px",
    max: "max-width: 480px"
  },
  sm: {
    min: "min-width: 639px",
    max: "max-width: 640px"
  },
  md: {
    min: "min-width: 959px",
    max: "max-width: 960px"
  },
  lg: {
    min: "min-width: 1023px",
    max: "max-width: 1024px"
  },
  xl: {
    min: "min-width: 1399px",
    max: "max-width: 1400px"
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

@font-face {
  font-family: 'Graphik';
  src: url('/fonts/Graphik-Regular.eot');
  src: url('/fonts/Graphik-Regular.eot?#iefix') format('embedded-opentype'),
	url('/fonts/Graphik-Regular.woff2') format('woff2'),
	url('/fonts/Graphik-Regular.woff') format('woff'),
	url('/fonts/Graphik-Regular.svg#Graphik-Regular') format('svg');
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  unicode-range: U+0020-00FE;
}

@font-face {
  font-family: 'Graphik';
  src: url('/fonts/Graphik-Medium.eot');
  src: url('/fonts/Graphik-Medium.eot?#iefix') format('embedded-opentype'),
	url('/fonts/Graphik-Medium.woff2') format('woff2'),
	url('/fonts/Graphik-Medium.woff') format('woff'),
	url('/fonts/Graphik-Medium.svg#Graphik-Medium') format('svg');
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  unicode-range: U+0020-00FE;
}

@font-face {
  font-family: 'Graphik';
  src: url('/fonts/Graphik-Semibold.eot');
  src: url('/fonts/Graphik-Semibold.eot?#iefix') format('embedded-opentype'),
	url('/fonts/Graphik-Semibold.woff2') format('woff2'),
	url('/fonts/Graphik-Semibold.woff') format('woff'),
	url('/fonts/Graphik-Semibold.svg#Graphik-Semibold') format('svg');
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  unicode-range: U+0020-00FE;
}

  html, body {
    width: 100%;
    height: 100%;
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
    background-color: rgb(${colors.backgroundNavy});
    color: rgb(${colors.dark});
    font-family: 'Graphik', "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
  	font-stretch: normal;
    font-size: ${fonts.medium};
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
