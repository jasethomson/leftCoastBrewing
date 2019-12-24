import React from 'react';
import Navigation from './navigation';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      placeHolder: null
    }
  }

  render(){
    return(
      <div>
        <Navigation/>
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
      </div>
    );
  }
}

export default App;
