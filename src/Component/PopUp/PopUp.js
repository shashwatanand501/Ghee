import React from 'react';
import './PopUp.css';

const Popup = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="popup-body">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Popup;
