export default {
  fontSizes: [12, 14, 16, 18, 20, 40],
  fonts: {
    graphik: "Graphik, sans-serif"
  },
  fontWeights: {
    semibold: 600,
    medium: 500,
    regular: 400
  },
  colors: {
    maker: "#30BD9F",
    uniswap: "#C54BE5",
    veil: "#1B56F4",
    compound: "#00E5CF",
    freeSpeachGreen: "#55D134",
    snowyMint: "#E0FBD8",
    text: "#25292E",
    textDark: "#191817",
    deepSkyBlue: "#00A2F8",
    textLight: "#3C4252",
    textLighter: "#868B96"
  },
  buttons: {
    foam: {
      background: "#FFFFFF",
      border: "0.5px solid #E9E9E9",
      fontSize: props => (props.fontSize ? props.fontSize : 14),
      fontWeight: 500,
      color: "#0179FF",
      boxShadow:
        "0 1px 2px 0 rgba(206,206,206,0.50), inset 0 -2px 2px 0 rgba(237,237,237,0.50)",
      borderRadius: 4.8
    }
  }
};
