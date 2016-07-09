import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Numpad from '../../src/components/numpad';

describe('Numpad' , () => {
  let component;
  const click = () => 'testing!';

  beforeEach(() => {
    component = mount(<Numpad click={click} />);
  });

  it('has 6 rows', () => {
    expect(component.find('.button-row')).to.have.length(6);
  });

  it('has 23 buttons', () => { 
    expect(component.find('.button')).to.have.length(23);
  });
  
});
