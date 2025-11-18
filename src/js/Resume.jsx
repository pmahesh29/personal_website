import React from 'react';
import '../CSS/Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      {/* Download Button */}
      <div className="resume-actions">
        <a 
          href="/Pranav_Mahesh_Resume.pdf" 
          download 
          className="download-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download PDF
        </a>
      </div>

      {/* Resume Content */}
      <div className="resume-container">
        {/* Header */}
        <header className="resume-header">
          <h1>Pranav Mahesh</h1>
          <div className="contact-info">
            <span>Little Rock, Arkansas</span>
            <span>•</span>
            <a href="mailto:pranavmiyengar@gmail.com">pranavmiyengar@gmail.com</a>
            <span>•</span>
            <a href="https://github.com/pmahesh29" target="_blank" rel="noopener noreferrer">
              github.com/pmahesh29
            </a>
            <span>•</span>
            <a href="https://pranav-mahesh.net" target="_blank" rel="noopener noreferrer">
              pranav-mahesh.net
            </a>
            <span>•</span>
            <a href="https://linkedin.com/in/pmahesh29" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/pmahesh29
            </a>
          </div>
        </header>

        {/* Education */}
        <section className="resume-section">
          <h2 className="section-title">EDUCATION</h2>
          <div className="section-content">
            <div className="education-item">
              <div className="item-header">
                <div>
                  <h3>University of Arkansas, Fayetteville</h3>
                  <p className="subtitle">Bachelor of Science in Computer Science | Cybersecurity Concentration </p>
                </div>
                <span className="date">August 2021 - May 2025</span>
              </div>
              <p className="detail">GPA: 3.50 | Dean's List</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2 className="section-title">SKILLS</h2>
          <div className="section-content">
            <div className="skills-list">
              <div className="skill-item">
                <strong>Programming & Databases:</strong>
                <span>Python, C++, PowerShell, MySQL</span>
              </div>
              <div className="skill-item">
                <strong>Security & Forensics Tools:</strong>
                <span>Wireshark, Zeek, Snort, CrowdStrike, ServiceNow, Metasploit, OWASP ZAP, Suricata</span>
              </div>
              <div className="skill-item">
                <strong>Operating Systems & Virtualization:</strong>
                <span>Kali Linux, Ubuntu, SEED Labs, VMware, pfSense</span>
              </div>
              <div className="skill-item">
                <strong>Cybersecurity Domains:</strong>
                <span>Incident Response (NIST), Threat Hunting, SIEM, IAM, Zero Trust</span>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="resume-section">
          <h2 className="section-title">WORK EXPERIENCE</h2>
          <div className="section-content">
            
            {/* Arvest - Current */}
            <div className="experience-item">
              <div className="item-header">
                <div>
                  <h3>Application Support Intern</h3>
                  <p className="company">Arvest Bank</p>
                </div>
                <span className="date">May 2025 - Present</span>
              </div>
              <ul className="bullet-list">
                <li>Led an intern team to develop a Splunk SIEM strategy for fraud detection, analyzing logs to identify attack patterns and coordinate incident response across teams, similar to vulnerability triage workflows.</li>
                <li>Managed SSL certificate lifecycle and compliance monitoring, ensuring timely patching and remediation of security vulnerabilities in production infrastructure.</li>
                <li>Developed automated Linux scripts for production systems, implementing security-focused configurations and monitoring solutions to detect anomalies and maintain system integrity.</li>
                <li>Created technical training materials on Python security practices for 100+ IT associates.</li>
              </ul>
            </div>

            {/* Tyson Foods */}
            <div className="experience-item">
              <div className="item-header">
                <div>
                  <h3>Data Security Intern</h3>
                  <p className="company">Tyson Foods</p>
                </div>
                <span className="date">May 2024 - August 2024</span>
              </div>
              <ul className="bullet-list">
                <li>Participated in vulnerability triage and incident response workflows alongside SOC analysts, analyzing security alerts to identify root causes and coordinate remediation strategies.</li>
                <li>Evaluated security configurations and risk exceptions in the CrowdStrike EDR platform, documenting security justifications and implementing controls to prevent data exfiltration.</li>
                <li>Audited enterprise security policy implementations using the CYERA platform, ensuring compliance with security standards and identifying configuration weaknesses.</li>
                <li>Developed Python automation for security data processing, reducing manual analysis time and improving the accuracy of threat assessments.</li>
              </ul>
            </div>

            {/* Arvest - 2023 */}
            <div className="experience-item">
              <div className="item-header">
                <div>
                  <h3>Software Development Intern</h3>
                  <p className="company">Arvest Bank</p>
                </div>
                <span className="date">May 2023 - December 2023</span>
              </div>
              <ul className="bullet-list">
                <li>Researched and presented Zero Trust security architecture recommendations to executive leadership, analyzing security controls and risk mitigation strategies.</li>
                <li>Developed web applications with security-first design principles, implementing authentication, authorization, and input validation controls to prevent common vulnerabilities.</li>
                <li>Built QA and issue-tracking tools for monitoring security vulnerabilities and tracking remediation efforts across development teams.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h2 className="section-title">PROJECTS</h2>
          <div className="section-content">
            
            {/* Home Lab */}
            <div className="project-item">
              <div className="item-header">
                <div>
                  <h3>Cyber Attack Simulation Home Lab</h3>
                </div>
                <span className="date">September 2025 - Present</span>
              </div>
              <ul className="bullet-list">
                <li>Built an isolated virtualized environment using VMware with Kali Linux, Metasploitable2, and pfSense for vulnerability research and detection engineering.</li>
                <li>Performed systematic vulnerability assessment, identifying and documenting 23+ vulnerable services across multiple attack surfaces.</li>
                <li>Developed custom Suricata IDS detection rules for attack pattern recognition, including SYN scans, backdoor connections, and exploit attempts.</li>
              </ul>
            </div>

            {/* Cyber Pattern Labs */}
            <div className="project-item">
              <div className="item-header">
                <div>
                  <h3>Cyber Pattern Labs</h3>
                </div>
                <span className="date">August 2024 - May 2025</span>
              </div>
              <ul className="bullet-list">
                <li>Led development on an open-source cybersecurity platform with a 6-person team, contributing 150+ commits via GitHub using collaborative workflows including pull requests, code reviews, and issue tracking.</li>
                <li>Built a React-based web application and integrated security lab infrastructure, implementing features for vulnerability training and hands-on security exercises.</li>
                <li>Developed lab scenarios covering OWASP Top 10 vulnerabilities, network security, cryptography, and system hardening using open-source tools (Metasploit, OWASP ZAP, Snort).</li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
