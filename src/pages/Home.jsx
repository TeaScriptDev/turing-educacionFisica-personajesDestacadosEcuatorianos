import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ImagenSelection from "../components/ImagenSelection";
import { personajes } from "../data/personajes";
import './Home.css';
import Autor from '../components/Autor';
import { autores } from '../data/autores';

function Home() {
  const cantidadPersonajes = personajes.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [offsetCenter, setOffsetCenter] = useState(0);

  const itemWidth = 240;

  // Calculamos para que el elemento activo quede exactamente a la mitad de la pantalla
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setOffsetCenter((containerWidth / 2) - (itemWidth / 2));
    }
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cantidadPersonajes);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cantidadPersonajes) % cantidadPersonajes);
  };

  function reproducirSonido(urlSound) {
    const sonido = new Audio(urlSound);
    sonido.play().catch(() => { });
  }
  return (
    <>
      <h1>Los Deportistas más Destacados del Ecuador</h1>
      <div className="home-container" ref={containerRef}>
        {/* Botón Izquierda flotante */}
        <button className="carousel-btn btn-prev" onClick={() => {
          handlePrev();
          reproducirSonido("src/assets/sound-move-menu.wav");
        }}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Carrusel al 100% que fluye libremente */}
        <div className="carousel-window-full">
          <motion.div
            className="seleccion"
            animate={{ x: offsetCenter - (currentIndex * itemWidth) }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
          >
            {personajes.map((personaje, index) => {
              const isSelected = index === currentIndex;
              return (
                <ImagenSelection
                  key={personaje.id || index}
                  personaje={personaje}
                  className={isSelected ? "activo" : ""}
                />
              );
            })}
          </motion.div>
        </div>

        {/* Botón Derecha flotante */}
        <button className="carousel-btn btn-next" onClick={() => {
          handleNext();
          reproducirSonido("src/assets/sound-move-menu.wav");
        }}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <footer>
        {autores.map(autor => (
          <Autor autor={autor} />
        ))}
      </footer>
    </>
  );
}

export default Home;