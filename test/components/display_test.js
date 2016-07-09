import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Display from '../../src/components/display';

describe('Display' , () => {
  let component;
  const props = {
    text: '1 + 1 - 1',
    result: '1',
  }

  beforeEach(() => {
    component = mount(<Display />);
    component.setProps(props);
  });

  it('contains a result-text div with the result props inside', () => {
    expect(component.find('#result-text')).to.have.length(1);
    expect(component.find('#result-text').text()).to.equal(props.result);     
  });

  it('contains a current-text div with the text props inside', () => {
    expect(component.find('#current-text')).to.have.length(1);
    expect(component.find('#current-text').text()).to.equal(props.text);
  });

});
