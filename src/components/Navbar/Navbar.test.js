import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Navbar from './index';
import Component from '../AuthForm';

describe('Test the Navbar Component', () => {
  it('should match snapshot', () => {
    const click = jest.fn();
    const wrapper = shallow(<Navbar displayPage={Component} click={click} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().sideDrawerOpen).toEqual(false);
    wrapper.instance().drawerToggleClickHandler();
    wrapper.instance().backdropClickHandler();
  });
});
