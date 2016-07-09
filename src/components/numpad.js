import React, { Component } from 'react';

import Button from './button';

export default class Numpad extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.click(this.props.value ? this.props.value : this.props.label);
  }

  render() {
    const { click } = this.props;
    return (
      <div id="numpad">
        <div className="button-row">
          <Button click={click} value="Backspace" label="&larr;" />
          <Button click={click} value="Escape" label="C" />
          <Button click={click} value="Negate" label="&plusmn;" />
          <Button click={click} value="sqrt(" label="&radic;" />
        </div>
        <div className="button-row">
          <Button click={click} label="(" />
          <Button click={click} label=")" />
          <Button click={click} label="^" />
          <Button click={click} label="!" />
        </div>
        <div className="button-row">
          <Button click={click} label="7" />
          <Button click={click} label="8" />
          <Button click={click} label="9" />
          <Button click={click} label="/" />
        </div>
        <div className="button-row">
          <Button click={click} label="4" />
          <Button click={click} label="5" />
          <Button click={click} label="6" />
          <Button click={click} label="*" />
        </div>
        <div className="button-row">
          <Button click={click} label="1" />
          <Button click={click} label="2" />
          <Button click={click} label="3" />
          <Button click={click} label="-" />
        </div>
        <div className="button-row">
          <Button click={click} label="0" width={'188'} />
          <Button click={click} label="." />
          <Button click={click} label="+" />
        </div>
      </div>
    );
  }
}
