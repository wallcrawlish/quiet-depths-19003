import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className ="jumbotron jumbotron-fluid align-baseline" style={{backgroundImage:'url(bgimg.jpg)'}}>
       <div className ="container typewriter">
         <h1 className="pull-left"> Build To Learn Bot </h1>
         <hr/>
         <p className= "app-intro">Changing Background Text</p>
         <hr/>
         <p><a className="btn btn-primary" href="http://www.google.com" target="_blank"> Discovery things</a></p>
       </div>

     </div>
    );
  }
}

export default App;
