import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/NavBar";
import Home from "../views/Home";
import About from "../views/About";
import Projects from "../views/Projects";
import Blog from "../views/Blogs";
import PageNotFound from "../views/PageNotFound";
import BlogPost from "../views/BlogPost";
import Resume from "../views/Resume";
// import Footer from "./Footer";

function App() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogpost/:query" element={<BlogPost />} />
            <Route path="/about/resume" element={<Resume />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
      </Router>
   );
}

export default App;
