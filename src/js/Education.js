import React from 'react';
import '../CSS/Education.css';

const Education = () => {
  const certifications = [
    {
      title: 'CompTIA Security+ (SY0-601) Cert Prep: Threats, Attacks, and Vulnerabilities',
      provider: 'LinkedIn Learning',
      date: 'June 2024',
      skills: 'Threat & Vulnerability Management'
    },
    {
      title: 'Learning Cryptography and Network Security',
      provider: 'LinkedIn Learning',
      date: 'May 2024',
      skills: 'Cryptography • Network Security'
    },
    {
      title: 'Python Essential Training',
      provider: 'LinkedIn Learning',
      date: 'May 2024',
      skills: 'Python Programming'
    },
    {
      title: 'Play It Safe: Manage Security Risks',
      provider: 'Coursera',
      date: 'September 2023',
      skills: 'Incident Response Playbooks • Security Audit'
    },
    {
      title: 'Foundations of Cybersecurity',
      provider: 'Coursera',
      date: 'June 2023',
      skills: 'Cybersecurity Ethics • CSF'
    }
  ];

  const cybersecurityCourses = [
    {
      title: 'Advanced Network Threat Analysis',
      description: 'In-depth study of network security threats and countermeasures including reconnaissance, scanning, DoS attacks, and intrusion detection systems.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2040013'
    },
    {
      title: 'Cryptography',
      description: 'Introduction to modern cryptography including stream ciphers, block ciphers, authentication, key exchange, and digital signatures.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2044303'
    },
    {
      title: 'Information Security',
      description: 'Principles, mechanisms, and policies governing confidentiality, integrity, and availability of digital information.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2048503'
    },
    {
      title: 'Cloud Computing and Security',
      description: 'Covers cloud architecture, development tools, and managing security risks in modern cloud environments.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2047803'
    }
  ];

  const computerScienceCourses = [
    {
      title: 'Programming Foundations I',
      description: 'Intro to programming and software development process including problem specification, design, implementation, testing, and documentation.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2020004'
    },
    {
      title: 'Programming Foundations II',
      description: 'Focus on fundamental data structures and algorithms including lists, stacks, queues, trees, graphs, and sorting.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2020104'
    },
    {
      title: 'Programming Paradigms',
      description: 'Covers object-oriented, event-driven, and concurrent programming paradigms.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2031903'
    },
    {
      title: 'Software Engineering',
      description: 'Emphasizes modern techniques, teamwork, and software development tools for large-scale design and engineering.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2035103'
    },
    {
      title: 'Digital Design',
      description: 'Covers binary systems, Boolean algebra, logic circuits, and basics of computer architecture.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2021104'
    },
    {
      title: 'Computer Organization',
      description: 'Processor design, memory hierarchy, and instruction set architectures.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2022104'
    },
    {
      title: 'Operating Systems',
      description: 'Covers process management, storage management, file systems, and distributed systems.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2036103'
    },
    {
      title: 'Formal Languages',
      description: 'Study of automata theory, grammars, regular expressions, and Turing machines.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2043203'
    },
    {
      title: 'Algorithms',
      description: 'Advanced algorithm design including divide-and-conquer, dynamic programming, and NP-completeness.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2041303'
    },
    {
      title: 'Computer Networks',
      description: 'Concepts and principles of modern computer networks, including protocols and architectures.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2047503'
    }
  ];

  return (
    <section className="education">
      <div className="education-container">

        {/* Certifications Section */}
        <div className="certifications-section">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-provider">{cert.provider}</p>
                <p className="cert-date">{cert.date}</p>
                <p className="cert-skills"><strong>Skills:</strong> {cert.skills}</p>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Section */}
        <div className="in-progress-section">
          <h2 className="section-title">In Progress</h2>
          <div className="in-progress-card">
            <h4 className="cert-title">CompTIA Security+ (SY0-701)</h4>
            <p className="cert-provider">Expected 2026</p>
          </div>
        </div>

        {/* Coursework Section */}
        <div className="coursework-section">
          <h2 className="section-title">Relevant Coursework</h2>
          
          {/* Cybersecurity Courses */}
          <h3 className="course-category">Cybersecurity</h3>
          <div className="courses-grid">
            {cybersecurityCourses.map((course, index) => (
              <div key={index} className="course-card">
                <a className="course-title" href={course.link} target="_blank" rel="noopener noreferrer">
                  {course.title}
                </a>
                <p className="course-description">{course.description}</p>
              </div>
            ))}
          </div>
          
          {/* Computer Science Courses */}
          <h3 className="course-category">Computer Science</h3>
          <div className="courses-grid">
            {computerScienceCourses.map((course, index) => (
              <div key={index} className="course-card">
                <a className="course-title" href={course.link} target="_blank" rel="noopener noreferrer">
                  {course.title}
                </a>
                <p className="course-description">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
