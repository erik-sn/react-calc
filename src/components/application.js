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
    };
    this.click = this.click.bind(this);
    this.press = this.press.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  componentWillMount() {    
    document.addEventListener('keydown', this.press, false);
  }

  updateDisplay(val) {
    const numReg = /[1-9.]/;
    const operationReg = /[-+()\^!*\/]|^Backspace$|^Escape$|^Enter$|^sqrt$|^negate$/;
    if (val.match(numReg)) {
      this.updateNumber(val);
    } else if (val.match(operationReg)) {
      this.updateOperation(val);
    }
  }

  updateNumber(val) {
    this.setState({ display: this.state.display + val });
  }

  updateOperation(val) {
    const noSpace = /[()\^!]/;
    if (val === 'Enter') {
      // calculate
      this.setState({ display: '' });
    } else if (val === 'Escape') {
      this.setState({ display: '' });
    } else if (val === 'Backspace') {
      this.setState({ display: this.state.display.slice(0, -1) });
    } else if (val.match(noSpace)) {
      this.setState({ display: `${this.state.display}${val}` });
    }else {
      this.setState({ display: `${this.state.display} ${val} ` });
    }
  }

  press(event) {
    event.preventDefault();
    const key = event.key;
    this.updateDisplay(key);
  }

  click(input) {
    this.updateDisplay(input);
  }

  render() {
    // standard height & width
    const { height, width, equation } = this.state;
    let display = this.state.display;
    display = display.length > 18 ? `...${display.slice(display.length - 18)}` : display;
    return (
      <div id="app-container">
        <div id="frame">
          <div id="display-container">
            <Display equation={equation} text={display} />
          </div>
          <div id="numpad">
            <div className="button-row">
              <Button click={this.click} value="Backspace" label="back" height={height} width={width} />
              <Button click={this.click} value="Escape" label="Clear" height={height} width={width} />
              <Button click={this.click} value="Negate" label="negate" height={height} width={width} />
              <Button click={this.click} value="Sqrt" label="sqrt" height={height} width={width} />
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
