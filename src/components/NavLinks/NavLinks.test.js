import React from 'react';
import { shallow } from 'enzyme';
import NavLinks from './index';

describe('Test the NavLinks Component', () => {
  it('should match snapshot', () => {
    const userRole = 'attendant';
    const wrapper = shallow(<NavLinks userRole={userRole} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    const userRole = 'admin';
    const wrapper = shallow(<NavLinks userRole={userRole} />);
    wrapper.instance().handleLogout();
    expect(wrapper).toMatchSnapshot();
  });
});
