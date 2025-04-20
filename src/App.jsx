import { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import LogInModal from "./components/LogIn/LogInModal";
import { Toaster } from 'react-hot-toast';
import SignUpModal from "./components/SignUp/SignUpModal";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    Aos.init();
  });

  // Check login state
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const logInModalValue = useSelector((state) => state.logInModal.value);
  const signUpModalValue = useSelector((state) => state.signUpModal.value);

  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {isLoggedIn ? (<Route path="/dashboard/*" element={<Dashboard />} />) : null}
          <Route path="/about" element={<About />} />
          <Route path="/academies&clubs" element={<AcademiesAndClubs />} />
          <Route path="/players" element={<Players />} />
          <Route path="/personnel" element={<Personnel />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/market" element={<Market />} />

        </Routes>
        {logInModalValue ? <LogInModal /> : null}
        {signUpModalValue ? <SignUpModal /> : null}
      </BrowserRouter>

    </>
  )
}

export default App
