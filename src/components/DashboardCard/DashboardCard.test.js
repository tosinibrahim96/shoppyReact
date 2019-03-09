import React from 'react';
import { shallow } from 'enzyme';
import { InfoCardPage } from './index';
import { productCategories } from '../../actions/getCategoriesAction';
import { getAllProducts } from '../../actions/getProductsAction';
import { storeAttendants } from '../../actions/getAttendantsAction';
import { getAllSales } from '../../actions/getTotalSalesAction';

describe('Test the DasboardCard Component', () => {
  beforeAll(() => {
    localStorage.setItem(
      'Authentication',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlMb2FkIjp7ImlkIjoiN2NhM2JjYzktZTMzOS00OTcwLTk0YjMtYjI5YTg1N2ViM2ExIiwicm9sZSI6W119LCJpYXQiOjE1NTE0NjE4OTcsImV4cCI6MTU1MTU0ODI5N30.IzGf0L_pH9W_gN2AC2Ee5aWqwSO4l3fa46ZrcyUbMKU'
    );
  });
  afterEach(() => {
    localStorage.removeItem('Authentication');
  });
  const allCategories = { successResponse: { length: 0 } };
  const allProducts = { successResponse: { length: 0 } };
  const allAttendants = { successResponse: { length: 0 } };
  it('should match snapshot', () => {
    const wrapper = shallow(
      <InfoCardPage
        productCategories={productCategories}
        getAllProducts={getAllProducts}
        storeAttendants={storeAttendants}
        getAllSales={getAllSales}
        allCategories={allCategories}
        allProducts={allProducts}
        allAttendants={allAttendants}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test the DasboardCard Component', () => {
  it('should match snapshot', () => {
    const allCategories = { successResponse: { length: 3 } };
    const allProducts = { successResponse: { length: 3 } };
    const allAttendants = { successResponse: { length: 3 } };
    const wrapper = shallow(
      <InfoCardPage
        productCategories={productCategories}
        getAllProducts={getAllProducts}
        storeAttendants={storeAttendants}
        getAllSales={getAllSales}
        allCategories={allCategories}
        allProducts={allProducts}
        allAttendants={allAttendants}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
