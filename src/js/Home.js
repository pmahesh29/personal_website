import React from 'react';
import myPhoto from '../Assets/pranav_photo.jpg';
import '../CSS/About.css';

const About = () => (
  <section className="about">
    <div className="container">
      <div className="about-content">
        <h2>Pranav Mahesh
          <p className="subtitle">Application Support Intern @ Arvest Bank | Aspiring Security Analyst</p>
        </h2>
        <div className="about-text">
          <img src={myPhoto} alt="Pranav Mahesh" className="about-photo" />
          <p>
            Hey! I'm Pranav Mahesh, a cybersecurity professional passionate about protecting systems and preventing fraud. 
            I specialize in security operations, automation, and data protection. This site showcases my work and experience 
            in the field, so feel free to explore my projects and reach out if you would like to connect!
          </p>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="work-experience">
        <h3>Work Experience</h3>
        
        <div className="experience-item">
          <div className="experience-header">
            <div className="company">Arvest Bank</div>
            <h4>Application Support Analyst Intern</h4>
            <div className="date">May 2024 - Present</div>
          </div>
          <ul>
            <li>Led an intern team to develop a Splunk SIEM fraud detection strategy aimed at preventing multi-million dollar fraud losses, presenting comprehensive recommendations on log aggregation, compliance monitoring, and incident response procedures to executive leadership.</li>
            <li>Migrated 20+ enterprise SSL certificates to the Keyfactor platform, improving certificate lifecycle management and ensuring compliance with internal security policies and industry standards.</li>
            <li>Developed and implemented automated Linux scripts for production server maintenance and monitoring, enhancing system security posture by ensuring consistent application of security patches and service availability.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <div className="company">Tyson Foods</div>
            <h4>Data Security Intern</h4>
            <div className="date">May 2024 - August 2024</div>
          </div>
          <ul>
            <li>Managed endpoint security controls by evaluating and granting USB device exceptions through CrowdStrike EDR platform, analyzing business justifications to prevent data exfiltration while maintaining operational efficiency.</li>
            <li>Shadowed Security Operations Center (SOC) analysts to understand threat detection, incident response workflows, and defensive strategies against both internal and external security threats.</li>
            <li>Collaborated with CYERA platform to audit and validate implementation of enterprise data security policies, ensuring compliance with corporate security standards.</li>
            <li>Won Best Presentation Pitch Award in intern RPA hackathon by developing a Python automation solution that improved security of data handling processes and reduced exposure window from 2 hours to 1 second.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <div className="company">Arvest Bank</div>
            <h4>Software Development Intern</h4>
            <div className="date">May 2023 - December 2023</div>
          </div>
          <ul>
            <li>Researched and presented Zero Trust security architecture to Executive Board, analyzing implementation strategies, security benefits, and risk reduction opportunities for enterprise adoption.</li>
            <li>Developed secure web applications and microservices with security-first design principles, implementing proper authentication, authorization, and data protection controls.</li>
            <li>Built front-end interfaces for Quality Assurance and issue-tracking applications used by security and development teams to monitor vulnerabilities and track remediation efforts.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;