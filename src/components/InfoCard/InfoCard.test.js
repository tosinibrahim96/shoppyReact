import React from 'react';
import { shallow } from 'enzyme';
import AdminCards from './index';

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
    const wrapper = shallow(<AdminCards userRole={userRole} currentPage={product} />);
    wrapper.find('p').simulate('click');
    expect(wrapper.state('open')).toBe(true);
    wrapper.instance().onCloseModal();
    wrapper.instance().onOpenModal();
    wrapper.instance().displayAdminButtons();
    wrapper.instance().displayAddToCartButton();
  });
  it('should match snapshot', () => {
    const userRole = 'attendant';
    const product = 'product';
    const wrapper = shallow(<AdminCards userRole={userRole} currentPage={product} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test the AdminCards Component', () => {
  it('should redirect to login', () => {
    const userRole = 'attendant';
    const product = 'product';
    const wrapper = shallow(<AdminCards userRole={userRole} currentPage={product} />);
    expect(wrapper).toMatchSnapshot();
  });
});
