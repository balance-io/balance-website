import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import trianglesIOS from '../assets/triangles-ios.svg';
import trianglesIOSMobile from '../assets/triangles-ios-mobile.svg';
import balanceIOSPreview from '../assets/balance-ios.png';
import balanceIOSIcon from '../assets/balance-ios-icon.png';
import { colors, responsive } from '../styles';

const SBackgroundImage = styled.div`
  position: absolute;
  top: 240px;
  right: -200px;
  width: 400px;
  height: 300px;
  background: url(${trianglesIOS}) no-repeat;
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    display: none;
  }
  @media screen and (${responsive.sm.max}) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: url(${trianglesIOSMobile}) no-repeat;
  }
`;

const SSectionWrapper = styled.div`
  width: 100%;
  height: 780px;
  padding: 0 34px;
  @media screen and (${responsive.sm.min}) {
    display: flex;
    align-items: center;
  }
  @media screen and (${responsive.sm.max}) {
    height: auto;
  }
`;

const STitle = styled.h1`
  position: relative;
  display: inline-block;
  font-size: 1.625em;
  font-weight: 700;
  letter-spacing: -0.2px;
  margin-bottom: 8px;
`;

const SInfo = styled.div`
  max-width: 276px;
  margin-bottom: 9px;
  @media screen and (${responsive.sm.max}) {
    margin: 82px 0 590px 0;
  }
  & p {
    font-size: 1.125em;
    color: rgba(${colors.white}, 0.8);
    line-height: 1.5em;
    margin-bottom: 36px;
    @media screen and (${responsive.sm.max}) {
      font-size: 1.1875em;
      line-height: 1.475em;
    }
  }
  & ul {
    color: rgba(${colors.grey}, 0.7);
    clear: both;
  }
`;

const SAppIcon = styled.div`
  margin: 25px 0;
  width: 80px;
  height: 80px;
  background: url(${balanceIOSIcon}) no-repeat;
  background-size: 100% 100%;
`;

const SAppPreview = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  left: 150px;
  margin: 0 auto;
  width: 619px;
  height: 842px;
  z-index: -1;
  background: url(${balanceIOSPreview}) no-repeat;
  background-size: 100%;
  @media screen and (${responsive.md.max}) {
    right: auto;
    left: 250px;
  }
  @media screen and (${responsive.sm.max}) {
    top: auto;
    right: -160px;
    bottom: -196px;
    left: auto;
    background-size: 88% 88%;
  }
`;

const BalanceiOS = () => (
  <Section
    id="balance-open"
    overflow={false}
    minHeight={780}
    color={colors.softerGrey}
    background={<SBackgroundImage />}
  >
    <SSectionWrapper>
      <SAppPreview />
      <SInfo>
        <SAppIcon />
        <STitle>Balance iOS</STitle>
        <p>All of your traditional and digital currencies in one place. Coming late 2017.</p>
      </SInfo>
    </SSectionWrapper>
  </Section>
);

export default BalanceiOS;
