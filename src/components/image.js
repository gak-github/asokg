import { useStaticQuery, graphql } from 'gatsby';

const Images = () => {
    const data = useStaticQuery(graphql`
        query {
          profilePicture: file(relativePath: { eq: "Ashok.jpeg" }) {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          logoPic: file(relativePath: { eq: "Ashok.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    `);
    return { 
      fixed: data.profilePicture.childImageSharp.fixed,
      fluid: data.logoPic.childImageSharp.fluid
    };
};

export default Images;