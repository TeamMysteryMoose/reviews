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

  let wrapper;
  let instance;

  beforeEach(() => {
    props = {
      filter: undefined,
      id: undefined,
      handleFilterSelect: undefined,
    };
    mountedFilter = undefined;

    wrapper = undefined;
    instance = undefined;
  });

  test('shallow render Filter component', () => {
    wrapper = shallow(<Filter />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a span', () => {
    const spans = filter().find('span');
    expect(spans.length).toBeGreaterThan(0);
  });

  test('should update state to salad by simulating change and invoke handleFilterSelect', () => {
    wrapper = shallow(<Filter handleFilterSelect={ jest.fn() } />);
    instance = wrapper.instance();
    wrapper.find('input').simulate('change', { target: { checked : true, value: 'salad' } });
    expect(instance.state.value).toBe('salad');
    expect(instance.props.handleFilterSelect).toBeCalled();
  });
});
