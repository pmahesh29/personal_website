import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import FloatingWidgets from './FloatingWidgets';
import '../CSS/App.css';
// Import icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const App = () => (
  <Router>
    <header>
      <div className="container">
        <nav> 
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>Projects</NavLink></li>
            <li><NavLink to="/education" className={({ isActive }) => (isActive ? "active-link" : "")}>Skills</NavLink></li>
            <li>
              <a 
                href="/Pranav_Mahesh_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="resume-view-link"
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
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    
    {/* Floating Widgets - contact, resume download, and scroll buttons */}
    <FloatingWidgets />
    
    <footer>
      <div className="container">
        <p> Pranav Mahesh's Portfolio</p>
      </div>
    </footer>
  </Router>
);

export default App;