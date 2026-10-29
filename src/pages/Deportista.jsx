import { useParams } from "react-router-dom"
import { personajes } from "../data/personajes";

function Deportista() {
    const { id } = useParams();
    const personaje = personajes.find(deportista => deportista.id == id);

    return (
        <>
            <div className="presentacion">
                <div className="portada">
                    <img src={personaje.img} />
                </div>
                <div className="detalles">
                    <h1>{personaje.nombres} {personaje.apellidos}</h1>
                    <span className="deporte">{personaje.deporte}</span>
                    <p className="biografia">{personaje.biografia}</p>
                </div>
                <div className=""></div>
            </div>
            <div className="logros"></div>
            <div className="datos-personales"></div>
            <div className="stacks"></div>
        </>
    )
}

export default Deportista
