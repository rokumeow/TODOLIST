import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input />
          <button>add</button>
        </div>
        <ul>
          <li>learn React</li>
          <li>learn englisht</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
