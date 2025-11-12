import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './Home';
import Classes from './Classes';
import Projects from './Projects';
import Contact from './Contact';
import FloatingContactButton from './FloatingContactButton';
import '../CSS/App.css';
// Import icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const App = () => (
  <Router>
    <header>
      <div className="container">
        <nav> 
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>Projects</NavLink></li>
            <li><NavLink to="/classes" className={({ isActive }) => (isActive ? "active-link" : "")}>Courses</NavLink></li>
            <li>
              <a 
                href="\Pranav_Mahesh_Resume.pdf" 
                download="Pranav_Mahesh_Resume.pdf"
                className="resume-download-link"
              >
                Resume
              </a>
            </li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>Contact</NavLink></li>
            <li className="social-icons">
              <a href="https://github.com/pmahesh29" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/pmahesh29" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    
    {/* Floating Contact Button - appears on all pages */}
    <FloatingContactButton />
    
    <footer>
      <div className="container">
        <p> Pranav Mahesh's Portfolio</p>
      </div>
    </footer>
  </Router>
);

export default App;