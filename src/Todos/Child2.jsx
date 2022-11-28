import React, { Component } from 'react';

export default class Child2 extends Component {
  state = {};

  ClikMe = () => {
    this.setState({ error: true });
  };

  render() {
    const { error } = this.state;
    if (error) {
      throw new Error('you have clicked wrong event');
    }
    return (
      <div role="button" onClick={this.ClikMe}>
        <h1>Child 2: clcik me to see the change.</h1>
      </div>
    );
  }
}
