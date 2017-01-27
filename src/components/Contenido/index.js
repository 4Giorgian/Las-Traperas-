import React, { PropTypes } from "react"


const Contenido = ({nombre, texto}) => (
  <p>
    {nombre}
    {texto}
  </p>
)

Contenido.propTypes = {
  nombre: PropTypes.string,
  texto: PropTypes.string.isRequired
}

Contenido.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Contenido
