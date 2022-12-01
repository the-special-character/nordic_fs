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
      todoList: [
        ...todoList,
        { id: new Date().valueOf(), text: todoText, isDone: false },
      ],
      todoText: '',
    }));
  };

  toggleComplete = item => {
    console.log(item);
    // this.setState(({ todoList }) => ({
    //   todoList: todoList.map(x => {
    //     if (x.id === item.id) {
    //       return { ...x, isDone: !x.isDone };
    //     }
    //     return x;
    //   }),
    // }));

    this.setState(({ todoList }) => {
      const index = todoList.findIndex(x => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...item, isDone: !item.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = item => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(x => x.id === item.id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  render() {
    const { todoText, todoList } = this.state;
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
          {todoList.map(item => (
            <div key={item.id} className="flex items-center m-4">
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={() => this.toggleComplete(item)}
              />
              <p className="flex-1 px-8">{item.text}</p>
              <button
                type="button"
                className="btn"
                onClick={() => this.deleteTodo(item)}
              >
                Delete
              </button>
            </div>
          ))}
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
