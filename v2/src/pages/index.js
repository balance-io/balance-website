import React from "react";
import { Box } from "rebass";
import { TwitterTweetEmbed } from "react-twitter-embed";

import Layout from "../components/Layout";
import Container from "../components/Container";
import SEO from "../components/SEO";

import tweets from "../data/tweets.json";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box bg="#F8F8FA">
      <Container>
        {/* App Store */}
        download on app store
      </Container>
    </Box>
    <Box bg="white">
      <Container>{/* Community */}
      email subscription
      {/* Tweets */}
      follow balance on twitter
      {tweets.map(tweet => (
        <TwitterTweetEmbed tweetId={tweet} />
      ))}</Container>
    </Box>
  </Layout>
);

export default IndexPage;
