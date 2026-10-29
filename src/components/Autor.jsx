import './Autor.css'

function Autor({ autor }) {
  return (
    <div className='autor'>
      <img src={autor.perfil} alt={autor.nombre} />
      <p className="nombre-autor">{autor.nombre}</p>
    </div>
  )
}

export default Autor