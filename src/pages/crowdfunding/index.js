import React, { Component } from "react";
import styled from "styled-components";
import Page from "../../layouts/page";
import Section from "../../components/Section";
import Container from "../../components/new/Container";
import Flex from "../../components/new/Flex";
import Emoji from "../../components/new/Emoji";
import {
  PurpleDivider,
  PinkDivider,
  BlueDivider
} from "../../components/new/Divider";

const EmailInput = styled.input`
  all: unset;
  font-weight: 500;
  font-size: 24px;
  height: 40px;
  margin-top: 16px;
  margin-bottom: 16px;

  &::-webkit-input-placeholder,
  &::placeholder {
    color: rgba(120, 102, 255, 0.3);
  }
`;

const Button = styled.button`
  height: 48px;
  border-radius: 48px;
  padding: 16px 18px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  border: none;
  background-color: #000;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition-property: background-color, transform;
  transition-duration: 0.125s;
  transition-timing-function: ease-out;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08), 0 8px 16px 0 rgba(0, 0, 0, 0.1),
    inset 0px 1px 0 0 rgba(255, 255, 255, 0.2);

  &:focus,
  &:active {
    transform: translateY(1px);
  }
`;

const SubmitButton = styled(Button)`
  background-color: #d166ff;
  &:hover {
    background-color: #bf78ff;
  }
  &:focus,
  &:active {
    background-color: #d557df;
  }
`;

import { mailchimpMemberCount } from "../../utils/api";

class CrowdfundingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOtherCountries: false
    };
  }

  render() {
    return (
      <Page
        title="Crowdfunding"
        siteTitle={this.props.data.site.siteMetadata.title}
      >
        <Container maxWidth={600}>
          <Flex>
            <div style={{ padding: "200px 0" }}>
              <h1>Invest in Balance</h1>
              <p>
                In October, we will be raising $3–4m of capital to fund the next
                stage of Balance. Pre-register your interest here.
              </p>
              <form action="">
                <BlueDivider />

                <div>
                  <p>Which country are you a resident in?</p>
                  <fieldset>
                    <legend>
                      The platforms we have picked support{" "}
                      <a href="">94 countries</a>.
                    </legend>
                    <Flex justifyContent="space-around">
                      <div>
                        <label>
                          <Emoji symbol="🇪🇺" />
                          Europe
                          <input
                            type="radio"
                            value="eu"
                            name="countries"
                            onClick={() =>
                              this.setState({ showOtherCountries: false })
                            }
                            defaultChecked
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          <Emoji symbol="🇺🇸" />
                          United States
                          <input
                            type="radio"
                            value="us"
                            name="countries"
                            onClick={() =>
                              this.setState({ showOtherCountries: false })
                            }
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          <Emoji symbol="🌍" />
                          Other Countries
                          <input type="radio" value="other" name="countries" />
                        </label>
                      </div>
                    </Flex>
                  </fieldset>
                </div>

                <PurpleDivider />

                <div>
                  <p>How much would you like to invest?</p>
                  <fieldset>
                    <legend>We will do our best to include everyone.</legend>
                    <Flex justifyContent="space-around">
                      <div>
                        <label>
                          $10-1,000
                          <input
                            type="radio"
                            value="10_1000"
                            name="investment"
                            defaultChecked
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          $1,000+
                          <input type="radio" value="1000" name="investment" />
                        </label>
                      </div>
                      <div>
                        <label>
                          $10,000+
                          <input type="radio" value="10000" name="investment" />
                        </label>
                      </div>
                      <div>
                        <label>
                          $100,000+
                          <input
                            type="radio"
                            value="100000"
                            name="investment"
                          />
                        </label>
                      </div>
                    </Flex>
                  </fieldset>
                </div>

                <div>
                  <EmailInput
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Type your email"
                  />
                  <PinkDivider />
                  <p>10,000 are on the list</p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <SubmitButton>Submit</SubmitButton>
                  <p style={{ fontSize: 14, color: "#d166ff", opacity: 0.4 }}>
                    Seedrs, UK Ltd. is a third party service and does not have
                    liability for the investment.
                  </p>
                </div>
              </form>
            </div>
          </Flex>
        </Container>
      </Page>
    );
  }
}

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
