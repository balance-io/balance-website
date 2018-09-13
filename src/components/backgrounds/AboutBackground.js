import React from "react";
import styled from "styled-components";
import blackTriangles from "../../assets/black-triangles.png";
import yellowTriangles from "../../assets/yellow-triangles.png";
import purpleTriangles from "../../assets/purple-triangles.png";
import { responsive } from "../../styles";

const SBlackBackground = styled.div`
  position: absolute;
  top: 0px;
  right: -28px;
  width: 590px;
  height: 590px;
  background-image: url(${blackTriangles});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SPurpleBackground = styled.div`
  position: absolute;
  top: 0;
  left: -75px;
  width: 300px;
  height: 225px;
  background-image: url(${purpleTriangles});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (${responsive.sm.max}) {
    opacity: 0.3;
  }
`;

const SYellowBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: -75px;
  width: 300px;
  height: 225px;
  background-image: url(${yellowTriangles});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SBackgroundWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1280px;
  position: fixed;
`;

const AboutBackground = () => (
  <SBackgroundWrapper>
    <SBlackBackground />
    <SPurpleBackground />
    <SYellowBackground />
  </SBackgroundWrapper>
);

export default AboutBackground;
