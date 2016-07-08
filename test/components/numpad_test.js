import { renderComponent, expect } from '../test_helper';
import Numpad from '../../src/components/numpad';

describe('Numpad' , () => {
  let component;
  const click = () => { return 'test working'}
  const props = {click: click};

  beforeEach(() => {
    component = renderComponent(Numpad, props);
  });

  it('renders something', () => {
    expect(component).to.exist;     
  });

  it('has 6 rows', () => {
    expect(component.find('.button-row').length).to.equal(6);
  });

  it('has 23 buttons', () => { 
    expect(component.find('.button').length).to.equal(23);
  });

  it('does something on click', () => {
    console.log(component.click())
  });
  
});
