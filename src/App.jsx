import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import About from './pages/About/About'
import Players from "./pages/Players/Players";
import Personnel from "./pages/Personnel/Personnel";
import Tournaments from "./pages/Tournaments/Tournaments";
import Market from "./pages/Market/Market";
import AcademiesAndClubs from "./pages/AcademiesAndClubs/AcademiesAndClubs";

function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academies&clubs" element={<AcademiesAndClubs />} />
        <Route path="/players" element={<Players />} />
        <Route path="/personnel" element={<Personnel />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/market" element={<Market />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
