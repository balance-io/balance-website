import { useStaticQuery, graphql } from "gatsby";

const useIntegrationImages = () => {
  const images = useStaticQuery(graphql`
    query {
      maker: file(relativePath: { eq: "integrations/maker.png" }) {
        childImageSharp {
          fixed(height: 46) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      makerBlur: file(relativePath: { eq: "integrations/maker-blur.png" }) {
        childImageSharp {
          original {
            src
          }
        }
      }

      compound: file(relativePath: { eq: "integrations/compound.png" }) {
        childImageSharp {
          fixed(height: 46) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      compoundBlur: file(
        relativePath: { eq: "integrations/compound-blur.png" }
      ) {
        childImageSharp {
          original {
            src
          }
        }
      }

      dharma: file(relativePath: { eq: "integrations/dharma.png" }) {
        childImageSharp {
          fixed(height: 46) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      dharmaBlur: file(relativePath: { eq: "integrations/dharma-blur.png" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  `);

  return images;
};

export default useIntegrationImages;
