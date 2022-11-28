import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

// Mouting
// 1. constructor
// 2. getDerivedStateFromProps
// 3. render

// updating

// unmounting

// Error

// Props are immutable
export default class App extends Component {
  constructor(props) {
    // call only once
    console.log('constructor');
    super(props);

    this.state = {
      counter: 0,
      todoItem: null,
      // greet: `Hello ${props.name}`,
    };
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps');
  //   return {
  //     greet: `Hello ${nextProps.name}`,
  //   };
  // }

  // manupulate dom element
  // register an event
  async componentDidMount() {
    // const heading = document.getElementById('heading');
    // console.log(heading);
    // heading.style.color = 'red';
    // // document.addEventListener('mousemove', () => {
    // //   console.log('mouse Move...');
    // // });
    // heading.addEventListener('mouseenter', () => {
    //   console.log('mouse enter on heading....');
    // });
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await res.json();
      this.setState({ todoItem: json });
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter === 3) {
      const pTag = document.getElementsByTagName('p');
      if (pTag.length > 0) {
        pTag[0].style.color = 'blue';
      }
    }
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    // share this info to database
    console.log(errorInfo.componentStack);
  }

  increment = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  decrement = () => {
    this.setState(({ counter }) => ({
      counter: counter - 1,
    }));
  };

  render() {
    console.log('render');

    const {
      counter, greet, todoItem, error,
    } = this.state;
    if (error) {
      return <h1>{error.message}</h1>;
    }
    return (
      <div>
        <h1 id="heading">{greet}</h1>
        <h2>{todoItem?.title}</h2>
        <button type="button" onClick={this.increment}>
          +
        </button>
        <p>{counter}</p>
        <button type="button" onClick={this.decrement}>
          -
        </button>
        <Child1 counter={counter} />
        {/* {counter < 10 && <Child1 counter={counter} />} */}
        <Child2 />
      </div>
    );
  }
}
