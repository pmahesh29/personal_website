import React from 'react';
import '../CSS/VideoModal.css';
import { FaTimes } from 'react-icons/fa';

const VideoModal = ({ videoUrl, onClose, title }) => {
  // Extract YouTube video ID from various URL formats
  const getYouTubeId = (url) => {
    if (!url) return null;
    
    // Handle different YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  // Close modal when clicking outside the video
  const handleOverlayClick = (e) => {
    if (e.target.className === 'video-modal-overlay') {
      onClose();
    }
  };

  // Close modal on Escape key press
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!videoId) {
    return (
      <div className="video-modal-overlay" onClick={handleOverlayClick}>
        <div className="video-modal-content">
          <button className="video-modal-close" onClick={onClose}>
            <FaTimes />
          </button>
          <div className="video-error">
            <p>Invalid video URL. Please check the YouTube link.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="video-modal-overlay" onClick={handleOverlayClick}>
      <div className="video-modal-content">
        <div className="video-modal-header">
          <h3 className="video-modal-title">{title || 'Demo Video'}</h3>
          <button className="video-modal-close" onClick={onClose} aria-label="Close video">
            <FaTimes />
          </button>
        </div>
        
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&iv_load_policy=3`}
            title={title || 'Demo Video'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;