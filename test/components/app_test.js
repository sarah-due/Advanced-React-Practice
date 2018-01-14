import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('Test the App', () => {
  it('Shows the correct test', () => {
    const component = renderComponent(App);
    expect(component).to.contain('React simple starter');
  });
});
