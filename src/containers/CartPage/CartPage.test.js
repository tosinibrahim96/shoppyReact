import React from 'react';
import { shallow } from 'enzyme';
import CartPage from './index';

describe('Test the Shopping Cart Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CartPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
