import React from 'react';
import { shallow } from 'enzyme';
import Category from './index';

describe('Test the Category Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Category />);
    expect(wrapper).toMatchSnapshot();
  });
});
