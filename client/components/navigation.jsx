import React from 'react';
import App from './app';

function Navigation(props){

  window.addEventListener("click", ()=>{
    document.getElementById("navButtons").className = "menu";
    document.getElementById("bars").classList.remove("dispNone");
  })

  function hamburger(){
    event.stopPropagation();
    let menu = document.getElementById("navButtons");
    let bars = document.getElementById("bars");
    if(menu.className === "menu"){
      menu.className += " responsive";
    } else {
      menu.className = "menu";
    }
  }
  return(
    <div id="navigation">
      <div id="logoContainer">
        <img src="/assets/logo.jpg" alt="logo"/>
      </div>
      <ul className="menu" id="navButtons">
        <li className="menuOption" onClick={() => props.setView('about', {})}>About Us</li>
        <li className="menuOption"><a>Beers</a></li>
        <li className="menuOption"><a>Tasting Room</a></li>
        <li className="menuOption"><a>Store</a></li>
        <li className="menuOption"><a>Beer Club</a></li>
        <li className="menuOption"><a>News</a></li>
        <li className="menuOption"><a>Contact</a></li>
      </ul>
      <i id="bars" className="fa fa-bars fa-3x" onClick={hamburger}></i>
    </div>
  );
}

export default Navigation;
