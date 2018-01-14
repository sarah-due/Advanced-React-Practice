import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Test Comment Box', () => {
  const component = renderComponent(CommentBox);

  it('has a class of comment_box', () => {
    expect(component).to.have.class('comment_box');
  })

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });
});
