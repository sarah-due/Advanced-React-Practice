import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('Test the App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('Shows a comment box', () => {
    expect((component).find('.comment_box')).to.exist;
  });

  it('Shows a comment list component', () => {
    expect((component).find('.comment_list')).to.exist;
  });

});
