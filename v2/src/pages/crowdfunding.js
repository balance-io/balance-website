import React, { useState } from "react";
import { Box, Heading, Text, Flex, Button as RebassButton } from "rebass";
import styled, { css } from "styled-components";
import { useFormState } from "react-use-form-state";
import addToMailchimp from "../../plugins/gatsby-plugin-mailchimp";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/Layout";
import Container from "../components/Container";
import SEO from "../components/SEO";
import { SharesIcon, SubmitIcon } from "../components/Icons";
import { MailchimpResponse } from "../components/Community";

import Header from "../components/Header";
import Footer from "../components/Footer";

const gradientBorders = {
  opaqueWhiteBlack: "to right, rgba(255, 255, 255, 0.08), #000",
  blackPurpleBlack: "to right, #000, #1E1372, #000",
  cyanBlueBlack: "to right, #66BBFF, #2A45F6, #000",
  purplePurpleBlack: "to right, #6687FF, #522AF5, #000",
  pinkPurpleBlack: "to right, #7866FF, #962AF5, #000"
};

const GradientBorder = styled(Flex).attrs({
  bg: "#000"
})`
  position: relative;
  background-clip: padding-box;
  border: solid ${props => props.border}px transparent;
  border-radius: 99999px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    margin: -${props => props.border}px;
    border-radius: inherit;

    background: ${props => `linear-gradient(${props.gradient})`};
  }
`;

GradientBorder.defaultProps = {
  border: 3,
  gradient: gradientBorders.opaqueWhiteBlack
};

const Divider = styled(Box).attrs({
  as: "hr",
  m: 0
})`
  height: 3px;
  border: none;
  border-radius: 99999px;
  background: ${props => `linear-gradient(${props.gradient})`};
`;

Divider.defaultProps = {
  gradient: gradientBorders.cyanBlueBlack
};

const Legend = styled(Text).attrs({
  as: "legend",
  mb: 24,
  fontWeight: "medium",
  lineHeight: 1.5
})``;

const Fieldset = styled(Box).attrs({
  as: "fieldset",
  m: 0,
  p: 0
})`
  border: none;
`;

const Label = styled(GradientBorder).attrs({
  as: "label",
  px: 3,
  py: 2,
  border: 3,
  gradient: props =>
    props.active ? props.activeGradient : gradientBorders.opaqueWhiteBlack,
  color: props => (props.active ? "#fff" : "#A9B0B8")
})`
  font-weight: 500;
  font-size: 18px;
  white-space: nowrap;
`;

Label.defaultProps = {
  activeGradient: gradientBorders.cyanBlueBlack
};

const Input = styled.input`
  /* Radio */
  &[type="radio"],
  &[type="checkbox"] {
    appearance: none;
    visibility: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  &[type="email"] {
    background: none;
    font-size: 28px;
    font-family: Graphik, sans-serif;
    font-weight: 600;
    margin: 0;
    width: 100%;
    border: none;
    padding: 0.5rem 0 1rem;
    line-height: 3rem;
    color: #fff;

    &::placeholder {
      color: #7866ff;
      opacity: 0.32;
    }
  }
`;

const FieldsetHeading = styled(Heading).attrs({
  fontFamily: "graphik",
  fontWeight: "semibold",
  fontSize: 28,
  mt: 16,
  mb: 10
})``;

const Button = styled(RebassButton).attrs({
  type: "submit",
  border: "none",
  bg: "#D166FF",
  borderRadius: 99999,
  fontSize: 18,
  px: 20,
  py: 16
})`
  display: inline-flex;
  align-items: center;
  transition-property: background-color;
  transition-duration: 0.125s;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: #d675ff;
  }
`;

// const Emoji = props => (
//   <Text
//     as="span"
//     role="img"
//     aria-label={props.label ? props.label : ""}
//     aria-hidden={props.label ? "false" : "true"}
//   >
//     {props.symbol}
//   </Text>
// );

const containerWidth = 564;

const RadioGroup = styled(Flex).attrs({
  justifyContent: "space-between"
})`
  @media only screen and (max-width: ${containerWidth}px) {
    flex-direction: column;

    & > ${Box} {
      margin-bottom: 1rem;
    }
  }
`;

const Crowdfunding = () => (
  <Layout dark>
    <SEO title="Crowdfunding" />

    <Container>
      <Header light />
    </Container>

    <Container as="main" maxWidth={containerWidth} mb={80}>
      <Flex flexDirection="column" alignItems="center" mb={64} mt={80}>
        <Balance />
        <Heading
          as="h1"
          textAlign="center"
          fontFamily="graphik"
          fontWeight="semibold"
          mt={32}
          fontSize={[40, 48]}
          mb={16}
        >
          Invest in Balance
        </Heading>
        <Text
          as="p"
          textAlign="center"
          fontSize={[18, 20]}
          lineHeight={1.5}
          mb={32}
          fontFamily="graphik"
          color="#A9B0B8"
        >
          In March, Balance will be raising additional capital through equity
          crowdfunding to fund the next stages of development. Please register
          your interest below.
        </Text>

        <GradientBorder
          py={1}
          px={20}
          gradient={gradientBorders.blackPurpleBlack}
          border={1}
          alignItems="center"
        >
          <SharesIcon
            css={css`
              @media only screen and (max-width: ${containerWidth}px) {
                display: none;
              }
            `}
          />
          <Text
            ml={2}
            mt={11}
            mb={14}
            fontFamily="graphik"
            fontWeight="medium"
            textAlign="center"
            color="#A9B0B8"
            fontSize={16}
            lineHeight={[1.2, 1]}
            letterSpacing={0.2}
          >
            Investors will receive shares of the company.
          </Text>
        </GradientBorder>
      </Flex>

      <CrowdfundingForm />

      <Text
        color="#D166FF"
        mx="auto"
        textAlign="center"
        lineHeight={1.5}
        fontSize={12}
        css={{ opacity: 0.4, maxWidth: 250 }}
      >
        Republic.co operated by OpenDeal Inc. is a third party service and does
        not have liability for the investment.
      </Text>
    </Container>

    <Container mb={4}>
      <Footer light />
    </Container>
  </Layout>
);

const crowdfundingEndpoint = `https://balance.us11.list-manage.com/subscribe/post?u=a3f87e208a9f9896949b4f336&amp;id=25406fd6f1`;

const CrowdfundingForm = () => {
  const [formState, { email, radio }] = useFormState({
    LOCATION: "United States",
    INVESTAMT: "$10 - $1,000"
  });

  const [result, setResult] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await addToMailchimp(
      formState.values.EMAIL,
      {
        LOCATION: formState.values.LOCATION,
        INVESTAMT: formState.values.INVESTAMT
      },
      crowdfundingEndpoint
    );

    await setResult(response);

    await setSubmitted(true);
  };

  if (submitted)
    return (
      <Text
        textAlign="center"
        color="white"
        fontSize={[18, 20]}
        fontFamily="graphik"
        fontWeight="medium"
        css={{ maxWidth: 420 }}
        mx="auto"
        mb={64}
        lineHeight={1.5}
      >
        <MailchimpResponse
          dark
          dangerouslySetInnerHTML={{ __html: result.msg }}
        />
      </Text>
    );

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Divider />
      <FieldsetHeading>Which country are you a resident in?</FieldsetHeading>
      <Fieldset mb={64}>
        <Legend color="#66BBFF">
          Our equity crowdfunding round will be hosted on Republic.co
        </Legend>
        <RadioGroup>
          <Box>
            <Label active={radio("LOCATION", "United States").checked}>
              {/* <Emoji symbol="🇺🇸" /> */}
              United States
              <Input {...radio("LOCATION", "United States")} />
            </Label>
          </Box>
          <Box>
            <Label active={radio("LOCATION", "Europe").checked}>
              {/* <Emoji symbol="🇪🇺" /> */}
              Europe
              <Input {...radio("LOCATION", "Europe")} />
            </Label>
          </Box>
          <Box>
            <Label active={radio("LOCATION", "Other").checked}>
              {/* <Emoji symbol="🌍" /> */}
              Other Countries
              <Input {...radio("LOCATION", "Other")} />
            </Label>
          </Box>
        </RadioGroup>
      </Fieldset>

      <Divider gradient={gradientBorders.purplePurpleBlack} />
      <FieldsetHeading>How much would you like to invest?</FieldsetHeading>
      <Fieldset mb={64}>
        <Legend color="#6687FF">
          We will do our best to include everyone.
        </Legend>
        <RadioGroup>
          <Box>
            <Label
              active={radio("INVESTAMT", "$10 - $1,000").checked}
              activeGradient={gradientBorders.purplePurpleBlack}
            >
              $10 - $1,000
              <Input {...radio("INVESTAMT", "$10 - $1,000")} />
            </Label>
          </Box>
          <Box>
            <Label
              active={radio("INVESTAMT", "$1,000").checked}
              activeGradient={gradientBorders.purplePurpleBlack}
            >
              $1,000+
              <Input {...radio("INVESTAMT", "$1,000")} />
            </Label>
          </Box>
          <Box>
            <Label
              active={radio("INVESTAMT", "$10,000").checked}
              activeGradient={gradientBorders.purplePurpleBlack}
            >
              $10,000+
              <Input {...radio("INVESTAMT", "$10,000")} />
            </Label>
          </Box>
          <Box>
            <Label
              active={radio("INVESTAMT", "$100,000").checked}
              activeGradient={gradientBorders.purplePurpleBlack}
            >
              $100,000+
              <Input {...radio("INVESTAMT", "$100,000")} />
            </Label>
          </Box>
        </RadioGroup>
      </Fieldset>

      <Fieldset>
        <Input {...email("EMAIL")} required placeholder="Type your email" />
        <Divider gradient={gradientBorders.pinkPurpleBlack} mb={10} />

        {/* <Text fontWeight="medium" lineHeight={1.5} color="#7866FF">
          {Number(2525).toLocaleString()} people are on the list.
        </Text> */}

        <Flex mt={48} mb={16} justifyContent="center">
          <Button>
            <Text
              fontFamily="graphik"
              letterSpacing={0.6}
              fontWeight="medium"
              mr={2}
              mt={"-3px"}
              css={{ textTransform: "uppercase" }}
            >
              Submit
            </Text>
            <SubmitIcon />
          </Button>
        </Flex>
      </Fieldset>
    </Box>
  );
};

const Balance = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "balance-logo.png" }) {
        childImageSharp {
          fixed(width: 128) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return <Image fixed={image.file.childImageSharp.fixed} />;
};

export default Crowdfunding;
