import React, { Component } from "react";
import styled from "styled-components";
import Page from "../../layouts/page";
import Section from "../../components/Section";
import Container from "../../components/new/Container";
import Flex from "../../components/new/Flex";
import Emoji from "../../components/new/Emoji";

import { includedCountries, excludedCountries } from "../../data/crowdfunding";

import crowdFundingImage from "../../assets/crowfunding-logo.png";
import crowdFundingImage2x from "../../assets/crowfunding-logo@2x.png";

import { mailchimpMemberCount } from "../../utils/api";

const Countries = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Country = styled.div`
  line-height: 24px;
  font-size: 18px;
  white-space: nowrap;
  margin-bottom: 16px;
`;

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
        <Container>
          <Flex>
            <div>
              <h1>Crowdfunding</h1>
              <p>
                We will be raising $3–4m of capital to fund the next stage of
                Balance in October. Pre-register your interest here. This is not
                a token sale or ICO.
              </p>
              <form action="">
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
                        <input
                          type="radio"
                          value="other"
                          onClick={() =>
                            this.setState({ showOtherCountries: true })
                          }
                          name="countries"
                        />
                      </label>
                    </div>
                  </Flex>
                </fieldset>
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
                        <input type="radio" value="100000" name="investment" />
                      </label>
                    </div>
                  </Flex>
                </fieldset>
                <div>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="your@email.com"
                    />
                  </label>
                  <button type="submit">Register</button>
                </div>
              </form>
              <p>10,000 are on the list</p>
              <p>
                Seedrs, UK Ltd. is a third party service and does not have
                liability for the investment.
              </p>
            </div>
            <div>
              <img
                src={crowdFundingImage}
                srcSet={`${crowdFundingImage2x} 2x`}
                alt="Crowdfunding investors masked behind the Balance logo"
              />
              {this.state.showOtherCountries ? (
                <div>
                  <h4>Included countries</h4>
                  <p>
                    If you live in one of these countries outside of the EU and
                    US, you can invest in our crowdfunding round.
                  </p>
                  <Countries>
                    {includedCountries.map(country => (
                      <Country>
                        <Emoji symbol={country.flag} />
                        {country.name}
                      </Country>
                    ))}
                  </Countries>

                  <h4>Excluded countries</h4>
                  <p>
                    We are really sorry that we cannot unacreddited investors
                    from countries not included in the list above. In
                    particular, we know we have lots of support from:
                  </p>
                  <Countries>
                    {excludedCountries.map(country => (
                      <Country>
                        <Emoji symbol={country.flag} />
                        {country.name}
                      </Country>
                    ))}
                  </Countries>
                </div>
              ) : null}
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
