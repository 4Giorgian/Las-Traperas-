import React, { PropTypes } from "react"

import styles from"./index.css"

const Container = (props) => (
  <div className={styles.Container}>
  <div className={styles.page}>
    { props.children }
  </div>
  </div>
  
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
