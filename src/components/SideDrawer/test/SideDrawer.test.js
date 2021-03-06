import React from 'react';
import { shallow } from 'enzyme';
import SideDrawer from '../SideDrawer';

describe('Test the SideDrawer Component', () => {
  it('should match snapshot', () => {
    const userRole = 'attendant';
    const wrapper = shallow(<SideDrawer show userRole={userRole} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    const userRole = 'admin';
    const wrapper = shallow(<SideDrawer show={false} userRole={userRole} />);
    expect(wrapper).toMatchSnapshot();
  });
});
