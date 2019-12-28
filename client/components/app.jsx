import React from 'react';
import Navigation from './navigation';
import Homepage from './homepage';
import Footer from './footer';
import About from './about';

class App extends React.Component{
  constructor(props){
    super(props);
    this.setView = this.setView.bind(this);

    this.state = {
      view: {
        page: 'about',
        params: {}
      }
    }
  }

  setView(page, params){
    this.setState({ view: { page, params}});
  }

  render(){
    if(this.state.view.page === "home"){
      return (
        <div>
          <Navigation setView={this.setView} />
          <Homepage setView={this.setView} />
          <Footer setView={this.setView} />
        </div>
      );
    } else if (this.state.view.page === "about"){
      return (
        <div>
          <Navigation setView={this.setView} />
          <About setView={this.setView} />
          <Footer setView={this.setView} />
        </div>
      );
    }

  }
}

export default App;
