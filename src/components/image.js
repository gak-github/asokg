import { useStaticQuery, graphql } from 'gatsby';

const Images = () => {
    const data = useStaticQuery(graphql`
        query {
          profilePicture: file(relativePath: { eq: "ashok.png" }) {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          logoPic: file(relativePath: { eq: "ashok.png" }) {
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