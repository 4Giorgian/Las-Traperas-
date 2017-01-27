import React, { PropTypes } from "react"

import styles from "./index.css"

const Contenido = ({nombre, texto}) => (
  <div className={styles.content}>
    <h2>{nombre}</h2>
    <p>{texto}</p>
    <p>{texto}</p>
  </div>
)

Contenido.propTypes = {
  nombre: PropTypes.string,
  texto: PropTypes.string.isRequired
}

Contenido.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Contenido
