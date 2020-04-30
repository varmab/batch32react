import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Counter from './Counter'
import Friends from './Friends'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title="Varma" year={2020} password="123456" />
        </header>
        <Friends/>
      </div>
    );
  }
}

export default App;
