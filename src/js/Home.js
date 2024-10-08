import React from 'react';
import myPhoto from '../Assets/pranav_photo.jpeg';
import '../CSS/About.css';

const About = () => (
  <section className="about">
    <div className="container">
      <div className="about-content">
        <h2> Pranav Mahesh</h2>
        <div className="about-text">
        <img src={myPhoto} alt="Pranav Mahesh" className="about-photo" />
          <p>Hello, I'm Pranav Mahesh, a fourth-year Computer Science major at the University of Arkansas with a focus on Cybersecurity. <br></br>My experience includes internships in data security and software development, where I've developed practical skills in various programming languages and tools. I'm also actively involved in fostering a community of like-minded individuals as the Vice-President of CyberHogs. </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
