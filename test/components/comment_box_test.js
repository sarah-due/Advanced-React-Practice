import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Test Comment Box', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has a class of comment_box', () => {
    expect(component).to.have.class('comment_box');
  })

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });


  describe('entering text', () => {
    beforeEach(() => {
        component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in text area', () => {
      expect((component).find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect((component).find('textarea')).to.have.value('');
    })
  })

});
