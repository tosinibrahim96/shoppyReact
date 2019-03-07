import React from 'react';
import { shallow } from 'enzyme';
import { ProductFormPage } from '../ProductForm';
import { productCategories } from '../../../actions/getCategoriesAction';

describe('Test the ProductForm Component', () => {
  it('should match snapshot', () => {
    const details = {
      nameToDisplay: 'John Doe',
      imageUrl: 'https://i.imgur.com/27DUH5b.jpg',
      description: 'admin@mail.com',
      productPrice: 300,
      productQuantity: 3
    };
    const allCategories = {
      successResponse: [{ id: 2, name: 'categoryname1' }, { id: 2, name: 'categoryname1' }]
    };
    const wrapper = shallow(
      <ProductFormPage
        allCategories={allCategories}
        details={details}
        productCategories={productCategories}
      />
    );
    const event = {};
    wrapper.instance().getAllCategories();
    expect(wrapper).toMatchSnapshot();
  });
});
