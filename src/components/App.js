import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/NavBar";
import Home from "../views/Home";
import About from "../views/About";
import Projects from "../views/Projects";
import PageNotFound from "../views/PageNotFound";
import Footer from "./Footer";

function App() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
