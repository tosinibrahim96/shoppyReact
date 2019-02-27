import React from 'react';
import { shallow } from 'enzyme';
import SideDrawer from '../SideDrawer';

describe('Test the SideDrawer Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SideDrawer show />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<SideDrawer show={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
