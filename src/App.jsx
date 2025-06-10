import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import DVMProject from "./pages/projects/DVMProject";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rutas de proyectos */}
          <Route path="/projects/DVMProject" element={<DVMProject />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
