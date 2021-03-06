import React from 'react';
import App from './app';

function Homepage(props){
  return (
    <div>
      <div id="homepage-banner"></div>
      <div id="threeImages">
        <div id="homepage-Irvine-Img">
          <div className="layOver">
            <div className="threeImagesText">Visit Irvine</div>
          </div>
        </div>
        <div id="homepage-beers-Img">
          <div className="layOver">
            <div className="threeImagesText">Checkout our Brews</div>
          </div>
        </div>
        <div id="homepage-store-Img">
          <div className="layOver">
            <div className="threeImagesText">Gifts</div>
          </div>
        </div>
      </div>
      <div id="aboutUs">
        <div id="homePageAboutUs">
          <img src="/assets/leafIconLeft.png" alt="left pointing leaf"/>
          <h1>ABOUT US</h1>
          <img src="/assets/leafIconright.png" alt="left pointing leaf" />
        </div>
        <div id="aboutLine"></div>
        <p>Left Coast prides itself on its commitment to quality and constantly strives to find premium ingredients to achieve the perfect balance of aroma and flavor. The family and brewers that comprise Left Coast are passionate about the art and craft of brewing and seek to invent recipes that they not only love drinking but love sharing. Ingredients, technique and passion poured into every pint, that is the Left Coast way.</p>
        <div className="aboutAndClubButton">
          <button onClick={() => props.setView("about", {})}>LEARN MORE ABOUT US</button>
        </div>
      </div>
      <div id="homePageBeerClub">
        <div id="beerClubHeader">
          <div className="beerClubLine"></div>
          <h1>LEFT COAST BEER CLUB</h1>
          <div className="beerClubLine"></div>
        </div>
        <div id="homeBeerClubText">Join our Beer Club and enjoy 2 exclusive<br></br> barrel aged beers every quarter!</div>
        <div className="aboutAndClubButton">
          <button>SIGN UP NOW</button>
        </div>
      </div>
      <div id="homePageMap">
        <a href="https://www.google.com/"></a>
      </div>
    </div>
  );
}

export default Homepage;
