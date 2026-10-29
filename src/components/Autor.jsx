import './Autor.css'

function Autor({ autor }) {
  return (
    <div className='autor'>
      <span className="autor-tag">DEV</span>
      <div className="autor-avatar">
        <img src={autor.perfil} alt={autor.nombre} />
      </div>
      <p className="nombre-autor">{autor.nombre}</p>
    </div>
  )
}

export default Autor