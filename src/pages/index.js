import React from "react";
import Layout from "../components/layout";
import SEO from '../components/seo';
import Showcase from '../components/showcase';
import "../styles/style.scss";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Showcase />
    </Layout>
  );
}; 

export default IndexPage