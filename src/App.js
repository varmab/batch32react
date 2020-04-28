import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Counter from './Counter'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title="Varma" year={2020} isNew={true}/>
          <Welcome title="Ram"/>
          <Welcome title="Batch 32"/>
          <input type="text"/>
        </header>
        <Counter/>
      </div>
    );
  }
}

export default App;
