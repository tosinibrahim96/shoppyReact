import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';

describe('Test the SideDrawer Component', () => {
  it('should match snapshot', () => {
    const drawerClickHandler = jest.fn;
    const userRole = 'attendant';
    const wrapper = shallow(
      <Toolbar drawerClickHandler={drawerClickHandler} userRole={userRole} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
