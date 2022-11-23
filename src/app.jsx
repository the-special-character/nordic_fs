import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.setState(({ counter }) => ({
              counter: counter + 1,
            }));
          }}
        >
          +
        </button>
        <p>{counter}</p>
        <button
          type="button"
          onClick={() => {
            this.setState(({ counter }) => ({
              counter: counter - 1,
            }));
          }}
        >
          -
        </button>
      </div>
    );
  }
}
