import React, { useState } from 'react';
import ContactChatbox from './ContactChatbox';
import '../CSS/FloatingContactButton.css';
import { FaComments } from 'react-icons/fa';

const FloatingContactButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <button 
        className="floating-contact-btn"
        onClick={() => setIsChatOpen(true)}
        aria-label="Open contact form"
      >
        <FaComments className="contact-icon" />
        <span className="contact-tooltip">Get in touch!</span>
      </button>

      {isChatOpen && (
        <ContactChatbox onClose={() => setIsChatOpen(false)} />
      )}
    </>
  );
};

export default FloatingContactButton;