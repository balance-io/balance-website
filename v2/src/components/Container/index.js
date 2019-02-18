import styled from "styled-components";
import { Box } from "rebass";

const Container = styled(Box)({
  maxWidth: 960
});

Container.defaultProps = {
  mx: "auto"
};

export default Container;