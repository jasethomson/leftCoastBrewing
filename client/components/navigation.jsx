import React from 'react';
import App from './app';

function Navigation(props){

  return(
    <div id="navigation">
      <div id="logoContainer">
        <img src="/assets/logo.jpg" alt="logo"/>
      </div>
      <div id="navButtons">
        <button>About Us</button>
        <button>Beers</button>
        <button>Tasting Room</button>
        <button>Store</button>
        <button>Beer Club</button>
        <button>News</button>
        <button>Contact</button>
      </div>

    </div>
  );
}

export default Navigation;
