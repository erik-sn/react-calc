import React, { Component } from 'react';
import { connect } from 'react-redux';

if (process.env.BROWSER) {
  require('../sass/style.scss');
}

class Hello extends Component {

  render() {
    return (
      <div className="hello-container">Hello!</div>
    );
  }

}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, { })(Hello);
