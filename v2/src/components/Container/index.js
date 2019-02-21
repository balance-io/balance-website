import styled from "styled-components";
import PropTypes from "prop-types";
import { Box } from "rebass";

const Container = styled(Box)`
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : "960px")};
`;

Container.defaultProps = {
  mx: "auto"
};

Container.propTypes = {
  maxWidth: PropTypes.number
};

export default Container;
