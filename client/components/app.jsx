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
      </div>
    );
  }
}

export default App;
