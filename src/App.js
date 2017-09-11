import React, { Component } from 'react';
import './App.css';
import  CharacterList from './components/CharacterList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>SWAPI React Example</h2>
        </div>
      <CharacterList />        
      </div>
    );
  }
}

export default App;
