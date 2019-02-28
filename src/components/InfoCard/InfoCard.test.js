import React from 'react';
import { shallow } from 'enzyme';
import AdminCards from './index';

describe('Test the AdminCards Component', () => {
  it('should match snapshot', () => {
    const userRole = 'attendant';
    const product = 'product';
    const wrapper = shallow(<AdminCards userRole={userRole} currentPage={product} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    const userRole = 'admin';
    const product = 'product';
    const wrapper = shallow(<AdminCards userRole={userRole} currentPage={product} />);
    expect(wrapper).toMatchSnapshot();
  });
});
