import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCart from './index';

describe('Test the Shopping Cart Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ShoppingCart />);
    expect(wrapper).toMatchSnapshot();
  });
});
