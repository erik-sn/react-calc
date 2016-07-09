import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Modal from '../../src/components/modal';

describe('Modal', () => {
  let component;
  const props = {
    close: () => 1,
    text: 'test text',
  };

  beforeEach(() => {
    component = shallow(<Modal />);
    component.setProps(props);
  });

  it('has a class of modal', () => {
    expect(component.hasClass('modal')).to.equal(true);
  });

  it('has a close button function that is fired on a click', () => {
    (component.find('#modal-close')).simulate('click');
  });

  it('has a label that matches its property', () => {
    expect(component.contains(props.text)).to.equal(true);
  });
});
