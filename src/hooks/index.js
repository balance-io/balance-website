import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            longTitle
            author
            supportUrl
            managerUrl
            appStoreUrl
            tweets
            integrations {
              name
              description
              brand
              link
            }
            urls {
              url
              label
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export { useSiteMetadata };
