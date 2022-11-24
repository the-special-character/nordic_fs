import React, { Component, PureComponent } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class Child1 extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //   }

  render() {
    const { counter } = this.props;
    console.log('child 1 render');
    return (
      <div>
        <h1>Child1</h1>
        <h2>{counter}</h2>
      </div>
    );
  }
}
