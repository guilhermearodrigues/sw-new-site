import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <nav className="bg-black text-white p-4 flex gap-4 justify-center">
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
}