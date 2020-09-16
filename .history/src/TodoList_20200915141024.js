import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['learn react', 'learn english', 'learn vue']
    }
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, 'hello world']
    })
  }

  render() {
    return (
      <div>
        <div>
          <input />
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
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
