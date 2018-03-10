/* global describe:true
   global mount:true
   global test:true
   global beforeEach:true
   global shallow:true
   global expect:true
*/

import React from 'react';
import Sort from '../client/src/components/Sort';

describe('Sort', () => {
  let props;
  let mountedSort;
  const sort = () => {
    if (!mountedSort) {
      mountedSort = mount(<Sort {...props} />);
    }
    return mountedSort;
  };

  let wrapper;
  let instance;

  beforeEach(() => {
    props = {
      handleSortChange: undefined,
    };
    mountedSort = undefined;
    wrapper = undefined;
    instance = undefined;
  });

  test('shallow render Sort component', () => {
    const wrapper = shallow(<Sort />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a div', () => {
    const divs = sort().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  test('should render Dropdown', () => {
    expect(sort().find('Dropdown').length).toBe(1);
  });

  test('default state should be newest', () => {
    expect(sort().state().value).toBe('newest');
    expect(sort().state().label).toBe('Newest');
  });

  test('should update state on change and invoke handeSortChange', () => {
    wrapper = shallow(<Sort handleSortChange={ jest.fn() } />);
    instance = wrapper.instance();
    wrapper.find('Dropdown').simulate('change', { value : 'newest', label: 'Newest' });
    expect(instance.state.value).toBe('newest');
    expect(instance.state.label).toBe('Newest');
    expect(instance.props.handleSortChange).toBeCalled();
  });
});
