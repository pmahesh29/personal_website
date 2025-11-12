import React from 'react';
import '../CSS/Classes.css';

const Classes = () => {
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
      description: 'This is a Special Topics course which provides an in-depth study of network security threats and countermeasures. Topics include: network reconnaissance, network scanning, denial of service attacks, and intrusion detection systems.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2040013'
    },
    {
      title: 'Cryptography',
      description: 'This course provides a general introduction to modern cryptography. Topics include: stream ciphers, block ciphers, message authentication codes, public key encryption, key exchange, and signature schemes.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2044303'
    },
    {
      title: 'Information Security',
      description: 'This course covers principles, mechanisms, and policies governing confidentiality, integrity, and availability of digital information.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2048503'
    },
    {
      title: 'Cloud Computing and Security',
      description: 'Focused on the architecture of today\'s cloud computing, the technologies used within them, application development using contemporary cloud computing tools, and the security risks and management in the cloud.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2047803'
    }
  ];

  const computerScienceCourses = [
    {
      title: 'Programming Foundations I',
      description: 'Introductory programming course for students majoring in computer science or computer engineering. Software development process: problem specification, program design, implementation, testing and documentation.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2020004'
    },
    {
      title: 'Programming Foundations II',
      description: 'This course continues developing problem solving techniques by focusing on fundamental data structures and associated algorithms. Topics include: abstract data types, introduction to object-oriented programming, linked lists, stacks, queues, hash tables, binary trees, graphs, recursion, and searching and sorting algorithms.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2020104'
    },
    {
      title: 'Programming Paradigms',
      description: 'Programming in different paradigms with emphasis on object oriented programming and network programming. Survey of programming languages, event driven programming, and concurrency.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2031903'
    },
    {
      title: 'Software Engineering',
      description: 'A modern approach to the current techniques used in software design and development. This course emphasizes the use of modern software development tools, multi-module programming, and team design and engineering.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2035103'
    },
    {
      title: 'Digital Design',
      description: 'Introduction to digital logic and hardware design. Covers topics such as binary systems, Boolean algebra, combinational and sequential logic circuits, and computer architecture basics.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2021104'
    },
    {
      title: 'Computer Organization',
      description: 'Study of computer organization and architecture. Includes topics such as processor design, memory hierarchy, and instruction set architectures.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2022104'
    },
    {
      title: 'Operating Systems',
      description: 'An introduction to operating systems including topics in system structures, process management, storage management, files, distributed systems, and case studies.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2036103'
    },
    {
      title: 'Formal Languages',
      description: 'Study of formal languages, automata theory, and computability. Includes regular expressions, context-free grammars, and Turing machines.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2043203'
    },
    {
      title: 'Algorithms',
      description: 'Advanced study of algorithm design and analysis. Covers topics such as divide-and-conquer, dynamic programming, greedy algorithms, and NP-completeness.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2041303'
    },
    {
      title: 'Computer Networks',
      description: 'Introduction to underlying concepts and principles of modern computer networks, with emphasis on protocols, architectures, and implementation issues.',
      link: 'https://catalog.uark.edu/search/?P=CSCE%2047503'
    }
  ];

  return (
    <section className="Classes">
      <div className="resume-container">
        
        {/* Certifications Section */}
        <div className="certifications-section">
          <h2 className="section-title classes">Certifications</h2>
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
          <h2 className="section-title classes">In Progress</h2>
          <div className="in-progress-card">
            <h4 className="cert-title">CompTIA Security+ (SY0-701)</h4>
            <p className="cert-provider">Expected 2026</p>
          </div>
        </div>

        {/* Relevant Coursework Section */}
        <div className="coursework-section">
          <h2 className="section-title classes">Relevant Coursework</h2>
          
          {/* Cybersecurity Courses */}
          <h3>Cybersecurity:</h3>
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
          <h3>Computer Science:</h3>
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

export default Classes;