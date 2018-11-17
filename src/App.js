import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';
// Import the ToDo component we created in a separate folder

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Wash the dishes', isCompleted: false },
        { description: 'Wash baby bottles', isCompleted: false }
      ]
    };
  }

  render() {
    return (

      <div className="App">

        <ul>

          { this.state.todos.map(
              function (todo, index) {
                return  <ToDo key={ index } description={ todo.description } isCompleted = { todo.isCompleted }/>
              }
          )}
          {/* Bring in todos from the state of the component */}

        </ul>

      </div>
    );
  }
}

export default App;
