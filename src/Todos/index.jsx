import React, { Component } from 'react';
import './todo.css';

export default class Index extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { todoText: '', todoList: [], filterType: 'all' };

  filterBtns = [
    {
      name: 'All',
      key: 'all',
    },
    {
      name: 'Pending',
      key: 'pending',
    },
    {
      name: 'Completed',
      key: 'completed',
    },
  ];

  changeTodoText = (event) => {
    // console.log(event.target.value);
    this.setState({ todoText: event.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();
    this.setState(({ todoList, todoText }) => ({
      todoList: [
        ...todoList,
        { id: new Date().valueOf(), text: todoText, isDone: false },
      ],
      todoText: '',
    }));
    // console.log('seraj');
  };

  toggleComplete = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...item, isDone: !item.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  render() {
    const { todoText, todoList, filterType } = this.state;
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
          <button type="submit" className="btn rounded-l-none" >
            Add Todo
          </button>
        </form>
        <div className="w-full flex-1">
          {todoList
            .filter((x) => {
              switch (filterType) {
                case 'pending':
                  return x.isDone === false;
                case 'completed':
                  return x.isDone === true;
                default:
                  return true;
              }
            })
            .map((item) => (
              <div key={item.id} className="flex items-center m-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
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
          {this.filterBtns.map((x) => (
            <button
              key={x.key}
              type="button"
              className="btn flex-1 rounded-none"
              onClick={() => this.setState({ filterType: x.key })}
            >
              {x.name}
            </button>
          ))}
          ;
          {/* <button type="button" className="btn flex-1 rounded-none">
            Pending
          </button>
          <button type="button" className="btn flex-1 rounded-none">
            Completed
          </button> */}
        </div>
      </div>
    );
  }
}
