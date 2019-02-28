import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';

describe('Test the Navbar Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Navbar displayPage={Navbar} userRole="admin" />);
    expect(wrapper).toMatchSnapshot();
  });
});
