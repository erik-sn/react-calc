import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Application from '../../src/components/application';

describe('Application' , () => {
  let component;

  const state = {
      display: '',
      result: '',
      negate: false,
  };

  beforeEach(() => {
    component = mount(<Application />);
    component.setState(state);
  });

  it('has a display', () => {
    expect(component.find('#display')).to.exist;     
  });

  it('has a number pad', () => {
    expect(component.find('#numpad')).to.exist;    
  });


});
