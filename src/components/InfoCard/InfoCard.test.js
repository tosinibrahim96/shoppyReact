import React from 'react';
import { shallow, mount } from 'enzyme';
import { InfoCardsPage } from './index';
import { deleteProductCategory } from '../../actions/deleteCategoryAction';
import { deleteProduct } from '../../actions/deleteProductAction';
import { deleteStoreAttendant } from '../../actions/deleteAttendantAction';

const id = 5;

describe('Test the AdminCards Component', () => {
  beforeEach(() => {
    localStorage.setItem(
      'Authentication',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlMb2FkIjp7ImlkIjoiN2NhM2JjYzktZTMzOS00OTcwLTk0YjMtYjI5YTg1N2ViM2ExIiwicm9sZSI6W119LCJpYXQiOjE1NTE0NjE4OTcsImV4cCI6MTU1MTU0ODI5N30.IzGf0L_pH9W_gN2AC2Ee5aWqwSO4l3fa46ZrcyUbMKU'
    );
  });
  afterEach(() => {
    localStorage.removeItem('Authentication');
  });

  it('should match snapshot', () => {
    const userRole = 'admin';
    const product = 'product';
    const attendant = 'attendant';
    const wrapper = shallow(<InfoCardsPage userRole={userRole} currentPage={product} id={id} />);
    wrapper.instance().onCloseModal();
    wrapper.instance().onOpenModal();
    wrapper.instance().displayAdminButtons();
    wrapper.instance().deleteContent();
    wrapper.instance().displayAdminButtons();
    wrapper.instance().displayAddToCartButton();
  });

  it('should match snapshot', () => {
    const userRole = 'admin';
    const product = 'product';
    const category = 'category';
    const attendant = 'attendant';
    const wrapper = shallow(
      <InfoCardsPage
        userRole={userRole}
        currentPage={product}
        id={id}
        deleteProduct={deleteProduct}
        deleteProductCategory={deleteProductCategory}
        deleteStoreAttendant={deleteStoreAttendant}
      />
    );
    wrapper.instance().deleteContent(product);
    wrapper.instance().deleteContent(category);
    wrapper.instance().deleteContent(attendant);
    wrapper.instance().openDeleteModal();
    wrapper.instance().closeDeleteModal();
  });

  it('should match snapshot', () => {
    const userRole = 'attendant';
    const product = 'product';
    const wrapper = shallow(<InfoCardsPage userRole={userRole} currentPage={product} id={id} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test the AdminCards Component', () => {
  it('should redirect to login', () => {
    const props = {
      nameToDisplay: 'John Doe',
      imageUrl: 'https://i.imgur.com/27DUH5b.jpg',
      description: 'admin@mail.com',
      mobileNumber: '08076543241'
    };
    const userRole = 'admin';
    const product = 'product';
    const wrapper = shallow(
      <InfoCardsPage userRole={userRole} currentPage={product} {...props} id={id} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test the AdminCards Component', () => {
  it('should redirect to login', () => {
    const props = {
      nameToDisplay: 'John Doe',
      imageUrl: 'https://i.imgur.com/27DUH5b.jpg',
      description: 'admin@mail.com',
      mobileNumber: '08076543241'
    };

    const userRole = 'attendant';
    const product = 'product';
    const wrapper = shallow(
      <InfoCardsPage userRole={userRole} currentPage={product} {...props} id={id} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
