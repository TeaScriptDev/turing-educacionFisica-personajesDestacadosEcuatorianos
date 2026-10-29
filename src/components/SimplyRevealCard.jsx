import './SimplyRevealCard.css'

function SimplyRevealCard({ urlImagen, texto }) {
    return (
        <div className="cardReveal">
            <img src={urlImagen} />
            <div className="textContent">
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default SimplyRevealCard
