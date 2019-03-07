import React from 'react';
import { shallow } from 'enzyme';
import AttendantForm from '../AttendantForm';

describe('Test the AttendantForm Component', () => {
  it('should match snapshot', () => {
    const details = {
      nameToDisplay: 'John Doe',
      imageUrl: 'https://i.imgur.com/27DUH5b.jpg',
      description: 'admin@mail.com',
      mobileNumber: '08076543241'
    };

    const wrapper = shallow(<AttendantForm details={details} />);
    expect(wrapper).toMatchSnapshot();
  });
});
