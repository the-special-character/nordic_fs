import React, { Component } from 'react';
import './todo.css';

// create a component which has two child component
// and each child component has click evnt.

// if any error occurs during this click we have to handle this on parent component

export default class Index extends Component {
  state = { todoText: '', todoList: [] };

  changeTodoText = event => {
    // console.log(event.target.value);
    this.setState({ todoText: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState(({ todoList, todoText }) => ({
      todoList: [...todoList, todoText],
      todoText: '',
    }));

    console.log('hello');
  };

  render() {
    const { todoText } = this.state;
    return (
      <div className="wrapper">
        <h1 className="heading">Todo App</h1>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            className="rounded-l-md"
            value={todoText}
            onChange={this.changeTodoText}
          />
          <button type="submit" className="btn rounded-l-none">
            Add Todo
          </button>
        </form>
        <div className="w-full flex-1">
          <div className="flex items-center m-4">
            <input type="checkbox" name="" id="" />
            <p className="flex-1 px-8">Lorem ipsum dolor sit amet.</p>
            <button type="button" className="btn">
              Delete
            </button>
          </div>
          <div className="flex items-center m-4">
            <input type="checkbox" name="" id="" />
            <p className="flex-1 px-8">Lorem ipsum dolor sit amet.</p>
            <button type="button" className="btn">
              Delete
            </button>
          </div>
        </div>
        <div className="w-full flex">
          <button type="button" className="btn flex-1 rounded-none">
            All
          </button>
          <button type="button" className="btn flex-1 rounded-none">
            Pending
          </button>
          <button type="button" className="btn flex-1 rounded-none">
            Completed
          </button>
        </div>
      </div>
    );
  }
}
