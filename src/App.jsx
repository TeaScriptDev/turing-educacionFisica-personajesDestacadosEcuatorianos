import { Route, Routes } from "react-router-dom"
import Deportista from "./pages/Deportista"

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
