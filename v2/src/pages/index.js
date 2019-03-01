import React from "react";
import { useStaticQuery } from "gatsby";
import { Box, Heading, Text, Link, Flex, Image as Img } from "rebass";
import Image from "gatsby-image";

import Layout from "../components/Layout";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Waves from "../components/Waves";

import Footer from "../components/Footer";
// import Integration from "../components/Integration";
import { Subscribers, SubscriptionForm } from "../components/Community";
import Tweets from "../components/Tweets";

// import integrations from "../data/integrations.json";

// // import device from "../images/iphone.png";
// import device2x from "../images/iphone@2x.png";

import { Announcement } from "../components/Badge";

import badge from "../images/app-store-badge.svg";
import { ExternalLink } from "../components/Links";
import Strong from "../components/Strong";

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
    <SEO title="Home" />

    {/* Header */}
    <Container>
      <Header />
    </Container>

    {/* Main */}
    <Box as="main">
      <Box>
        {/* Intro */}
        <Container pt={3}>
          <Box>
            <Heading
              as="h1"
              fontFamily="graphik"
              textAlign="center"
              fontSize={5}
              color="text"
              fontWeight="semibold"
            >
              Welcome to the open financial system
            </Heading>
            <Text
              as="p"
              fontFamily="graphik"
              fontWeight="regular"
              lineHeight={1.4}
              mb={0}
              mx="auto"
              css={{ maxWidth: 576 }}
              textAlign="center"
              fontSize={4}
              mt={3}
              color="textLighter"
            >
              Get access to the best tools and investment opportunities that are
              being built on Ethereum.
            </Text>
            <Flex justifyContent="center" my={4}>
              <Announcement
                pill="important"
                message="Beeg Yoshi Needs Your Help"
                to="/crowdfunding/"
              />
            </Flex>
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

        {/* App Store */}
        <Container>
          <Flex justifyContent="center" mb={5}>
            <AppStoreBadge />
          </Flex>
        </Container>
      </Box>

      <Box bg="white" py={4}>
        {/* Community */}
        <Container mb={[4, 5]}>
          <Heading fontWeight="regular" textAlign="center" fontSize={3}>
            Join the <Strong>Balance Community</Strong>
          </Heading>
          <Flex justifyContent="center" my={3}>
            <SubscriptionForm />
          </Flex>
          <Subscribers />
        </Container>

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

const AppStoreBadge = () => (
  <Link href="https://testflight.apple.com/join/QXCgM6bu">
    <Img
      css={`
        height: 56px;
        vertical-align: middle;
      `}
      src={badge}
    />
  </Link>
);

export default IndexPage;
