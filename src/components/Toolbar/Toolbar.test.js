import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';
import Navbar from '../Navbar';

describe('Test the SideDrawer Component', () => {
  it('should match snapshot', () => {
    const drawerClickHandler = jest.fn;
    const wrapper = shallow(<Toolbar drawerClickHandler={drawerClickHandler} />);
    expect(wrapper).toMatchSnapshot();
  });
});
