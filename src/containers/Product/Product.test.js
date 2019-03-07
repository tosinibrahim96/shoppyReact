import React from 'react';
import { shallow } from 'enzyme';
import { ProductPage } from './index';
import { getAllProducts } from '../../actions/getProductsAction';
import { getUserInfo } from '../../helpers/jwtHelper';

describe('Test the Product Component', () => {
  beforeAll(() => {
    localStorage.setItem(
      'Authentication',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlMb2FkIjp7ImlkIjoiN2NhM2JjYzktZTMzOS00OTcwLTk0YjMtYjI5YTg1N2ViM2ExIiwicm9sZSI6W119LCJpYXQiOjE1NTE0NjE4OTcsImV4cCI6MTU1MTU0ODI5N30.IzGf0L_pH9W_gN2AC2Ee5aWqwSO4l3fa46ZrcyUbMKU'
    );
  });
  afterEach(() => {
    localStorage.removeItem('Authentication');
  });
  it('should match snapshot', () => {
    const allProducts = {
      successResponse: [
        {
          id: '1',
          email: 's@mail.com',
          image_url: 'imageurl',
          first_name: 'welcome'
        }
      ]
    };
    const wrapper = shallow(
      <ProductPage getAllProducts={getAllProducts} allProducts={allProducts} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test the Attendant Component', () => {
  beforeAll(() => {});
  afterEach(() => {
    localStorage.removeItem('Authentication');
  });
  it('should match snapshot', () => {
    const result = getUserInfo();
    const allProducts = {
      successResponse: [
        {
          id: '1',
          email: 's@mail.com',
          image_url: 'imageurl',
          first_name: 'welcome'
        }
      ]
    };
    const wrapper = shallow(
      <ProductPage getAllProducts={getAllProducts} allProducts={allProducts} />
    );
    expect(result).toBeNull();
    expect(wrapper).toMatchSnapshot();
  });
});
