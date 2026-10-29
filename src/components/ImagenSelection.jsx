import './ImagenSelection.css'

function ImagenSelection({ personaje }) {
  return (
    <div className="imagen-selection">
      <h2>{personaje.nombres}</h2>
      <h2>{personaje.apellidos}</h2>
      <img src={personaje.imagen.portada} />
    </div>
  )
}

export default ImagenSelection