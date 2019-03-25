import React from "react";
import { Text, Heading, Card, Flex, Image } from "rebass";
import PropTypes from "prop-types";

import Badge from "../Badge";

import maker from "../../images/integrations/maker.svg";
import opensea from "../../images/integrations/opensea.svg";
import uniswap from "../../images/integrations/uniswap.svg";
import veil from "../../images/integrations/veil.svg";

const Squircle = props => (
  <Card
    width="32px"
    borderRadius="10px"
    boxShadow="0 4px 5px 0 rgba(37,41,46,0.04), 0 1px 3px 0 rgba(37,41,46,0.08)"
    css={{ height: 32 }}
    {...props}
  />
);

const BrandSquircle = ({ brand }) => {
  let brandLogo;

  switch (brand) {
    case "opensea":
    default:
      brandLogo = opensea;
      break;
    case "maker":
      brandLogo = maker;
      break;
    case "veil":
      brandLogo = veil;
      break;
    case "uniswap":
      brandLogo = uniswap;
      break;
    case "compound":
      brandLogo = "";
      break;
  }

  return (
    <Squircle mb={3} bg={brand}>
      <Image src={brandLogo} css={{ verticalAlign: "middle" }} />
    </Squircle>
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
      <Badge mr={"-8px"}>{status ? status : "VOTED"}</Badge>
    </Flex>

    <BrandSquircle brand={brand} />

    <Heading as="h3" fontFamily="graphik" fontWeight="medium" color="text">
      {name}
    </Heading>
    <Text
      as="p"
      my={2}
      fontWeight="regular"
      fontFamily="graphik"
      color="textLighter"
      lineHeight={1.4}
    >
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
