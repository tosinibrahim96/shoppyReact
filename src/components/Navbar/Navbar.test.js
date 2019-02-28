import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';
import Component from '../AuthForm';

describe('Test the Navbar Component', () => {
  it('should match snapshot', () => {
    const userRole = 'attendant';
    const click = jest.fn();
    const wrapper = shallow(<Navbar displayPage={Component} click={click} userRole={userRole} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().sideDrawerOpen).toEqual(false);
    wrapper.instance().drawerToggleClickHandler();
    wrapper.instance().backdropClickHandler();
  });
});
