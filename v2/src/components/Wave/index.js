import React from "react";
import { Image } from "rebass";
import PropTypes from "prop-types";

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

const Wave = ({ color }) => <Image src={getWaveColor(color)} />;

Wave.propTypes = {
  color: PropTypes.oneOf(["pink", "blue", "green", "purple", "yellow"])
    .isRequired
};

export default Wave;
