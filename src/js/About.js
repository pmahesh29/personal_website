import React from 'react';
import myPhoto from '../Assets/pranav_photo.jpg';
import '../CSS/About.css';

const About = () => (
  <section className="about">
    <div className="container">
      <div className="about-content">
        <div className="hero-section">
          <img src={myPhoto} alt="Pranav Mahesh" className="hero-photo" />
          <div className="hero-text">
            <h2 className="hero-name">Pranav Mahesh</h2>
            <p className="hero-subtitle">Application Support Intern @ Arvest Bank | Aspiring Security Analyst</p>
          </div>
        </div>
        
        <div className="about-divider"></div>
        
        <div className="about-sections">
          <h3 className="section-header">About Me</h3>
          <p>
            I'm a cybersecurity professional passionate about protecting systems and preventing fraud. I specialize in security operations, 
            automation, and data protection. What excites me most is the balance between attacking and defending systems; it's like solving 
            a puzzle that's constantly changing and evolving.
          </p>
          
          <h3 className="section-header">Education</h3>
          <p>
            <strong>University of Arkansas</strong> — B.S. in Computer Science, Cybersecurity Concentration (May 2025)<br/>
            GPA: 3.50 · Dean's List: May 2025
          </p>
          
          <h3 className="section-header">My Journey</h3>
          <p>
            My fascination with technology started when I was a kid, fixing tech devices and setting up security policies just for fun. 
            That curiosity grew into a love for ethical hacking and building secure systems. During college, I discovered how much I enjoyed 
            hands-on problem solving through labs like Netlab, where I worked with multiple virtual machines to create custom network rules.
          </p>
          
          <p>
            I learn best by asking questions, experimenting, and recreating scenarios to test my understanding. That mindset led me to host 
            CTF challenges as a <strong>RazorHack 2024 Gamemaster</strong> and build home labs simulating attack and defense environments 
            using <strong>Kali Linux, pfSense,</strong> and <strong>Metasploitable</strong>.
          </p>
          
          <h3 className="section-header">What Drives Me</h3>
          <p>
            The thing I love most about cybersecurity is how it never stops evolving. Every vulnerability is a chance to learn something new, 
            and every defense I build makes me think like an attacker. That back and forth keeps me hooked and always improving.
          </p>
          
          <h3 className="section-header">Beyond the Terminal</h3>
          <p>
            Outside of tech, I'm a people person. I love gaming on my PC, staying active, rewatching comfort shows like
            <em> Suits</em>, <em> Brooklyn Nine-Nine</em>, and <em> How I Met Your Mother</em>, and catching up with old friends or family.
          </p>
          
          <p>
            I've always believed that learning and helping others go hand in hand, and I bring that same energy to every project I work on. 
            This site showcases my work, projects, and experiences, so feel free to explore and reach out if you'd like to connect!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;