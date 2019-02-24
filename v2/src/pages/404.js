import React from "react";
import { navigate } from "gatsby";
import { Heading, Text, Button, Flex } from "rebass";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Header from "../components/Header";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    {/* Header */}
    <Container>
      <Header />
    </Container>

    <Container pt={[4, 5, 6]}>
      <Heading
        as="h1"
        fontFamily="graphik"
        textAlign="center"
        fontSize={5}
        color="text"
        fontWeight="semibold"
      >
        This page doesn’t exist
      </Heading>
      <Text
        as="p"
        fontFamily="graphik"
        fontWeight="regular"
        lineHeight={1.4}
        textAlign="center"
        fontSize={4}
        my={3}
        color="textLighter"
      >
        You might have mistyped the address, or the page might have moved.
      </Text>
      <Flex justifyContent="center">
        <Button onClick={() => navigate("/")} variant="foam">
          Go back home
        </Button>
      </Flex>
    </Container>
  </Layout>
);

export default NotFoundPage;
