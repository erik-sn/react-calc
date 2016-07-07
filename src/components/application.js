if (process.env.BROWSER) {
  require('../sass/style.scss');
}

import React, { Component } from 'react';

import Numpad from './numpad';
import Display from './display';

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
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keypress', this.press, false);
  }

  press(e) {
    e.preventDefault();
    const code = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
    this.updateDisplay(String.fromCharCode(code));
  }

  click(input) {
    this.updateDisplay(input);
  }

  updateDisplay(val) {
    const noSpace = /[0-9.()!\^]|^sqrt$/;
    const operationReg = /[-+*\/]|^Backspace$|^Escape$|^Negate$/;
    if (val.match(noSpace)) {
      this.setState({ display: this.state.display + val });
    } else if (val.match(operationReg)) {
      this.updateOperation(val);
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
   * Format a string and attempt to calculate the mathematical evaluation
   * @param  {string} string from the display
   * @return {string} result of math calculation
   */
  calculate(input, negated) {
    try {
      let processed = input.replace(/ /g, '')
      .replace(/(.)[\^](.)/g, 'Math.pow($1, $2)')
      .replace(/sqrt[(](.)[)]/g, 'Math.sqrt($1)')
      .replace(/(\d+)!/g, 'this.factorial($1)');
      processed = negated ? `-1*(${processed})` : processed;
      
      console.log(processed);
      return eval(processed);
    } catch (err) {
      return null;
    }
  }

  /**
   * return the factorial of an input
   * @param  {number} n
   */
  factorial(n) {
    try {
      let result = 1;
      while (n > 1) {
        result *= n;
        n--;
      }
      return result;
    } catch (err) {
      return null;
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
    const { height, width, display, negated } = this.state;
    const text = this.formatDisplay(display, 20);
    const result = this.calculate(display, negated);

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
