import React from 'react';
import { shallow } from 'enzyme';
import AttendantNav from './index';

describe('Test the AttendantNav Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AttendantNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
