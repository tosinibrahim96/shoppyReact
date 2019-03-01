import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

describe('Test the Home Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
