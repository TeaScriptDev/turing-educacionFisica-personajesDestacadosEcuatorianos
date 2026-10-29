import './ImagenSelection.css';

function ImagenSelection({ personaje, className }) {
  return (
    <div className={`imagen-selection ${className}`}>
      <h2>{personaje.nombres}</h2>
      <h2>{personaje.apellidos}</h2>
      <img src={personaje.imagen.portada} alt={personaje.nombres} />
    </div>
  );
}

export default ImagenSelection;