import React from "react";
import { Box } from "rebass";
import { TwitterTweetEmbed } from "react-twitter-embed";

import Layout from "../components/Layout";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Wave from "../components/Wave";

import tweets from "../data/tweets.json";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <main>
      <Box>
        <Wave color="pink" />
        <Wave color="blue" />
        <Wave color="purple" />
        <Wave color="green" />
        <Wave color="yellow" />
        <Container>
          {/* App Store */}
          download on app store
        </Container>
      </Box>
      <Box bg="white">
        <Container>
          {/* Community */}
          email subscription
          {/* Tweets */}
          follow balance on twitter
          {tweets.map(tweet => (
            <TwitterTweetEmbed tweetId={tweet} />
          ))}
        </Container>
      </Box>
    </main>
  </Layout>
);

export default IndexPage;
