import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';
// Import the ToDo component we created in a separate folder

class App extends Component {
  render() {
    return (

      <div className="App">

        <ul>
          <ToDo />
          <ToDo />
          {/* Call to do component with funky tags and no commas */}

        </ul>

      </div>
    );
  }
}

export default App;
