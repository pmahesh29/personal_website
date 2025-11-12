import React, { useState } from 'react';
import VideoModal from './VideoModal';
import '../CSS/Projects.css'; 
import photon from '../Assets/Photon.jpg';
import cyber from '../Assets/Cyber.jpg';
import labImage from '../Assets/Lab.jpg';
import { FaGithub, FaPlay } from 'react-icons/fa';

const projects = [
  {
    title: 'Cyber Attack Simulation Home Lab',
    description: 'Isolated virtualized environment with Kali Linux, Metasploitable2, and pfSense featuring Suricata IDS. Conducted reconnaissance, service enumeration, packet analysis, and developed custom detection rules for SOC practice.',
    image: labImage,
    link: 'https://github.com/pmahesh29/cyber-attack-simulation-lab',
    demoVideoUrl: null // No video yet - button won't appear
  },
  {
    title: 'Cyber Pattern Labs',
    description: 'Educational penetration testing platform built with React that simulates real-world security scenarios for hands-on cybersecurity training and ethical hacking practice.',
    image: cyber,
    link: 'https://github.com/Capstone-Team-20/cyberpattern.github.io',
    demoVideoUrl: 'https://youtu.be/h8eZtfCMQfA'
  },
  {
    title: 'Photon Laser Tag System',
    description: 'Full-stack laser tag game system with real-time UDP traffic simulation, player tracking, and scoring. Built with Python and Supabase for database management.',
    image: photon,
    link: 'https://github.com/team-15-csce3513/photon',
    demoVideoUrl: 'https://youtu.be/TSsv-xLy5bM'
  }
];

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoTitle, setVideoTitle] = useState('');

  const handleViewDemo = (videoUrl, title) => {
    setSelectedVideo(videoUrl);
    setVideoTitle(title);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setVideoTitle('');
  };

  return (
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
              
              <div className="project-buttons">
                {project.demoVideoUrl && (
                <button 
                onClick={() => handleViewDemo(project.demoVideoUrl, project.title)}
                className="project-button demo-button"
                >
                <FaPlay /> View Demo
                </button>
                )
                }
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-button github-button"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal 
          videoUrl={selectedVideo} 
          onClose={handleCloseModal}
          title={`${videoTitle} - Demo`}
        />
      )}
    </div>
  );
};

export default Projects;