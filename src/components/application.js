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
      width: '22%',
      display: '',
    };
    this.click = this.click.bind(this);
  }

  click(label) {
    this.setState({ display: this.state.display + label });
  }

  render() {
    // standard height & width
    const { height, width } = this.state;
    return (
      <div id="app-container">
        <div id="frame">
          <div id="numpad">
            <div id="display-container">
              <Display text={this.state.display} />
            </div>
            <div className="button-row">
              <Button click={this.click} label="back" height={height} width={width} />
              <Button click={this.click} label="Clear" height={height} width={width} />
              <Button click={this.click} label="negate" height={height} width={width} />
              <Button click={this.click} label="sqrt" height={height} width={width} />
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
              <Button click={this.click} label="0" height={height} width={'46%'} />
              <Button click={this.click} label="." height={height} width={width} />
              <Button click={this.click} label="+" height={height} width={width} />
            </div>
            <div className="button-row">
              <Button click={this.click} label="Compute" height="40" width="96%" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
