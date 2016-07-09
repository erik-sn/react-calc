import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Button from '../../src/components/button';

describe('Button' , () => {
  let component;
  const props = {
    click: (input) => input,
    label: 'test',
  }

  beforeEach(() => {
    component = shallow(<Button />);
    component.setProps(props);
  });

  it('has a class of button', () => {
    expect(component.hasClass('button')).to.equal(true);     
  });

  it('has a click function that is fired on a click', () => {
    component.simulate('click'); 
  });

  it('has a label that matches its property', () => {
    expect(component.contains(props.label)).to.equal(true);
  });

});
