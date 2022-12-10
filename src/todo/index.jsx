import React, { createRef, PureComponent } from 'react';
import './todo.css';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

// create a component which has two child component
// and each child component has click evnt.

// if any error occurs during this click we have to handle this on parent component

export default class Index extends PureComponent {
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

  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filterType: 'all',
      isLoading: false,
      hasError: false,
    };
    this.intputTextRef = createRef();
  }

  async componentDidMount() {
    this.loadTodo('all');
  }

  loadTodo = async filterType => {
    try {
      this.setState({ isLoading: true });
      let url = 'http://localhost:3000/todoList';
      if (filterType !== 'all') {
        url += `?isDone=${filterType === 'completed'}`;
      }
      const res = await fetch(url);
      const json = await res.json();
      this.setState({ todoList: json, filterType });
    } catch (error) {
      console.error(error);
      this.setState({ hasError: error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  addTodo = async event => {
    try {
      this.setState({ isLoading: true });
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
    } catch (error) {
      this.setState({ hasError: error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  toggleComplete = async item => {
    try {
      this.setState({ isLoading: true });
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
    } catch (error) {
      this.setState({ hasError: error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  deleteTodo = async item => {
    try {
      this.setState({ isLoading: true });
      await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'DELETE',
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(x => x.id === item.id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
    } catch (error) {
      this.setState({ hasError: error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { todoList, filterType, isLoading, hasError } = this.state;

    if (hasError) {
      return <h1>Something went wrong. try after sometime</h1>;
    }

    console.log('render');
    return (
      <div className="wrapper">
        <h1 className="heading">Todo App</h1>
        <TodoForm addTodo={this.addTodo} ref={this.intputTextRef} />
        <TodoList
          todoList={todoList}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter
          filterBtns={this.filterBtns}
          filterType={filterType}
          loadTodo={this.loadTodo}
        />
      </div>
    );
  }
}
