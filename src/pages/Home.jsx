import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ImagenSelection from "../components/ImagenSelection";
import { personajes } from "../data/personajes";
import './Home.css';

function Home() {
  const cantidadPersonajes = personajes.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [offsetCenter, setOffsetCenter] = useState(0);
  const navigate = useNavigate();

  const itemWidth = 240;

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setOffsetCenter((containerWidth / 2) - (itemWidth / 2));
    }
  }, []);

  function reproducirSonido(urlSound) {
    const sonido = new Audio(urlSound);
    sonido.play().catch(() => { });
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cantidadPersonajes);
    reproducirSonido("src/assets/sound-move-menu.wav");
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cantidadPersonajes) % cantidadPersonajes);
    reproducirSonido("src/assets/sound-move-menu.wav");
  };

  useEffect(() => {
    const manejarTeclado = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          const personajeActual = personajes[currentIndex];

          if (personajeActual) {
            navigate(`/deportista/${personajeActual.id}`);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', manejarTeclado);
    return () => window.removeEventListener('keydown', manejarTeclado);
  }, [currentIndex, cantidadPersonajes, navigate]);

  return (
    <>
      <h1>Los Deportistas más Destacados del Ecuador</h1>
      <div className="home-container" ref={containerRef}>
        {/* Iluminación ambiental fija en el centro del stage */}
        <div className="carousel-glow" />

        {/* Botón Izquierda flotante */}
        <button className="carousel-btn btn-prev" onClick={() => handlePrev()}>
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
        <button className="carousel-btn btn-next" onClick={() => handleNext()}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Indicador HUD de posición (rombos) */}
      <div className="hud-dots">
        {personajes.map((personaje, index) => (
          <span
            key={personaje.id || index}
            className={`hud-dot ${index === currentIndex ? 'activo' : ''}`}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
