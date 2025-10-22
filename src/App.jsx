import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/404";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Navbar />
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Landing />} />

          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          {/* Fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
