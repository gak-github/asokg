import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import styles from "./layout.module.css"
import "./layout.css"
import Img from "gatsby-image"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarPosition: this.getPosition(),
    }
  }

  getPosition = () => {
    // This conditional is to avoid errors during build, check
    // https://www.gatsbyjs.org/docs/debugging-html-builds/
    if (typeof window !== "undefined") {
      return window.innerWidth < 580 ? "horizontal" : "vertical"
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateSize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize)
  }
  updateSize = () => {
    let position = this.getPosition()
    if (position !== this.state.navbarPosition) {
      // Changing the state will cause a re-render of the page, do in this case
      // we are only changing the state when the navbar changes position
      this.setState({ navbarPosition: position })
    }
  }

  render() {
    const navbarPosition = this.state.navbarPosition
    return (
      <StaticQuery
        query={graphql`
          {
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
        `}
        render={data => (
          <div id={styles.layout}>
            <nav id={styles.navbar}>
              <div id={styles.navbarLinkContainer}>
                <Link className={styles.navLink} to={"/"}>
                  <Img className="rounded-circle"
                    fluid={data.navbarBgVer.childImageSharp.fluid}
                  />
                </Link>
                <Link className={styles.navLink} to={"/"}>
                  HOME
                </Link>
                <Link className={styles.navLink} to={"/about/"}>
                  ABOUT
                </Link>
                <Link className={styles.navLink} to={"/contact/"}>
                  CONTACT
                </Link>
              </div>
            </nav>
            <main id={styles.main}>
              <header id={styles.mainHeader}>
                <h1>{this.props.headerText}</h1>
              </header>
              <div id={styles.content}>{this.props.children}</div>
            </main>
          </div>
        )}
      />
    )
  }
}

export default Layout