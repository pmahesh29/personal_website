import React from 'react';
import myPhoto from '../Assets/pranav_photo.JPG';
import '../CSS/About.css';

const About = () => (
  <section className="about">
    <div className="container">
      <div className="about-content">
        <h2> Pranav Mahesh
        <p className="subtitle">Application Support Intern @ Arvest Bank</p>
        </h2>
        <div className="about-text">
        <img src={myPhoto} alt="Pranav Mahesh" className="about-photo" />
          <p>
            Hey, I’m Pranav Mahesh. I am someone who’s always curious about how things work,
            whether it’s technology, people, or the world around me. I’m passionate about cybersecurity,
            tech exploration, and building things from the ground up but I’m just as driven by creativity,
            problem-solving, and personal growth.
            <br></br> <br></br>
            I am a computer science graduate with a concentration in Cybersecurity from the University of Arkansas.
            Experienced in virtual machines, programming, web development, and data security through academic 
            projects and hands-on internships. I also served as the Vice President of CyberHogs, the university’s 
            cybersecurity club, where I helped organize technical events and connect students with learning resources 
            in the field.
          </p>

          </div>
      </div>
    </div>
  </section>
);

export default About;
