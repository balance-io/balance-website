import React, { Component } from "react";
import styled from "styled-components";
import Page from "../../layouts/page";
import Section from "../../components/Section";

import Container from "../../components/new/Container";

const CrowdfundingPage = ({ data }) => (
  <Page title="Crowdfunding" siteTitle={data.site.siteMetadata.title}>
    <Container>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        alias laudantium, repellendus at soluta, blanditiis voluptates id atque
        autem, necessitatibus non fugit commodi, suscipit qui! Odio consequatur
        minus reiciendis provident!
      </p>
    </Container>
    <Section>
      <h1>Crowdfunding</h1>
    </Section>
  </Page>
);

export default CrowdfundingPage;

export const query = graphql`
  query CrowdfundingQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
