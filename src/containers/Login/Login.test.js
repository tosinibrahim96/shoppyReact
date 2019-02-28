import React from 'react';
import { shallow } from 'enzyme';
import Login from './index';

describe('Test the Login Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
