import React from 'react';
import './WhatsAppButton.css';
import WhatsAppIcon from '../../public/images/whatsapp.svg';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/13054001178"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={WhatsAppIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;