import React from "react";
import Image from "gatsby-image";
import { Text, Heading, Card as RebassCard, Flex, Button } from "rebass";
import PropTypes from "prop-types";
import { useNumber } from "react-hanger";

import Badge from "../Badge";
import { ExternalLink } from "../Links";

import { useSiteMetadata, useIntegrationImages } from "../../hooks";

const Card = props => (
  <RebassCard
    bg="white"
    boxShadow="0 10px 50px 0 rgba(37, 41, 46, 0.32)"
    borderRadius="18px"
    {...props}
  />
);

const BrandCard = ({ brand, active, ...rest }) => {
  const brandBackgroundPositions = {
    maker: {
      x: "75%",
      y: "center"
    },
    compound: {
      x: "35%",
      y: "-40px"
    },
    dharma: {
      x: "65%",
      y: "center"
    }
  };

  return (
    <Card
      bg="white"
      p={4}
      boxShadow="0 10px 50px 0 rgba(37, 41, 46, 0.32)"
      backgroundImage={`url(${
        useIntegrationImages()[`${brand}Blur`].childImageSharp.original.src
      })`}
      backgroundSize="cover"
      backgroundPosition={
        brandBackgroundPositions[brand]
          ? `${brandBackgroundPositions[brand].x} ${
              brandBackgroundPositions[brand].y
            }`
          : `center`
      }
      backgroundRepeat="no-repeat"
      borderRadius="18px"
      css={{
        position: "relative",
        maxWidth: 400,
        transform: active ? `scale(1)` : `scale(0.9)`,
        // : `translateY(-${stackIndex * 30}px) scale(${1 - stackIndex * 0.1})`,
        transition: "all 250ms ease-in-out"
      }}
      {...rest}
    />
  );
};

const IntegrationCard = ({
  name,
  description,
  link,
  brand,
  ready,
  active,
  ...rest
}) => (
  <BrandCard brand={brand} active={active} {...rest}>
    {!ready && (
      <Badge css={{ top: 16, right: 16, position: "absolute" }}>SOON</Badge>
    )}

    <Flex alignItems="center">
      <Image
        style={{
          borderRadius: 14.6,
          boxShadow:
            "0 5px 8px 0 rgba(37,41,46,0.04), 0 1px 4px 0 rgba(37,41,46,0.08)"
        }}
        fixed={useIntegrationImages()[brand].childImageSharp.fixed}
      />

      <Heading
        ml={3}
        lineHeight={1}
        as="h3"
        fontFamily="graphik"
        fontWeight="medium"
        color="text"
      >
        {name}
      </Heading>
    </Flex>

    <Text
      as="p"
      mt={3}
      mb={0}
      fontWeight="regular"
      fontFamily="graphik"
      color="textLighter"
      lineHeight={1.4}
    >
      {description}
      <Text as="br" />
      <ExternalLink
        fontFamily="graphik"
        color="azure"
        css={{ fontWeight: 500 }}
        href={link}
      >
        {link.replace("https://", "")}
      </ExternalLink>
    </Text>
  </BrandCard>
);

IntegrationCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  ready: PropTypes.bool,
  active: PropTypes.bool
};

const IntegrationStack = () => {
  const { integrations } = useSiteMetadata();

  const rotatingNumber = useNumber(0, {
    upperLimit: integrations.length - 1,
    lowerLimit: 0,
    loop: true
  });

  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
      >
        {integrations.map((integration, index) => (
          <IntegrationCard
            key={index}
            index={index}
            active={rotatingNumber.value === index && true}
            {...integration}
          />
        ))}
      </Flex>

      {/* Debug */}
      {rotatingNumber.value}
      <Flex>
        <Button onClick={() => rotatingNumber.increase(1)}>+</Button>
        <Button onClick={() => rotatingNumber.decrease(1)}>-</Button>
      </Flex>
    </>
  );
};

export { Card, IntegrationCard };
export default IntegrationStack;
