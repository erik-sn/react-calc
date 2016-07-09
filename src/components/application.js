if (process.env.BROWSER) {
  require('../sass/style.scss');
}

import React, { Component } from 'react';

import Numpad from './numpad';
import Display from './display';
import { calculate } from '../utility/functions';

export default class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: '',
      result: '',
      negated: false,
    };
    this.click = this.click.bind(this);
    this.press = this.press.bind(this);
    this.pressDown = this.pressDown.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.pressDown, false);
    document.addEventListener('keypress', this.press, false);
  }

  press(e) {
    e.preventDefault();
    const code = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
    this.updateDisplay(String.fromCharCode(code));
  }

  /**
   * Second press event is necessary to catch "keypress" events, keydown
   * does not alert on backspace/escape. Keydown events override keypress
   * events.
   * @param  {object} e
   */
  pressDown(e) {
    if (e.code === 'Backspace' || e.code === 'Escape') {
      e.preventDefault();
      this.updateDisplay(e.code);   
    }
  }

  click(input) {
    this.updateDisplay(input);
  }

  /**
   * Determine if the input is a value or an operation, and update the
   * display accordingly
   * @param  {string} input - key or click from the user
   */
  updateDisplay(input) {
    const noSpace = /[0-9.()!\^]|^sqrt$/;
    const operationReg = /[-+*\/]|^Backspace$|^Escape$|^Negate$/;
    if (input.match(noSpace)) {
      this.setState({ display: this.state.display + input });
    } else if (input.match(operationReg)) {
      this.updateOperation(input);
    }
  }

  /**
   * receive an operation and update the display state
   * @param  {string} operation
   */
  updateOperation(operation) {
    if (operation === 'Escape') {
      this.setState({ display: '' });
    } else if (operation === 'Backspace') {
      this.setState({ display: this.state.display.slice(0, -1) });
    } else if (operation === 'Negate') {
      this.setState({ negated: !this.state.negated });
    } else {
      this.setState({ display: `${this.state.display} ${operation} ` });
    }
  }

  /**
   * format string so that only n amount of characters exist - if this limit
   * is exceeded prepend an ellipse.
   * @param  {string} input - input to be formatted
   * @param  {number} n - number of characters to limit string to
   * @return {string} - formatted string
   */
  formatDisplay(input, n) {
    return input.length > n ? `...${input.slice(input.length - n)}` : input;
  }

  render() {
    const { display, negated } = this.state;
    const text = this.formatDisplay(display, 20);
    const result = calculate(display, negated);

    return (
      <div id="app-container">
        <div id="frame">
          <div id="display-container">
            <Display result={result} text={text} />
          </div>
          <div id="numpad-container">
            <Numpad click={this.click} />
          </div>
        </div>
      </div>
    );
  }
}
