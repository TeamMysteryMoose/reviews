/* global describe:true
   global test:true
   global beforeEach:true
   global shallow:true
   global expect:true
   global jest:true
*/

import React from 'react';
import App from '../client/src/index';
import jsonReviews from '../utilities/jsonReviews.json';

describe('App', () => {
  let wrapper;
  let instance;
  const { getReviews } = App.prototype;

  beforeEach(() => {
    App.prototype.getReviews = getReviews;
    wrapper = undefined;
    instance = undefined;
  });

  test('shallow render App component', () => {
    App.prototype.getReviews = jest.fn();
    wrapper = shallow(<App />);
    instance = wrapper.instance();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a div', () => {
    App.prototype.getReviews = jest.fn();
    wrapper = shallow(<App />);
    instance = wrapper.instance();
    const divs = wrapper.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  test('should set filter state props correctly', () => {
    App.prototype.getReviews = jest.fn();
    wrapper = shallow(<App />);
    instance = wrapper.instance();
    const reviews = [{ keywords: ['salad', 'steak'] }];
    instance.setFilters(reviews);
    expect(instance.state.filters).toEqual({ salad: false, steak: false });
    expect(instance.state.filterNames).toEqual(['salad', 'steak']);
  });

  test('should sort display reviews array newest', () => {
    App.prototype.getReviews = jest.fn();
    wrapper = shallow(<App />);
    instance = wrapper.instance();
    instance.setState({
      display: jsonReviews.slice(0, 2).reverse()
    });
    instance.handleSortChange('newest');
    expect(instance.state.display).toEqual(jsonReviews.slice(0, 2));
  });

  test('should filter reviews based on chicken keyword', () => {
    App.prototype.getReviews = jest.fn();
    wrapper = shallow(<App />);
    instance = wrapper.instance();
    instance.setState({
      reviews: jsonReviews.slice(5, 15)
    });
    instance.handleFilterSelect('chicken', true);
    expect(instance.state.display).toEqual(jsonReviews.slice(10, 15));
  });
});
