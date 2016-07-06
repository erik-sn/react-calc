import React, { Component } from 'react';

export default class Button extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.click(this.props.label);
  }

  render() {
    const { label, height, width } = this.props;
    return (
      <button
        className="button col-xs-3"
        style={{ height, width }}
        onClick={this.onClick}
      >
        {label}
      </button>
    );
  }
}
