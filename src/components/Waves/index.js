import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wave = ({ color, offset }) => {
  const image = useStaticQuery(graphql`
    query {
      yellow: file(relativePath: { eq: "yellow.png" }) {
        childImageSharp {
          fixed(height: 174) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      blue: file(relativePath: { eq: "blue.png" }) {
        childImageSharp {
          fixed(height: 177) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      green: file(relativePath: { eq: "green.png" }) {
        childImageSharp {
          fixed(height: 196) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      purple: file(relativePath: { eq: "purple.png" }) {
        childImageSharp {
          fixed(height: 186) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      pink: file(relativePath: { eq: "pink.png" }) {
        childImageSharp {
          fixed(height: 191) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <WaveImage offset={offset} fixed={image[color].childImageSharp.fixed} />
  );
};

const WaveImage = styled(Image).attrs({
  style: {
    position: "absolute",
    display: "inline"
  }
})`
  position: absolute;
  top: ${props => (props.offset ? `${props.offset}px` : 0)};
  transform: translateX(-50%);
  left: 50%;
  max-width: unset;
  display: inline;
`;

Wave.propTypes = {
  color: PropTypes.oneOf(["pink", "blue", "green", "purple", "yellow"])
    .isRequired,
  offset: PropTypes.number
};

const WavesWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  transform: translateY(-50%);
  z-index: -1;
  height: 280px;
  margin-top: -32px;
  top: 50%;
`;

const Waves = () => (
  <WavesWrapper>
    <Wave color="yellow" />
    <Wave color="blue" offset={73} />
    <Wave color="green" offset={33} />
    <Wave color="purple" offset={81} />
    <Wave color="pink" offset={86} />
  </WavesWrapper>
);

export default Waves;
