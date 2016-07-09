import React, { Component } from 'react';

const Display = (props) => {

  const { text, result } = props;
  return (
    <div id="display">
      <div id="result-text">
        {result}
      </div>
      <div id="current-text">
        {text}
      </div>
    </div>
  );
}

export default Display;
