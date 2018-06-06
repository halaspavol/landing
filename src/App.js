import React, { Component } from 'react';
import './App.css';

import Layout from './Layout/Layout' 

class App extends Component {
  scrollHandler = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("test").className = "Test"
    }
  }

  render() {
    return (
      <div className="App">
        <Layout  scroll={this.scrollHandler}/>
      </div>
    );
  }
}

export default App;
