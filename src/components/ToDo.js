import React, { Component } from 'react';
// React is a default export, so don't need curly braces
// Component is not a default export, so need curly braces

class ToDo extends Component {
  render () {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span> { this.props.description } </span>
      </li>
    );
  }
}

export default ToDo;
