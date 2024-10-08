import React from 'react';
import '../CSS/resume.css'; // Import the CSS file


const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-content">
      <h1>Pranav Mahesh</h1>
      <div class="contact-info">
  Fayetteville, Arkansas | Email: <a class="contact-link" href="mailto:pranavmiyengar@gmail.com" >pranavmiyengar@gmail.com</a> |
  Phone: <a class="contact-link" href="tel:+15015512766">(501)-551-2766</a> | 
  Github: <a class="contact-link" href="https://github.com/pmahesh29">pmahesh29</a> | 
  LinkedIn: <a class="contact-link" href="https://www.linkedin.com/in/pmahesh29">pmahesh29</a>
</div>

      <h3>Education</h3>
        <h4>University of Arkansas <span className="date-right">Expected Graduation: May 2025</span>
        </h4>

        <p>
        B.S. in Computer Science | Concentration: CyberSecurity 
        </p>
        <p>
        Minor: Mathematics | GPA: 3.40
        </p>

        <h3>Skills Summary</h3>
        <ul>
          <li>● Languages: Python, C++, React, Java, JavaScript, TypeScript, HTML, Bootstrap CSS, Tailwind CSS </li>
          <li>● Software / Platforms:  Kali Linux, Zeek, ServiceNow, Cyera, CrowdStrike, Netskope</li>
        </ul>

        <h3>Work Experience</h3>
        <h4>
          Data Security Intern | Tyson Foods 
          <span className="date-right">Summer 2024 - Present</span>
        </h4>
        <ul>
          <li>● Assisted Tyson Foods’ Data Security team with the implementation of the USB Block Policy to prevent data leaks.</li>
          <li>● Analyzed over 1600 tickets and granted exceptions based on business justification, adhering to company policies.</li>
          <li>● Audited and managed USB device permissions using CrowdStrike, performing detailed analysis and reporting exceptions to management.          </li>
          <li>● Won the <span className = "resume-highlight">Best Presentation Pitch Award</span> in an intern RPA hackathon for creating a bot in Python that automates daily data intake tasks for Customer Service team- reducing the work from 2 hours to 1 second.</li>
          <li>● Collaborated with Cyera (a data discovery and classification platform) to set up and validate data security policies.          </li>
        </ul>

        <h4>
          Software Development Intern | Arvest Bank 
          <span className="date-right">Summer 2023 - December 2023</span>
        </h4>
        <ul>
          <li>● Led a team of interns in researching and presenting the Zero Trust security model to the Executive Board, showcasing strategies for improving network security.          </li>
          <li>● Developed and converted HTML pages to JavaScript for a web application, enhancing its functionality.          </li>
          <li>● Designed and styled issue-tracking applications using CSS and React.js, improving project management workflows.          </li>
        </ul>

        <h3>Personal Projects</h3>
        <h4>
        Penetration Testing Platform (Ongoing) | University of Arkansas, Fayetteville 
          <span className="date-right"> Fall 2024 - Spring 2025          </span>
        </h4>
        <ul>
          <li>● Developing a virtual platform for simulating ethical hacking skills by integrating cybersecurity tools and techniques.</li>
          <li>● Building structured lab scenarios to teach vulnerability discovery, exploit development, and defense techniques.          </li>
        </ul>

        <h4>
        Virtual Network Security Testbed | University of Arkansas, Fayetteville 
          <span className="date-right"> Spring 2024          </span>
        </h4>
        <ul>
          <li>● Developed security testbed using VMware, integrating Ubuntu and Kali Linux with Snort and Zeek NIDS tools.</li>
          <li>● Configured network interfaces to monitor all traffic, enabling packet analysis and real-time intrusion detection.          </li>
          <li>● Created custom detection alerts for ICMP and FTP traffic, and a username overflow exploit targeting admin access.          </li>
        </ul>
        
        <h4>
          Photon Laser Tag Game | University of Arkansas, Fayetteville 
          <span className="date-right">Spring 2024</span>
        </h4>
        <ul>
          <li>● Led a software engineering team to recreate a laser tag system using Python’s Tkinter, Pygubu and Pygame libraries.</li>
          <li>● Implemented communication with the Photon hardware using the UDP transport layer protocol.</li>
          <li>● Organized the team to work in an Agile format through weekly standup updates and Sprint deadlines.</li>
        </ul>

        <h4>
          JOLT Cyber Challenge | University of Arkansas, Little Rock 
          <span className="date-right">Fall 2023</span>
        </h4>
        <ul>
          <li>● Attained Fifth place in a 'Capture the Flag' style competition, among 35 competing teams of four.</li>
          <li>● Used Kali Linux to connect to the local port, and collaborated with my team while completing challenges.</li>
          <li>● Challenges focused on: reverse engineering, encoding, cryptography, kerberoast, & web vulnerabilities.</li>
        </ul>

        <h4>
          Open-World Game | University of Arkansas, Fayetteville 
          <span className="date-right">Fall 2023</span>
        </h4>
        <ul>
          <li>● Developed an open-world game in Python along with Java, JavaScript, HTML and Typescript for efficiency in object-oriented concepts such as polymorphism, encapsulation and information-hiding.</li>
          <li>● Employed Typescript, Javascript and HTML to develop client-side programming, and Python for server-side, illustrating competence in creating dynamic web pages to run multiple servers.</li>
        </ul>

        <h3>Leadership Experiences</h3>
        <h4>
          Secretary(Spring) - Vice-President(Current) | CyberHogs 
          <span className="date-right">Spring 2024 - Present</span>
        </h4>
        <ul>
          <li>● Organized and created challenges alongside other officers for our Capture The Flag competitions.</li>
          <li>● Coordinated meetings with other officers, and communicated with college faculty to promote connections between club members and college resources.</li>
        </ul>

        <h3>Languages</h3>
        <p>● Fluent in: English, Hindi, Tamil, and Marathi.</p>

        <h3>Awards</h3>
        <p>● John E. and Alta P. Larrison Scholarship | College of Engineering 
          <span className="date-right">Fall 2022</span>
        </p>


      </div>
    </div>
  );
}

export default Resume
