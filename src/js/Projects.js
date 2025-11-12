import React from 'react';
import '../CSS/Projects.css'; 
import photon from '../Assets/Photon.jpg';
import fitagotchi from '../Assets/Fitagotchi.jpg';
import cyber from '../Assets/Cyber.jpg';
import labImage from '../Assets/Lab.jpg'; // ADD YOUR LAB IMAGE HERE

const projects = [
  {
    title: 'Cyber Attack Simulation Home Lab',
    description: 'Isolated virtualized environment with Kali Linux, Metasploitable2, and pfSense featuring Suricata IDS. Conducted reconnaissance, service enumeration, packet analysis, and developed custom detection rules for SOC practice.',
    image: labImage,
    link: 'https://github.com/pmahesh29/cyber-attack-simulation-lab'
  },
  {
    title: 'Cyber Pattern Labs',
    description: 'Educational penetration testing platform built with React that simulates real-world security scenarios for hands-on cybersecurity training and ethical hacking practice.',
    image: cyber,
    link: 'https://github.com/Capstone-Team-20/cyberpattern.github.io'
  },
  {
    title: 'Photon Laser Tag System',
    description: 'Full-stack laser tag game system with real-time UDP traffic simulation, player tracking, and scoring. Built with Python and Supabase for database management.',
    image: photon,
    link: 'https://github.com/team-15-csce3513/photon'
  },
    {
    title: 'Fitagotchi',
    description: 'Fitness motivation app combining workout tracking with virtual pet care. Built with React Native and Supabase to encourage consistent gym habits through gamification.',
    image: fitagotchi,
    link: 'https://github.com/They-See-Cats/Fitagotchi'
  }
];

const Projects = () => (
  <div className="Projects">
    <div className="projects">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} className="project-image" />
          </a>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;