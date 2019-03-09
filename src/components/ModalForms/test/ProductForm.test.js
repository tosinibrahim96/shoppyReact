import React from 'react';
import { shallow } from 'enzyme';
import { ProductFormPage } from '../ProductForm';
import { productCategories } from '../../../actions/getCategoriesAction';
import { updateProduct } from '../../../actions/updateProductAction';
import { getAllProducts } from '../../../actions/getProductsAction';
import { addProduct } from '../../../actions/addProductAction';

describe('Test the ProductForm Component', () => {
  it('should match snapshot', () => {
    const details = {};
    const allCategories = {
      successResponse: [{ id: 2, name: 'categoryname1' }, { id: 2, name: 'categoryname1' }]
    };
    const wrapper = shallow(
      <ProductFormPage
        allCategories={allCategories}
        details={details}
        productCategories={productCategories}
        updateProduct={updateProduct}
        getAllProducts={getAllProducts}
        addProduct={addProduct}
      />
    );
    const event = {
      target: {
        name: 'name',
        value: 'pname'
      },
      preventDefault: () => {}
    };
    const value = 5;
    wrapper.instance().getAllCategories();
    wrapper.instance().handleFormChange(event);
    wrapper.instance().handleFormSubmit(event);
    wrapper.instance().handleSelectChange(event, { value });
    wrapper.instance().componentWillUnmount();
    expect(wrapper).toMatchSnapshot();
  });
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
        updateProduct={updateProduct}
        getAllProducts={getAllProducts}
        addProduct={addProduct}
      />
    );
    const event = {
      target: {
        name: 'name',
        value: 'pname',
        textContent: 'textXontent'
      },
      preventDefault: () => {}
    };
    const value = 9;
    wrapper.instance().getAllCategories();
    wrapper.instance().handleFormChange(event);
    wrapper.instance().handleFormSubmit(event);
    wrapper.instance().handleSelectChange(event, { value });
    wrapper.instance().componentWillUnmount();
    expect(wrapper).toMatchSnapshot();
  });
});
