if (process.env.BROWSER) {
  require('../sass/style.scss');
}

import React, { Component } from 'react';

import Button from './button';
import Display from './display';

export default class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: '50px',
      width: '91px',
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
   * receive an operation and update the state
   * @param  {any} val
   */
  updateOperation(val) {
    if (val === 'Escape') {
      this.setState({ display: '' });
    } else if (val === 'Backspace') {
      this.setState({ display: this.state.display.slice(0, -1) });
    } else if (val === 'Negate') {
      this.setState({ negated: !this.state.negated });
    } else {
      this.setState({ display: `${this.state.display} ${val} ` });
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
          <div id="numpad">
            <div className="button-row">
              <Button click={this.click} value="Backspace" label="back" height={height} width={width} />
              <Button click={this.click} value="Escape" label="Clear" height={height} width={width} />
              <Button click={this.click} value="Negate" label="negate" height={height} width={width} />
              <Button click={this.click} value="sqrt(" label="sqrt" height={height} width={width} />
            </div>
            <div className="button-row">
              <Button click={this.click} label="(" height={height} width={width} />
              <Button click={this.click} label=")" height={height} width={width} />
              <Button click={this.click} label="^" height={height} width={width} />
              <Button click={this.click} label="!" height={height} width={width} />
            </div>
            <div className="button-row">
              <Button click={this.click} label="7" height={height} width={width} />
              <Button click={this.click} label="8" height={height} width={width} />
              <Button click={this.click} label="9" height={height} width={width} />
              <Button click={this.click} label="/" height={height} width={width} />
            </div>
            <div className="button-row">
              <Button click={this.click} label="4" height={height} width={width} />
              <Button click={this.click} label="5" height={height} width={width} />
              <Button click={this.click} label="6" height={height} width={width} />
              <Button click={this.click} label="*" height={height} width={width} />
            </div>
            <div className="button-row">
              <Button click={this.click} label="1" height={height} width={width} />
              <Button click={this.click} label="2" height={height} width={width} />
              <Button click={this.click} label="3" height={height} width={width} />
              <Button click={this.click} label="-" height={height} width={width} />
            </div>
            <div className="button-row">
              <Button click={this.click} label="0" height={height} width={'188'} />
              <Button click={this.click} label="." height={height} width={width} />
              <Button click={this.click} label="+" height={height} width={width} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
