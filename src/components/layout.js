import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import ShowcaseContent from './showcase-content';
import "../styles/style.scss";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <header className="showcase" siteTitle={data.site.siteMetadata.title} >
        <div className="container">
          <Navbar />
          <ShowcaseContent />
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout
