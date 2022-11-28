import React, { Component, PureComponent } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class Child1 extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //   }

  static mouseMove = () => {
    console.log('mouse move');
  };

  componentDidMount() {
    document.addEventListener('mousemove', Child1.mouseMove);
    this.interval = setInterval(() => {
      console.log('interval');
    }, 1000);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', Child1.mouseMove);
    clearInterval(this.interval);
    // throw new Error('Something went wrong...');
  }

  render() {
    const { counter } = this.props;
    if (counter > 5) {
      throw new Error('Something went wrong...');
    }
    console.log('child 1 render');

    return (
      <div>
        <h1>Child1</h1>
        <h2>{counter}</h2>
      </div>
    );
  }
}
