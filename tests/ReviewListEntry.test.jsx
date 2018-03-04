/* global describe:true
   global mount:true
   global test:true
   global beforeEach:true
   global shallow:true
   global expect:true
*/

import React from 'react';
import ReviewListEntry from '../client/src/components/ReviewListEntry';

describe('ReviewListEntry', () => {
  let props;
  let mountedReviewListEntry;
  const reviewListEntry = () => {
    if (!mountedReviewListEntry) {
      mountedReviewListEntry = mount(<ReviewListEntry {...props} />);
    }
    return mountedReviewListEntry;
  };

  beforeEach(() => {
    props = {
      review: undefined,
    };
    mountedReviewListEntry = undefined;
  });

  test('shallow render ReviwListEntry component', () => {
    const wrapper = shallow(<ReviewListEntry />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a div', () => {
    const divs = reviewListEntry().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  test('should have user info text in div', () => {
    const div = reviewListEntry().find('div.col.user-info');
    expect(div.text()).toBe('OpenTable Diner (New York, NY)');
  });

  test('should have 5 red-star divs', () => {
    const divs = reviewListEntry().find('div.red-star');
    expect(divs.length).toBe(5);
  });

});
