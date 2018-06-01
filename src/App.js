import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div>body, odkazy</div>
        <div>footer</div>
      </div>
    );
  }
}

export default App;
