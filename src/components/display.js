import React, { Component } from 'react';

export default class Display extends Component {

  render() {
    const { text, result } = this.props;
    return (
      <div id="display">
        <div id="equation-text">
          {result ? result : undefined}
        </div>
        <div id="current-text">
          {text}
        </div>
      </div>
    );
  }

}
