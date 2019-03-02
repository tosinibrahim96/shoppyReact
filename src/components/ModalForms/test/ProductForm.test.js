import React from 'react';
import { shallow } from 'enzyme';
import ProductForm from '../ProductForm';

describe('Test the ProductForm Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ProductForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
