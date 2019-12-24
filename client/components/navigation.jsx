import React from 'react';
import App from './app';

function Navigation(props){

  return(
    <div id="navigation">
      <div id="logoContainer">
        <img src="/assets/logo.jpg" alt="logo"/>
      </div>
      <ul id="navButtons">
        <li><a>About Us</a></li>
        <li><a>Beers</a></li>
        <li><a>Tasting Room</a></li>
        <li><a>Store</a></li>
        <li><a>Beer Club</a></li>
        <li><a>News</a></li>
        <li><a>Contact</a></li>
      </ul>

    </div>
  );
}

export default Navigation;
