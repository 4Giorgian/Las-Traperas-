import React, { PropTypes } from "react"
import { Link } from "phenomic"
// import Svg from "react-svg-inline"
//
// import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
// import gitHubSvg from "../icons/iconmonstr-github-1.svg"

// import styles from "./index.css"

const Header = (props, { metadata: { pkg } }) => (
  <header>
      <div id="logo">
        <h1><a href="/" id="logoLink">My First Website</a></h1>
      </div>
      <div id="nav">
        <ul>
          <li><a href="#/home.html">Home</a></li>
          <li><a href="#/about.html">About</a></li>
          <li><a href="#/contact.html">Contact</a></li>
        </ul>
      </div>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
