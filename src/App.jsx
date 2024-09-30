import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Navbar from "./components/Navbar";
/* import Home from "./components/Home"; */
import SkylineAvenue from "./pages/SkylineAvenue";
import MoryaEnclave from "./pages/MoryaEnclave";
/* import XYZProjects from "./pages/XYZProjects"; */
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Home2 } from "./pages/Home2";
// importing Projects details componenets
/* import ProjectDetail from "./pages/ProjectDetail"; */

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home2 />} />
        {/* <Route exact path="/" element={<Home2 />} /> */}
        <Route path="/skyline-avenue" element={<SkylineAvenue />} />
        <Route path="/morya-enclave" element={<MoryaEnclave />} />
        {/* <Route path="/xyz-projects" element={<XYZProjects />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/projects/:projectId" element={<ProjectDetail />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
