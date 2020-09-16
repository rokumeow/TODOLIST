import React, { Component } from 'react';

class TodoList extends Component {
  handleBtnClick() {

  }

  render() {
    return (
      <div>
        <div>
          <input />
          <button onClick={this.handleBtnClick}>add</button>
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
