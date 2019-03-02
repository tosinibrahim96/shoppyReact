import React from 'react';
import { shallow } from 'enzyme';
import AttendantForm from '../AttendantForm';

describe('Test the AttendantForm Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AttendantForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
