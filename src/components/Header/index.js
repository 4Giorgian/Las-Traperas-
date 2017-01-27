import React, { PropTypes } from "react"
// import { Link } from "phenomic"
// import Svg from "react-svg-inline"
//
// import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
// import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import styles from  "./index.css"

import Boton from '../Boton'

// import styles from "./index.css"

const Header = () => (
  <header>
      <div className={styles.logo}>
        <h1><a href="/" id="logoLink">My First Website</a></h1>
      </div>
      <div className={styles.nav}>
        <ul>
          <Boton paginaDestino="Home" />
          <Boton paginaDestino="About" />
          <Boton paginaDestino="Contact" />
        </ul>
      </div>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
