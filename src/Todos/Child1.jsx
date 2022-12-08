import React, { Component } from 'react';

export default class Child1 extends Component {
  state = {};

  plus = () => {
    this.setState({ error: true });
  };

  render() {
    const { error } = this.state;
    if (error) {
      throw new Error('code is not correct');
    }
    return (
      <div role="button" onClick={this.plus}>
        <h1>clcik me i am Child 1</h1>
      </div>
    );
  }
}
