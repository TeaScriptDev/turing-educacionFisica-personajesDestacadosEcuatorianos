import ImagenSelection from "../components/ImagenSelection"
import { personajes } from "../data/personajes"

function Home() {
  return (
    <>
      <div className="seleccion">
        {personajes.map(personaje => (
          <ImagenSelection personaje={personaje} />
        ))}
      </div>
    </>
  )
}

export default Home