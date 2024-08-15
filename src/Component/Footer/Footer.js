import React from 'react';
import './Footer.css';
import Logo from '../../Assert/Round Sticker_page-0001 1.svg'; // Adjust the path as necessary
import ChatLogo from '../../Assert/Chat.svg';
import Instagram from '../../Assert/instagram.svg';

const openWhatsApp = () => {
  const phoneNumber = '9810314220'; // WhatsApp number in international format without '+' or spaces
  const message = encodeURIComponent('Hello, I am interested in your product.');
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
};

const Footer = ({ onPrivacyClick, onTermsClick, onCancellationRefundClick, onShippingDeliveryClick }) => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
          <button className="footer-button" onClick={openWhatsApp}>
            <img src={ChatLogo} alt="Chat Logo" />Drop a line
          </button>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>INFO</h4>
            <ul>
              <li><a href="#" onClick={onCancellationRefundClick}>Refund</a></li>
              <li><a href="#" onClick={onPrivacyClick}>Privacy</a></li>
              <li><a href="#" onClick={onTermsClick}>Terms of Conditions</a></li>
              <li><a href="#" onClick={onShippingDeliveryClick}>Shipping</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>CONTACT US</h4>
            <ul>
              <li>91 9810314220</li>
              <li>info@orangegoat.net</li>
              <li>ORANGE GOAT CONSULTANTS AND MARKETING PRIVATE LIMITED</li>
              <li>10, THIRD FLOOR, N BLOCK ROAD, ZAMRUDPUR, NEAR GURUDWARA SOUTH DELHI South Delhi DELHI 110048</li>
              <li>9810314220</li>
              <li>info@orangegoat.net</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 — Copyright</p>
        <div className="footer-social">
          <a href="https://www.instagram.com/p/C9ereTnMvMu/?igsh=MXY3MmpyaDNxZG52dA%3D%3D">
            <img src={Instagram} alt="Instagram Logo"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
