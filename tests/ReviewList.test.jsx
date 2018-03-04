/* global describe:true
   global mount:true
   global test:true
   global beforeEach:true
   global shallow:true
   global expect:true
*/

import React from 'react';
import ReviewList from '../client/src/components/ReviewList';

describe('ReviewList', () => {
  let props;
  let mountedReviewList;
  const reviewList = () => {
    if (!mountedReviewList) {
      mountedReviewList = mount(<ReviewList {...props} />);
    }
    return mountedReviewList;
  };

  beforeEach(() => {
    props = {
      display: undefined,
      filterNames: undefined,
      handleSortChange: undefined,
      handleFilterSelect: undefined,
    };
    mountedReviewList = undefined;
  });

  test('shallow render ReviewList component', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a div', () => {
    const divs = reviewList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  test('should render Sort component', () => {
    expect(reviewList().find('Sort').length).toBe(1);
  });

  test('should render Filter component', () => {
    expect(reviewList().find('Filter').length).toBe(1);
  });

  test('should render 1 ReviewListEntry component', () => {
    expect(reviewList().find('ReviewListEntry').length).toBe(1);
  });

});
