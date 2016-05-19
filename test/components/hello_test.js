import { renderComponent, expect } from '../test_helper';

import Hello from '../../src/components/hello';
import World from '../../src/components/world';

describe('Lets write tests!' , () => {

  describe('Hello' , () => {
    let component;
    const props = {};
    const state = {};

    beforeEach(() => {
      component = renderComponent(Hello, props, state);
    });

    it('renders something', () => {
      expect(component).to.exist;
    });


  });

  describe('World' , () => {
    let component;
    const props = {};
    const state = {};

    beforeEach(() => {
      component = renderComponent(World, props, state);
    });

    it('renders something', () => {
      expect(component).to.exist;
    });

  });
  
});
