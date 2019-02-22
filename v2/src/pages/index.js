import React from "react";
import { Box, Heading, Button, Text, Link, Card, Flex, Image } from "rebass";
import { TwitterTweetEmbed } from "react-twitter-embed";

import Layout from "../components/Layout";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Waves from "../components/Waves";

import Footer from "../components/Footer";
import Integration from "../components/Integration";
import Subscribers from "../components/Subscribers";

import tweets from "../data/tweets.json";
import integrations from "../data/integrations.json";

import device from "../images/iphone.png";
import device2x from "../images/iphone@2x.png";

import badge from "../images/app-store-badge.svg";

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
        <Container>
          <Box>
            <Heading as="h1" textAlign="center" fontSize={5} color="text">
              Welcome to the open financial system
            </Heading>
            <Text as="p" textAlign="center" fontSize={4} color="textLighter">
              Get access to the best tools and investment opportunities that are
              being built on Ethereum.
            </Text>
          </Box>
        </Container>

        {/* Device */}
        <Box
          css={`
            position: relative;
          `}
        >
          <Waves />

          <Container>
            <Image
              src={device2x}
              my={5}
              mx="auto"
              css={`
                display: block;
                max-width: 320px;
                width: 100%;
                vertical-align: middle;
              `}
            />
          </Container>
        </Box>

        {/* Cards */}
        <Flex>
          {integrations.map((integration, index) => (
            <Integration key={index} {...integration} />
          ))}
        </Flex>

        {/* App Store */}
        <Container>
          <Flex justifyContent="center" my={5}>
            <Link href="https://testflight.apple.com/join/QXCgM6bu">
              <Image
                css={`
                  height: 56px;
                  vertical-align: middle;
                `}
                src={badge}
              />
            </Link>
          </Flex>
        </Container>
      </Box>

      <Box bg="white" py={4}>
        {/* Community */}
        <Container>
          <Box mb={[4, 5]}>
            <Heading textAlign="center" fontWeight={2} fontSize={3}>
              Join the <strong>Balance Community</strong>
            </Heading>

            <Flex justifyContent="center" my={3}>
              <Card
                p={1}
                width={1 / 3}
                borderRadius={6.4}
                border="1px solid #d6d6d6"
                bg="#fafbfc"
                boxShadow="0 2px 3px 0 rgba(241, 241, 241, 0.5)"
              >
                <Flex justifyContent="space-between">
                  <input placeholder="your@email.com" type="email" />
                  <Button variant="foam">Join Us</Button>
                </Flex>
              </Card>
            </Flex>

            <Subscribers />
          </Box>
        </Container>

        {/* Tweets */}
        <Container maxWidth={1136}>
          <Text fontSize={3} textAlign="center" as="p" mt={0} mb={4}>
            Follow{" "}
            <Link color="deepSkyBlue" href="">
              @balance_io
            </Link>{" "}
            on Twitter
          </Text>
          <Box>
            {tweets.map((tweet, index) => (
              <TwitterTweetEmbed
                key={index}
                options={{ height: 250 }}
                tweetId={tweet}
              />
            ))}
          </Box>
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

export default IndexPage;
