import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['learn react', 'learn english']
    }
  }
  handleBtnClick() {
    alert('click');
  }

  render() {
    return (
      <div>
        <div>
          <input />
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item) => {
              return <li>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
