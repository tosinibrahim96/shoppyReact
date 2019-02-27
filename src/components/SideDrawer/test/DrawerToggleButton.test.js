import React from 'react';
import { shallow } from 'enzyme';
import DrawerToggleButton from '../DrawerToggleButton';
import Navbar from '../../Navbar';

describe('Test the DrawerToggleButton Component', () => {
  it('should match snapshot', () => {
    const click = jest.fn();
    const wrapper = shallow(<DrawerToggleButton click={click} />);
    expect(wrapper).toMatchSnapshot();
  });
});
