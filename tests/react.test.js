import React from 'react';

const Label = ({ text = 'hi'}) => (
  <div>
    { text }
  </div>
);

//test('render a label', () => {
  //const wrapper = shallow(
    //<Label>Hello Jest!</Label>
  //);
  //expect(wrapper).toMatchSnapshot();
//});

test('render a label with prop text', () => {
  const wrapper = shallow(
    <Label />
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.text()).toEqual('hi');
});

//test('render a small label', () => {
  //const wrapper = shallow(
    //<Label small>Hello Jest!</Label>
  //);
  //expect(wrapper).toMatchSnapshot();
//});

//test('render a grayish label', () => {
  //const wrapper = shallow(
    //<Label light>Hello Jest!</Label>
  //);
  //expect(wrapper).toMatchSnapshot();
//});
