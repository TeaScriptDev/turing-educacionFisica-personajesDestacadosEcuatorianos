import { useParams } from "react-router-dom"
import { personajes } from "../data/personajes";

function Deportista() {
    const { id } = useParams();
    const personaje = personajes.find(deportista => deportista.id == id);

    return (
        <>
            {personaje.nombres}
        </>
    )
}

export default Deportista
