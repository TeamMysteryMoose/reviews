/* global describe:true
   global mount:true
   global test:true
   global beforeEach:true
   global shallow:true
   global expect:true
*/

import React from 'react';
import App from '../client/src/index.jsx';

describe('App', () => {
  let props;
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(<App {...props} />);
    }
    return mountedApp;
  };

  let wrapper;
  let instance;

  beforeEach(() => {
    props = {
      restaurantId: undefined,
    };
    mountedApp = undefined;

    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });

  test('shallow render App component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a div', () => {
    console.log(instance);
    const divs = app().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
