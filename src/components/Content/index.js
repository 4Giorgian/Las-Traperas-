import React from "react"
import Contenido from '../Contenido'
import styles from "./index.css"

const Content = () => (


<div id="container">
    <div className={styles.Content}>
      <Contenido nombre="Home" texto= "This is my first webpage! I was able to code all the HTML and CSS in order to make it. Watch out world of web design here I come!"/>
      <Contenido nombre="Home2" texto= "This is my first webpage! I was able to code all the HTML and CSS in order to make it. Watch out world of web design here I come!"/>
      <Contenido nombre="Home3" texto= "This is my first webpage! I was able to code all the HTML and CSS in order to make it. Watch out world of web design here I come!"/>
    </div>
  </div>
)

Content.propTypes = {
  // false: PropTypes.node,
}

export default Content
