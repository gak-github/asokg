import React from "react";
import Layout from "../components/layout";
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h2>
        This website is under development using React and Sass, hosted on Netlify
      </h2>
    </Layout>
  );
}; 

export default IndexPage