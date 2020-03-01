import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import ShowcaseContent from './showcase-content';
import "../styles/style.scss";

const Layout = ({ children }) => {
  return (
    <>
      <header className="showcase">
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
