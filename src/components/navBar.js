import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav} from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">Home</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/running" className="link-no-style">
              <Nav.Link as="span" eventKey="running">
                <Navbar.Brand as="span">Running</Navbar.Brand>
              </Nav.Link>
            </Link>
            <Link to="/resume" className="link-no-style">
              <Nav.Link as="span" eventKey="resume">
                <Navbar.Brand as="span">Resume</Navbar.Brand>
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
