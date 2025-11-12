import React, { useState, useEffect } from 'react';
import ContactChatbox from './ContactChatbox';
import '../CSS/FloatingWidgets.css';
import { FaComments, FaDownload, FaArrowUp } from 'react-icons/fa';

const FloatingWidgets = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Show "scroll to top" button when scrolled down 300px
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Pranav_Mahesh_Resume.pdf';
    link.download = 'Pranav_Mahesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll to Top Button - Left Side */}
      {showScrollTop && (
        <button
          className="floating-widget-btn scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Download Resume Button - Right Side */}
      <button 
        className="floating-widget-btn resume-download"
        onClick={handleDownloadResume}
        aria-label="Download resume"
      >
        <FaDownload />
        <span className="widget-tooltip">Download Resume</span>
      </button>

      {/* Contact Button - Right Side */}
      <button 
        className="floating-widget-btn contact-chat"
        onClick={() => setIsChatOpen(true)}
        aria-label="Open contact form"
      >
        <FaComments />
        <span className="widget-tooltip">Get in touch!</span>
      </button>

      {/* Contact Chatbox Modal */}
      {isChatOpen && (
        <ContactChatbox onClose={() => setIsChatOpen(false)} />
      )}
    </>
  );
};

export default FloatingWidgets;