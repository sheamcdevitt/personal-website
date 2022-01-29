import React from 'react';
import psLogo from '../../assets/logo-outline.png';
import './footer.css';

const Footer = () => (
  <div className="ps__footer footer__padding">
    <div className="ps__footer-copyright">
    <img src={psLogo} alt="ps_logo" />
        <p>© Shéa McDevitt 2022<br /> All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;