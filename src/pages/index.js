import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Heading, Text, Link, Flex, Image as Img } from "rebass";
import Image from "gatsby-image";

import Layout from "../components/Layout";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Waves from "../components/Waves";
import { ExternalLink } from "../components/Links";
import Strong from "../components/Strong";
import Footer from "../components/Footer";
import { Subscribers, SubscriptionForm } from "../components/Community";
import Tweets from "../components/Tweets";
// import { Announcement } from "../components/Badge";
// import Integration from "../components/Integration";

// import integrations from "../data/integrations.json";
// // import device from "../images/iphone.png";
// import device2x from "../images/iphone@2x.png";
import badge from "../images/app-store-badge.svg";

import { useSiteMetadata } from "../hooks";

// const Device = props => (
//   <Box
//     css={`
//       display: block;
//       max-width: 432px;
//       max-height: 864px;
//       width: 100%;
//       vertical-align: middle;
//       position: relative;
//       z-index: auto;

//       &::after {
//         content: "";
//         position: absolute;
//         background-image: linear-gradient(to bottom, #00e5cf 0%, #c54be5 100%);
//         width: 100%;
//         height: 100%;
//         top: 25px;
//         left: 29px;
//         max-width: 375px;
//         max-height: 812px;
//         z-index: -1;
//       }
//     `}
//   >
//     {/* <Image
//       src={device2x}
//       css={`
//         z-index: 1;
//       `}
//     /> */}
//   </Box>
// );

const IndexPage = () => (
  <Layout>
    <SEO />

    {/* Header */}
    <Container>
      <Header />
    </Container>

    {/* Main */}
    <Box as="main">
      <Box pt={3}>
        {/* Intro */}
        <Container pt={5}>
          <Box>
            <Heading
              as="h1"
              fontFamily="graphik"
              fontSize={5}
              color="text"
              fontWeight="semibold"
            >
              See your Balance in Open Finance
            </Heading>
            <Text
              as="p"
              fontFamily="graphik"
              fontWeight="regular"
              lineHeight={1.4}
              mb={0}
              css={{ maxWidth: 576 }}
              fontSize={4}
              mt={3}
              color="textLighter"
            >
              Add all of your Ethereum wallets and keep track of your tokens,
              loans and investments.
            </Text>
            {/* <Flex justifyContent="center" my={4}>
              <Announcement
                pill="We're Growing"
                message="Invest in the future"
                to="/crowdfunding/"
              />
            </Flex> */}
          </Box>
        </Container>

        {/* Device */}
        <Box
          css={`
            position: relative;
          `}
        >
          <Waves />

          <Container my={4}>
            <Flex justifyContent="center">
              <Phone />
            </Flex>
          </Container>
        </Box>

        {/* Cards */}
        {/* <Flex>
          {integrations.map((integration, index) => (
            <Integration key={index} {...integration} />
          ))}
        </Flex> */}

        <Container>
          {/* App Store */}
          <Flex justifyContent="center" mb={4}>
            <AppStoreBadge />
          </Flex>

          {/* Community */}
          <Heading fontWeight="regular" textAlign="center" fontSize={3}>
            Get notified about our <Strong>Android</Strong> app
          </Heading>
          <Flex justifyContent="center" my={3}>
            <SubscriptionForm />
          </Flex>
          <Subscribers />
        </Container>
      </Box>

      <Box bg="white" py={4}>
        {/* Tweets */}
        <Container maxWidth={1136}>
          <Heading
            fontWeight="regular"
            textAlign="center"
            fontSize={3}
            mt={0}
            mb={22}
          >
            Follow{" "}
            <ExternalLink
              color="deepSkyBlue"
              href="https://twitter.com/balance_io"
            >
              <Strong>@balance_io</Strong>
            </ExternalLink>{" "}
            on Twitter
          </Heading>
          <Tweets />
        </Container>
      </Box>
    </Box>

    {/* Footer */}
    <Box bg="white" py={4}>
      <Container>
        <Footer />
      </Container>
    </Box>
  </Layout>
);

const Phone = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "app-screenshot.png" }) {
        childImageSharp {
          fixed(height: 544) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return <Image fixed={image.file.childImageSharp.fixed} />;
};

const AppStoreBadge = () => {
  const { appStoreUrl } = useSiteMetadata();

  return (
    <Link href={appStoreUrl}>
      <Img
        css={`
          height: 56px;
          vertical-align: middle;
        `}
        src={badge}
      />
    </Link>
  );
};

export default IndexPage;
