import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './Home';
import Classes from './Classes';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
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
            <li><NavLink to="/resume" className={({ isActive }) => (isActive ? "active-link" : "")}>Resume</NavLink></li>
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
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
    <footer>
      <div className="container">
        <p>&copy; Professional Portfolio</p>
      </div>
    </footer>
  </Router>
);

export default App;
