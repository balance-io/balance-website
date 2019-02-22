import React from "react";
import { Text, Heading, Card, Flex } from "rebass";
import PropTypes from "prop-types";

import Badge from "../Badge";

const Squircle = props => {
  return (
    <Card
      width="32px"
      borderRadius="10px"
      boxShadow="0 4px 5px 0 rgba(37,41,46,0.04), 0 1px 3px 0 rgba(37,41,46,0.08)"
      css={`
        height: 32px;
      `}
      {...props}
    />
  );
};

const Integration = ({ name, description, brand, status, active, ...rest }) => (
  <Card
    py={3}
    px={24}
    bg="white"
    boxShadow={
      active
        ? "0 10px 50px 0 rgba(37, 41, 46, 0.32)"
        : "0 9px 45px 0 rgba(37,41,46,0.32)"
    }
    borderRadius="12.6px"
    {...rest}
  >
    <Flex justifyContent="flex-end">
      <Badge mr={"-8px"}>{status ? status : "IN PROGRESS"}</Badge>
    </Flex>

    <Squircle mb={3} bg={brand} />

    <Heading as="h3" color="text">
      {name}
    </Heading>
    <Text as="p" mt={2} mb="" color="textLighter" lineHeight={1.4}>
      {description}
    </Text>
  </Card>
);

Integration.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  status: PropTypes.string,
  active: PropTypes.bool
};

export default Integration;
