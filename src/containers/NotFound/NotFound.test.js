import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './index';

describe('Test the NotFound Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
