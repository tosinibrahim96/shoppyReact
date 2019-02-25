import React from 'react';
import { shallow } from 'enzyme';
import AuthForm from './index';

describe('Test the Login Form Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AuthForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
