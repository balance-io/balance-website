export const colors = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  dark: '51, 51, 51',
  grey: '221, 221, 221',
  lightGrey: '238, 238, 238',
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
  medium: '14px',
  large: '16px',
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
  @font-face {
    font-family:'FreightText';
    src: url('/assets/fonts/FreightText Pro Book.eot');
    src: url('/assets/fonts/FreightText Pro Book.eot?#iefix') format('embedded-opentype'),
      url('/assets/fonts/FreightText Pro Book.woff2') format('woff2'),
      url('/assets/fonts/FreightText Pro Book.woff') format('woff'),
      url('/assets/fonts/FreightText Pro Book.svg#FreightText Pro Book') format('svg');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    unicode-range: U+0020-00FE;
  }

  @font-face {
    font-family:'FreightText';
    src: url('/assets/fonts/FreightText Pro Book Italic.eot');
    src: url('/assets/fonts/FreightText Pro Book Italic.eot?#iefix') format('embedded-opentype'),
      url('/assets/fonts/FreightText Pro Book Italic.woff2') format('woff2'),
      url('/assets/fonts/FreightText Pro Book Italic.woff') format('woff'),
      url('/assets/fonts/FreightText Pro Book Italic.svg#FreightText Pro Book Italic') format('svg');
    font-weight: 400;
    font-style: italic;
    font-stretch: normal;
    unicode-range: U+0020-00FE;
  }

  @font-face {
    font-family:'FreightText';
    src: url('/assets/fonts/FreightText Pro Bold.eot');
    src: url('/assets/fonts/FreightText Pro Bold.eot?#iefix') format('embedded-opentype'),
      url('/assets/fonts/FreightText Pro Bold.woff2') format('woff2'),
      url('/assets/fonts/FreightText Pro Bold.woff') format('woff'),
      url('/assets/fonts/FreightText Pro Bold.svg#FreightText Pro Bold') format('svg');
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    unicode-range: U+0020-00FE;
  }

  @font-face {
	font-family:'FF Mark Pro';
	src: url('/assets/fonts/MarkPro-Book.eot');
	src: url('/assets/fonts/MarkPro-Book.eot?#iefix') format('embedded-opentype'),
		url('/assets/fonts/MarkPro-Book.woff2') format('woff2'),
		url('/assets/fonts/MarkPro-Book.woff') format('woff'),
		url('/assets/fonts/MarkPro-Book.svg#MarkPro-Book') format('svg');
	font-weight: 400;
	font-style: normal;
	font-stretch: normal;
	unicode-range: U+0020-00FE;
  }

  @font-face {
  	font-family:'FF Mark Pro';
  	src: url('/assets/fonts/MarkPro-Medium.eot');
  	src: url('/assets/fonts/MarkPro-Medium.eot?#iefix') format('embedded-opentype'),
  		url('/assets/fonts/MarkPro-Medium.woff2') format('woff2'),
  		url('/assets/fonts/MarkPro-Medium.woff') format('woff'),
  		url('/assets/fonts/MarkPro-Medium.svg#MarkPro-Medium') format('svg');
  	font-weight: 500;
  	font-style: normal;
  	font-stretch: normal;
  	unicode-range: U+0020-00FE;
  }

  @font-face {
  	font-family:'FF Mark Pro';
  	src: url('/assets/fonts/MarkPro-Bold.eot');
  	src: url('/assets/fonts/MarkPro-Bold.eot?#iefix') format('embedded-opentype'),
  		url('/assets/fonts/MarkPro-Bold.woff2') format('woff2'),
  		url('/assets/fonts/MarkPro-Bold.woff') format('woff'),
  		url('/assets/fonts/MarkPro-Bold.svg#MarkPro-Bold') format('svg');
  	font-weight: 700;
  	font-style: normal;
  	font-stretch: normal;
  	unicode-range: U+0020-00FE;
  }

  html, body, #root, #router-root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "FF Mark Pro", "Helvetica Neue", Arial, Helvetica, sans-serif
    font-weight: 300;
    font-size: ${fonts.medium};
    color: rgb(${colors.dark});
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  a {
    text-decoration: none;
    color: inherit;
  }

  div {
    width: 100%;
  }

  * {
    box-sizing: border-box !important;
  }

  button {
    border-style: none;
    line-height: 1em;
  }
`;
