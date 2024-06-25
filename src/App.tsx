import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Error from "./pages/Error"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/portfolio" element={<Home/>}/>
        <Route path="/portfolio/experience" element={<Experience/>}/>
        <Route path="/portfolio/*" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App