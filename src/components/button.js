import React, { Component } from 'react';

export default class Button extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.click(this.props.value ? this.props.value : this.props.label);
  }

  render() {
    const { label, height, width } = this.props;
    return (
      <button
        className="button"
        style={{ height, width }}
        onClick={this.onClick}
      >
        {label}
      </button>
    );
  }
}
