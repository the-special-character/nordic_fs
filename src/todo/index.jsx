import React, { Component, createRef } from 'react';
import './todo.css';

// create a component which has two child component
// and each child component has click evnt.

// if any error occurs during this click we have to handle this on parent component

export default class Index extends Component {
  state = { todoList: [], filterType: 'all' };

  intputTextRef = createRef();
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

  async componentDidMount() {
    this.loadTodo();
  }

  loadTodo = async () => {
    try {a
      const res = await fetch('http://localhost:3000/todoList');
      
      const json = await res.json();
      console.log(json);
      this.setState({ todoList: json });
    } catch (error) {}
  };

  addTodo = async event => {
    try {
      event.preventDefault();

      const res = await fetch('http://localhost:3000/todoList', {
        method: 'POST',
        body: JSON.stringify({
          text: this.intputTextRef.current.value,
          isDone: false,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, json],
        }),
        () => {
          this.intputTextRef.current.value = '';
        }
      );
    } catch (error) {}
  };

  toggleComplete = async item => {
    try {
      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(x => x.id === item.id);
        return {
          todoList: [
            ...todoList.slice(0, index),
            json,
            ...todoList.slice(index + 1),
          ],
        };
      });
    } catch (error) {}
  };

  deleteTodo = async item => {
    try {
      await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'DELETE',
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(x => x.id === item.id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
    } catch (error) {}
  };

  render() {
    const { todoList, filterType } = this.state;
    console.log('render');
    return (
      <div className="wrapper">
        <h1 className="heading">Todo App</h1>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            className="rounded-l-md"
            ref={this.intputTextRef}
          />
          <button type="submit" className="btn rounded-l-none">
            Add Todo
          </button>
        </form>
        <div className="w-full flex-1">
          {todoList
            .filter(x => {
              switch (filterType) {
                case 'pending':
                  return !x.isDone;

                case 'completed':
                  return x.isDone;

                default:
                  return true;
              }
            })
            .map(item => (
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
          {this.filterBtns.map(x => (
            <button
              key={x.key}
              type="button"
              className="btn flex-1 rounded-none"
              onClick={() => this.setState({ filterType: x.key })}
            >
              {x.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}