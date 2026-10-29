import { Route, Routes } from "react-router-dom"
import Deportista from "./pages/Deportista"
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/deportista/:id" element={<Deportista />} />
      </Routes>
    </>
  )
}

export default App
