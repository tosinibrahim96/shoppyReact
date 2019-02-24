import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './index';

describe('Test the 404 Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
