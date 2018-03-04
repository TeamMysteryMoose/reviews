/* global describe:true
   global mount:true
   global test:true
   global beforeEach:true
   global shallow:true
   global expect:true
*/

import React from 'react';
import Filter from '../client/src/components/Filter';

describe('Filter', () => {
  let props;
  let mountedFilter;
  const filter = () => {
    if (!mountedFilter) {
      mountedFilter = mount(<Filter {...props} />);
    }
    return mountedFilter;
  };

  beforeEach(() => {
    props = {
      filter: undefined,
      id: undefined,
      handleFilterSelect: undefined,
    };
    mountedFilter = undefined;
  });

  test('shallow render Filter component', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a span', () => {
    const spans = filter().find('span');
    console.log(spans);
    expect(spans.length).toBeGreaterThan(0);
  });
});
