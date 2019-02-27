import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

describe('Test the AdminNav Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
