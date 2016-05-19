import { renderComponent, expect } from '../test_helper';
import Hello from '../../src/components/hello';

describe('Hello' , () => {
  let component;
  let props = {};
  let state = {};

  beforeEach(() => {
    component = renderComponent(App, props, state);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

});

