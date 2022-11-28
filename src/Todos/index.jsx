import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

export default class Index extends Component {
  state = {};

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <h1>{error.message}</h1>;
    }
    return (
      <div>
        <Child1 />
        <Child2 />
      </div>
    );
  }
}
