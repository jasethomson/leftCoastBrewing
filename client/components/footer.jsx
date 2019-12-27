import React from 'react';
import App from './app';

function Footer(props){

  return (
    <div id="footer">
      <div id="footerLogoContainer">
        <img src="/assets/footer-logo.png" alt="logo" />
      </div>
      <ul className="menu" id="footerButtons">
        <li className="menuOption"><a>About Us</a></li>
        <li className="menuOption"><a>Beers</a></li>
        <li className="menuOption"><a>Tasting Room</a></li>
        <li className="menuOption"><a>Store</a></li>
        <li className="menuOption"><a>Beer Club</a></li>
        <li className="menuOption"><a>News</a></li>
        <li className="menuOption"><a>Contact</a></li>
      </ul>
    </div>
  );
}

export default Footer;
