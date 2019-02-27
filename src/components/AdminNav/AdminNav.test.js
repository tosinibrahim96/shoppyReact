import React from 'react';
import { shallow } from 'enzyme';
import AdminNav from './index';

describe('Test the AdminNav Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AdminNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
