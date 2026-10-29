import { Route, Routes } from "react-router-dom"
import Deportista from "./pages/Deportista"
import './App.css'
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deportista/:id" element={<Deportista />} />
      </Routes>
    </>
  )
}

export default App
