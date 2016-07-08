import { renderComponent, expect } from '../test_helper';

import Numpad from '../../src/components/numpad';

describe('Lets write tests!' , () => {

  describe('Hello' , () => {
    let component;
    const props = {};

    beforeEach(() => {
      component = renderComponent(Numpad, props);
    });

    it('renders something', () => {
      expect(component).to.exist;
    });


  });
  
});
