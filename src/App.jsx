import { Route, Routes } from "react-router-dom"
import Deportista from "./pages/Deportista"
import './App.css'
import Home from "./pages/Home"
import { autores } from "./data/autores"
import Autor from "./components/Autor"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deportista/:id" element={<Deportista />} />
      </Routes>
      <footer>
        {autores.map(autor => (
          <Autor autor={autor} />
        ))}
      </footer>
    </>
  )
}

export default App
