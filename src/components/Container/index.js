import styled from "styled-components";
import PropTypes from "prop-types";
import { Box } from "rebass";

const Container = styled(Box)`
  max-width: ${props => `${props.maxWidth}px`};

  @media only screen and (max-width: ${props => `${props.maxWidth}px`}) {
    padding-left: ${props => `${props.gutter}px`};
    padding-right: ${props => `${props.gutter}px`};
  }
`;

Container.defaultProps = {
  mx: "auto",
  maxWidth: 960,
  gutter: 20
};

Container.propTypes = {
  maxWidth: PropTypes.number,
  gutter: PropTypes.number
};

export default Container;
