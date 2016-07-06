import React, { Component } from 'react';

export default class Display extends Component {

  constructor(props) {
    super(props);
    this.state = {
      equation: '4 x 5 + 3 - 1 / 7',
    };
  }

  render() {
    const { text } = this.props;
    const { equation } = this.state;
    return (
      <div id="display">
        <div id="equation-text">
          {equation}
        </div>
        <div id="current-text">
          {text.length > 18 ? `...${text.slice(text.length - 18)}` : text}
        </div>
      </div>
    );
  }

}
