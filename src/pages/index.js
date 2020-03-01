import React from "react";
import Layout from "../components/layout";
import InLogo from '../images/linked-in-96.png';

const IndexPage = () => {
  return (
    <Layout>
      <a href="https://www.linkedin.com/in/asokumargurusamy/" target="_blank" rel="noopener noreferrer" ><img src={InLogo} alt="linkedIn"/></a>
      <h2>
        This website is under development using React and Sass, hosted on Netlify
      </h2>
    </Layout>
  );
}; 

export default IndexPage