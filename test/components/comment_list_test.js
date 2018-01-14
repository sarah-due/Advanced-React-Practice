import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('test CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['Test comment', 'Test comment 2'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows the comment that is submitted', () => {
    expect(component).to.contain('Test comment');
    expect(component).to.contain('Test comment 2');
  });
});
