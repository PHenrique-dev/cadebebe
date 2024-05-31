import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/cade_bebe.iga/" target="_blank" rel="noopener noreferrer"><InstagramIcon /> </a>
        <a href="https://www.facebook.com/edinalvapereiradasilva.pereiradasilva/" target="_blank" rel="noopener noreferrer"><FacebookIcon /> </a>
        <a href="https://wa.me/5577991054828" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
      </div>
      <p> &copy; 2024 cadebebe.com</p>
    </div>
  );
}

export default Footer;