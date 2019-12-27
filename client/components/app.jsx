import React from 'react';
import Navigation from './navigation';
import Homepage from './homepage';
import Footer from './footer';

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
        <Homepage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
