import React, { Component } from 'react';
import Child1 from './child1';
import Child2 from './child2';

// Mouting
// 1. constructor
// 2. getDerivedStateFromProps
// 3. render
// 4. componentDidMount

// updating
// 1. getDerivedStateFromProps
// 2. shouldComponentUpdate
// 3. render
// 4. getSnapshotBeforeUpdate
// 5. componentDidUpdate

// unmounting
// 1. componentWillUnmount

// Error
// 1. getDerivedStateFromError
// 2. componentDidCatch

// Props are immutable
export default class App extends Component {
  constructor(props) {
    // call only once
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
  // call only once
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
        pTag[0].style.color = 'red';
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

  addElement = () => {
    const div = document.createElement('div');
    div.style.height = '200px';
    div.style.backgroundColor = `#${(((1 << 24) * Math.random()) | 0).toString(
      16
    )}`;
    this.divRef.prepend(div);
  };

  render() {
    console.log('render');

    const { counter, greet, todoItem, error } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <div>
        {/* <button type="button" onClick={this.addElement}>
          Add New Element
        </button>
        <div
          ref={ref => {
            this.divRef = ref;
          }}
        >
          {[0, 1, 2, 3, 4, 5].map(x => (
            <div
              key={x}
              style={{
                height: 200,
                backgroundColor: `#${(((1 << 24) * Math.random()) | 0).toString(
                  16
                )}`,
              }}
            />
          ))}
        </div> */}

        <h1 id="heading">{greet}</h1>
        <h2>{todoItem?.title}</h2>
        <button type="button" onClick={this.increment}>
          +
        </button>
        <p>{counter}</p>
        <button type="button" onClick={this.decrement}>
          -
        </button>
        {counter < 10 && <Child1 counter={counter} />}
        <Child2 />
      </div>
    );
  }
}

// create a component which has two child component
// and each child component has click evnt.

// if any error occurs during this click we have to handle this on parent component
