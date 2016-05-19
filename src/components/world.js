import React, { Component } from 'react';
import { connect } from 'react-redux';

class World extends Component {

  render() {
    return (
      <div className="hello-container">Hello, World</div>
    );
  }

}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, { })(World);
