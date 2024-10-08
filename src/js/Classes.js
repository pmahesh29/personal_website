import React, { useState } from 'react';
import '../CSS/Classes.css'; // Import the CSS file

const Classes = () => {
  const [showCSClasses, setShowCSClasses] = useState(false);
  const [showCybersecurityClasses, setShowCybersecurityClasses] = useState(false);
  const [showMathClasses, setShowMathClasses] = useState(false);

  const toggleCSClasses = () => {
    setShowCSClasses(!showCSClasses);
  };

  const toggleCybersecurityClasses = () => {
    setShowCybersecurityClasses(!showCybersecurityClasses);
  };

  const toggleMathClasses = () => {
    setShowMathClasses(!showMathClasses);
  };

  return (
    <section className="Classes">     
      <div className="resume-container">

        <h3 className="classes">Computer Science:</h3>
        <button onClick={toggleCSClasses} className="dropdown-button">
          {showCSClasses ? 'Hide Classes' : 'Show Classes'}
        </button>
        {showCSClasses && (
          <ul>
            
              <div className="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2020004" target="_blank" rel="noopener noreferrer">
                Programming Foundations I
              </a>
              <span className="hover-text">
                Introductory programming course for students majoring in computer science or computer engineering. Software development process: problem specification, program design, implementation, testing and documentation.
              </span>
            </div><p></p>
                      
              <div class="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2020104" target="_blank" rel="noopener noreferrer">
              Programming Foundations II
              </a>
              <div class="hover-text">
              This course continues developing problem solving techniques by focusing on fundamental data structures and associated algorithms. Topics include: abstract data types, introduction to object-oriented programming, linked lists, stacks, queues, hash tables, binary trees, graphs, recursion, and searching and sorting algorithms.
              </div>
            </div><p></p>
            

              <div className="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2031903" target="_blank" rel="noopener noreferrer">
                Programming Paradigms
              </a>
              <span className="hover-text">
              Programming in different paradigms with emphasis on object oriented programming and network programming. Survey of programming languages, event driven programming, and concurrency.              </span>
            </div><p></p>

            <div className="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2035103" target="_blank" rel="noopener noreferrer">
                Software Engineering
              </a>
              <span className="hover-text">
              A modern approach to the current techniques used in software design and development. This course emphasizes the use of modern software development tools, multi-module programming, and team design and engineering.              </span>
            </div><p></p>

            <div className="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2021104" target="_blank" rel="noopener noreferrer">
                Digital Design
              </a>
              <span className="hover-text">
                Introduction to digital logic and hardware design. Covers topics such as binary systems, Boolean algebra, combinational and sequential logic circuits, and computer architecture basics.
              </span>
            </div><p></p>

            <div className="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2022104" target="_blank" rel="noopener noreferrer">
                Computer Organization
              </a>
              <span className="hover-text">
                Study of computer organization and architecture. Includes topics such as processor design, memory hierarchy, and instruction set architectures.
              </span>
            </div><p></p>

            <div className="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2036103" target="_blank" rel="noopener noreferrer">
                Operating Systems
              </a>
              <span className="hover-text">
              An introduction to operating systems including topics in system structures, process management, storage management, files, distributed systems, and case studies.              
              </span>
            </div><p></p>

            <div className="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2043203" target="_blank" rel="noopener noreferrer">
                Formal Languages
              </a>
              <span className="hover-text">
                Study of formal languages, automata theory, and computability. Includes regular expressions, context-free grammars, and Turing machines.
              </span>
            </div><p></p>

            <div className="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2041303" target="_blank" rel="noopener noreferrer">
                Algorithms
              </a>
              <span className="hover-text">
                Advanced study of algorithm design and analysis. Covers topics such as divide-and-conquer, dynamic programming, greedy algorithms, and NP-completeness.
              </span>
            </div><p></p>
            <div className="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2047503" target="_blank" rel="noopener noreferrer">
                Computer Networks
              </a>
              <span className="hover-text">
              Introduction to underlying concepts and principles of modern computer networks, with emphasis on protocols, architectures, and implementation issues.               </span>
            </div><p></p>
            </ul>
)}

        <h3>Cybersecurity:</h3>
        <button onClick={toggleCybersecurityClasses} className="dropdown-button">
          {showCybersecurityClasses ? 'Hide Classes' : 'Show Classes'}
        </button>
        {showCybersecurityClasses && (
          <ul>
            <div className="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2040013" target="_blank" rel="noopener noreferrer">
                Advanced Network Threat Analysis
              </a>
              <span className="hover-text">
              This is a Special Topics course which provides an in-depth study of network security threats and countermeasures. Topics include: network reconnaissance, network scanning, denial of service attacks, and intrusion detection systems.              </span>
            </div><p></p>


            <div className="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2044303" target="_blank" rel="noopener noreferrer">
                Cryptography
              </a>
              <span className="hover-text">
              This course provides a general introduction to modern cryptography. Topics include: stream ciphers, block ciphers, message authentication codes, public key encryption, key exchange, and signature schemes.               </span>
            </div><p></p>

            <div className="hover-container">
              <a className="custom-link" href="https://catalog.uark.edu/search/?P=CSCE%2047803" target="_blank" rel="noopener noreferrer">
                Cloud Computing and Security
              </a>
              <span className="hover-text">
              Focused on the architecture of today's cloud computing, the technologies used within them, application development using contemporary cloud computing tools, and the security risks and management in the cloud.              </span>
            </div><p></p>
          </ul>
        )}

        <h3>Mathematics:</h3>
        <button onClick={toggleMathClasses} className="dropdown-button">
          {showMathClasses ? 'Hide Classes' : 'Show Classes'}
        </button>
        {showMathClasses && (
          <ul>
            <div className="hover-container">
            <a className="custom-link" href="https://catalog.uark.edu/search/?P=MATH%2024004" target="_blank" rel="noopener noreferrer">
            Calculus I </a>
            <span className="hover-text">
            This course covers limits, continuity, derivatives, integrals, and applications of the derivative and integral.              </span>
          </div><p></p>

            <div className= "hover-container">
            <a className="custom-link" href="https://catalog.uark.edu/search/?P=MATH%2025004" target="_blank" rel="noopener noreferrer">
            Calculus II</a>
            <span className="hover-text">
            This course covers techniques of integration, applications of integration, infinite series, and Taylor series.              </span>
          </div><p></p>

          <div className="hover-container">
          <a className="custom-link" href="https://catalog.uark.edu/search/?P=MATH%2026103" target="_blank" rel="noopener noreferrer">
            Discrete Mathematics</a>
            <span className="hover-text">
            This course covers logic, sets, functions, relations, combinatorics, and graph theory.              </span>
          </div><p></p>

            <div className="hover-container">
            <a className="custom-link" href="https://catalog.uark.edu/search/?P=MATH%2030803" target="_blank" rel="noopener noreferrer">
            Linear Algebra</a>
            <span className="hover-text">
            This course covers systems of linear equations, matrices, determinants, vector spaces, linear transformations, eigenvalues, and eigenvectors.              </span>
          </div><p></p>

            <div className="hover-container">
            <a className="custom-link" href="https://catalog.uark.edu/search/?P=MATH%2031003" target="_blank" rel="noopener noreferrer">
            Combinatorics</a>
            <span className="hover-text">
            Basic combinatorial techniques including the study of the principle of inclusion and exclusion and generating functions. Additional topics may include modular arithmetic, algebraic coding theory, Polya's method of enumeration, and an introduction to abstract algebraic structures.            </span>
          </div><p></p>

            <div className="hover-container">
            <a className="custom-link" href="https://catalog.uark.edu/search/?P=INEG%2033103" target="_blank" rel="noopener noreferrer">
            Engineering Probability and Statistics</a>
            <span className="hover-text">
            This course covers probability, random variables, statistical inference, and regression analysis.              
            </span>
          </div><p></p>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Classes;
