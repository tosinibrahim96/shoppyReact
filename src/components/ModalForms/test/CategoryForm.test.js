import React from 'react';
import { shallow } from 'enzyme';
import CategoryForm from '../CategoryForm';

describe('Test the CategoryForm Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CategoryForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
