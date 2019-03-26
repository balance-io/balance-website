import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { Text, Heading, Card as RebassCard, Flex } from "rebass";
import PropTypes from "prop-types";

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

  return <Image fixed={image[brand].childImageSharp.fixed} />;
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
  ...rest
}) => (
  <Card p={4} css={{ maxWidth: 400 }} {...rest}>
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

  return (
    <Flex flexDirection="column">
      {integrations.map((integration, index) => (
        <IntegrationCard key={index} {...integration} />
      ))}
    </Flex>
  );
};

export { Card, IntegrationCard };
export default IntegrationStack;
