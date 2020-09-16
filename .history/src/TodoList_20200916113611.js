import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ' '
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // handleItemClick(index) {
  //   const list = [...this.state.list];
  //   list.splice(index, 1);
  //   this.setState({
  //     list: list
  //   })
  // }

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (<TodoItem
          delete={this.handleDelete}
          key={index}
          content={item}
          index={index} />)
        // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
      })
    )
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button className='grey-btn' onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()} </ul>
      </Fragment>
    );
  }
}

export default TodoList;
