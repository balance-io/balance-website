import React from "react";
import { Image } from "rebass";
import PropTypes from "prop-types";
import styled from "styled-components";

import pink from "../../images/pink.png";
import blue from "../../images/blue.png";
import green from "../../images/green.png";
import purple from "../../images/purple.png";
import yellow from "../../images/yellow.png";

const getWaveColor = color => {
  switch (color) {
    case "pink":
      return pink;
    case "blue":
      return blue;
    case "green":
      return green;
    case "purple":
      return purple;
    case "yellow":
    default:
      return yellow;
  }
};

const WaveImage = styled(Image)`
  position: absolute;
  top: ${props => (props.offset ? `${props.offset}px` : 0)};
  transform: translateX(-50%);
  left: 50%;
  max-width: unset;
`;

const Wave = ({ color, offset }) => (
  <WaveImage src={getWaveColor(color)} offset={offset} />
);

Wave.propTypes = {
  color: PropTypes.oneOf(["pink", "blue", "green", "purple", "yellow"])
    .isRequired,
  offset: PropTypes.number
};

const WavesWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  transform: translateY(-50%);
  z-index: -1;
  height: 280px;
  margin-top: -32px;
  top: 50%;
`;

const Waves = () => (
  <WavesWrapper>
    <Wave color="yellow" />
    <Wave color="blue" offset={73} />
    <Wave color="green" offset={33} />
    <Wave color="purple" offset={81} />
    <Wave color="pink" offset={86} />
  </WavesWrapper>
);

export default Waves;
