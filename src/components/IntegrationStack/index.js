import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { Text, Heading, Card as RebassCard, Flex, Button } from "rebass";
import PropTypes from "prop-types";
import { useNumber } from "react-hanger";

import Badge from "../Badge";
import { ExternalLink } from "../Links";

import { useSiteMetadata } from "../../hooks";

const BrandIcon = ({ brand }) => {
  const image = useStaticQuery(graphql`
    query {
      maker: file(relativePath: { eq: "integrations/maker.png" }) {
        childImageSharp {
          fixed(height: 46) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      compound: file(relativePath: { eq: "integrations/compound.png" }) {
        childImageSharp {
          fixed(height: 46) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      dharma: file(relativePath: { eq: "integrations/dharma.png" }) {
        childImageSharp {
          fixed(height: 46) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <Image
      style={{
        borderRadius: 14.6,
        boxShadow:
          "0 5px 8px 0 rgba(37,41,46,0.04), 0 1px 4px 0 rgba(37,41,46,0.08)"
      }}
      fixed={image[brand].childImageSharp.fixed}
    />
  );
};

const Card = ({ active, ...rest }) => (
  <RebassCard
    bg="white"
    boxShadow={
      active
        ? "0 10px 50px 0 rgba(37, 41, 46, 0.32)"
        : "0 13px 62px 0 rgba(37,41,46,0.32)"
    }
    borderRadius="18px"
    {...rest}
  />
);

const IntegrationCard = ({
  name,
  description,
  link,
  brand,
  ready,
  active,
  stackIndex,
  // activeIndex,
  index,
  ...rest
}) => (
  <Card
    p={4}
    active={active}
    css={{
      position: "absolute",
      maxWidth: 400,
      transform: active
        ? `scale(1)`
        : `translateY(-${stackIndex * 30}px) scale(${1 - stackIndex * 0.1})`,
      transition: "all 250ms ease-in-out"
      // zIndex: activeIndex
    }}
    {...rest}
  >
    {/* <Flex justifyContent="flex-end">
      <Badge mr={"-8px"}>{ready ? "READY" : "SOON"}</Badge>
    </Flex> */}

    <Flex alignItems="center">
      <BrandIcon brand={brand} />

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
    {/* {active ? "active: true" : "active: false"}
    {` | index: ${index} | stackIndex: ${stackIndex}`} */}
  </Card>
);

IntegrationCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  ready: PropTypes.bool.isRequired,
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
        css={{ height: 240, position: "relative", zIndex: 0 }}
      >
        {integrations.map((integration, index) => (
          <IntegrationCard
            key={index}
            index={index}
            stackIndex={integrations.length - 1 - index}
            activeIndex={rotatingNumber.value}
            active={
              rotatingNumber.value === integrations.length - 1 - index && true
            }
            {...integration}
          />
        ))}
      </Flex>

      {/* {rotatingNumber.value}
      <Flex>
        <Button width={64} onClick={() => rotatingNumber.increase(1)}>
          +
        </Button>
        <Button width={64} onClick={() => rotatingNumber.decrease(1)}>
          -
        </Button>
      </Flex> */}
    </>
  );
};

export { Card, IntegrationCard };
export default IntegrationStack;
