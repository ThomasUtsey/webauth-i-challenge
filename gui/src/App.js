import React, { Component } from 'react';

import Register from './components/register'
import Login from './components/login'
import List from './components/list'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
  <Register/>
  <Login/>
  <List/>
      </div>
    );
  }
}

export default App;
