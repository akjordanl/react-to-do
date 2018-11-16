import React, { Component } from 'react';
// React is a default export, so don't need curly braces
// Component is not a default export, so need curly braces

class ToDo extends Component {
  render () {
    return (
      <li> A todo will go here  </li>
    );
  }
}

export default ToDo;
