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
    Object.defineProperty(window.location, 'reload', {
      configurable: true
    });
    window.location.reload = jest.fn();
    const wrapper = shallow(<NavLinks userRole={userRole} />);
    wrapper.instance().handleLogout();
    window.location.reload();
    expect(window.location.reload).toHaveBeenCalled();
    window.location.reload.mockRestore();
    expect(wrapper).toMatchSnapshot();
  });
});
