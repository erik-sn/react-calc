import React, { Component } from 'react';

export default class Display extends Component {

  render() {
    const { text, equation } = this.props;
    console.log(text);
    return (
      <div id="display">
        <div id="equation-text">
          {equation}
        </div>
        <div id="current-text">
          {text}
        </div>
      </div>
    );
  }

}
