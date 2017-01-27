import React, { PropTypes } from "react"
// import { Link } from "phenomic"
// import Svg from "react-svg-inline"
//
// import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
// import gitHubSvg from "../icons/iconmonstr-github-1.svg"

// import styles from "./index.css"

const Boton = ({paginaDestino}) => (
  <li><a href={"#/"+paginaDestino.toLowerCase()+".html"}>{paginaDestino}</a></li>
)

Boton.propTypes = {
  paginaDestino: PropTypes.string.isRequired,
}

Boton.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Boton
