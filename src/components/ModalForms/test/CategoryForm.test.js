import React from 'react';
import { shallow } from 'enzyme';
import CategoryForm from '../CategoryForm';

describe('Test the CategoryForm Component', () => {
  it('should match snapshot', () => {
    const details = {
      nameToDisplay: 'John Doe',
      imageUrl: 'https://i.imgur.com/27DUH5b.jpg',
      description: 'admin@mail.com'
    };
    const wrapper = shallow(<CategoryForm details={details} />);
    expect(wrapper).toMatchSnapshot();
  });
});
