import React from 'react';
import { shallow } from 'enzyme';
import SelectModalForm from '../SelectModalForm';
import ProductForm from '../../components/ModalForms/ProductForm';
import CategoryForm from '../../components/ModalForms/CategoryForm';
import AttendantForm from '../../components/ModalForms/AttendantForm';

describe('Test the SelectModalForm Component', () => {
  const props = {
    nameToDisplay: 'first_name',
    imageUrl: 'image_url',
    currentPage: 'attendant',
    description: 'email',
    mobileNumber: 'mobile_number',
    userRole: 'userRole'
  };
  const noProps = {};
  it('should return product form component', () => {
    const product = 'product';
    const result = SelectModalForm(product, props);
    expect(result).toEqual(<ProductForm details={props} />);
  });
  it('should return category form component', () => {
    const category = 'category';
    const result = SelectModalForm(category, props);
    expect(result).toEqual(<CategoryForm details={props} />);
  });
  it('should return attendant form component', () => {
    const attendant = 'attendant';
    const result = SelectModalForm(attendant, props);
    expect(result).toEqual(<AttendantForm details={props} />);
  });
  it('should return attendant form component', () => {
    const result = SelectModalForm(null);
    expect(result).toEqual(undefined);
  });
  it('should return product form component', () => {
    const product = 'product';
    const result = SelectModalForm(product, {});
    expect(result).toEqual(<ProductForm details={noProps} />);
  });
  it('should return category form component', () => {
    const category = 'category';
    const result = SelectModalForm(category, {});
    expect(result).toEqual(<CategoryForm details={noProps} />);
  });
  it('should return attendant form component', () => {
    const attendant = 'attendant';
    const result = SelectModalForm(attendant, {});
    expect(result).toEqual(<AttendantForm details={noProps} />);
  });
  it('should return attendant form component', () => {
    const result = SelectModalForm(null);
    expect(result).toEqual(undefined);
  });
});
