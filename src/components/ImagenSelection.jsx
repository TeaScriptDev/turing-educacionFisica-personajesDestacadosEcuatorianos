import { Link } from 'react-router-dom';
import './ImagenSelection.css';

function ImagenSelection({ personaje, className }) {
  return (
    <Link to={`/deportista/${personaje.id}`} className={`imagen-selection ${className}`}>
      <span className="select-tag">SELECT</span>
      <h2>{personaje.nombres}</h2>
      <h2>{personaje.apellidos}</h2>
      <img src={personaje.imagen.portada} alt={personaje.nombres} />
    </ Link>
  );
}

export default ImagenSelection;
