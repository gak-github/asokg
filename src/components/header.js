import React from 'react'
import Navbar from './navbar';
import { useStaticQuery, graphql } from "gatsby";

export default function Header() {
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
        <header siteTitle={data.site.siteMetadata.title} >
            <Navbar />
        </header>
    );
};
