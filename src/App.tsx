import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Error from "./pages/Error";
import Projects from "./pages/Projects";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/experience" element={<Experience />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/*" element={<Error />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
