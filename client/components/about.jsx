import React from 'react';
import App from './app';

function About(props){

  return(
    <div id="aboutSection">
      <div id="aboutHeader">
        <div className="aboutHeaderBkgd">
          <img src="/assets/leafIconLeft.png"></img>
          <div id="aboutHeaderText">OUR STORY</div>
          <img src="/assets/leafIconRight.png"></img>
        </div>
      </div>
      <div id="aboutTextAndButton">
        <p>Left Coast Brewing Company is family owned and operated in the iconic surf side town of San Clemente, California. The independent brewery began its craft back in 2004. With a slew of 23+ awards under their belt, the brewery has grown to 11,000 barrels and counting.</p>
        <p><br />Left Coast prides itself on its commitment to quality and constantly strives to find premium ingredients to achieve the perfect balance of aroma and flavor. The family and brewers that comprise Left Coast are passionate about the art and craft of brewing and seek to invent recipes that they not only love drinking but love sharing. Ingredients, technique and passion poured into every pint, that is the Left Coast way.</p>
        <p><br />From our sand to yours… We’d love to share a pint with you. </p>
      </div>
    </div>
  );
}

export default About;
