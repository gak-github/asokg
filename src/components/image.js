import { useStaticQuery, graphql } from 'gatsby';

const Images = () => {
    const data = useStaticQuery(graphql`
        query {
          navbarBgVer: file(relativePath: { eq: "Ashok.jpeg" }) {
            childImageSharp {
              fluid(maxHeight: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          navbarBgHor: file(relativePath: { eq: "Ashok.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    `);
    return { 
        navbarBgVer: data.navbarBgVer.childImageSharp.fluid,
        navbarBgHor: data.navbarBgHor.childImageSharp.fluid
    };
};

export default Images;