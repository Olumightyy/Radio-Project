import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotificationBanner from "./components/NotificationBanner";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import ShowDetails from "./pages/ShowDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      <div className={`flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        {showBanner && (
          <NotificationBanner onClose={() => setShowBanner(false)} />
        )}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/shows/:id" element={<ShowDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
