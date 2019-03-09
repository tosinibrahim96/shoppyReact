import React from 'react';
import { shallow } from 'enzyme';
import { CategoryPage } from './index';
import { productCategories } from '../../actions/getCategoriesAction';
import { getUserInfo } from '../../helpers/jwtHelper';

describe('Test the Category Component', () => {
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
    const allCategories = {
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
      <CategoryPage productCategories={productCategories} allCategories={allCategories} />
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
    const allCategories = {
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
      <CategoryPage productCategories={productCategories} allCategories={allCategories} />
    );
    expect(result).toBeNull();
    expect(wrapper).toMatchSnapshot();
  });
});
