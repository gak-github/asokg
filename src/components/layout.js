import React from "react"
import { Link } from "gatsby"
import "../styles/layout.css";
import SideNav from './sidenav';

const Layout = ({ children }) => {
  return (
    <>
      <nav>
          <Link to="/" className="link"><h3>Asokumar Gurusamy</h3></Link>
          <ul className="nav__links">
            <li><Link className= "link" to="/">Home</Link></li>
            <li><Link className="link" to="/">Skills</Link></li>
            <li><Link className="link" to="/">Experience</Link></li>
            <li><Link className="link" to="/">Blog</Link></li>
          </ul>
      </nav>
      <SideNav />
      <div className="container">
        <main>{children}</main>
        <hr/>
        <footer id="main-footer">
          <p>Copyright &copy;2020 by Asokumar Gurusamy. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
};

export default Layout