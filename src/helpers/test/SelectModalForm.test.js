import React from 'react';
import { shallow } from 'enzyme';
import SelectModalForm from '../SelectModalForm';
import ProductForm from '../../components/ModalForms/ProductForm';
import CategoryForm from '../../components/ModalForms/CategoryForm';
import AttendantForm from '../../components/ModalForms/AttendantForm';

describe('Test the SelectModalForm Component', () => {
  it('should return product form component', () => {
    const product = 'product';
    const result = SelectModalForm(product);
    expect(result).toEqual(<ProductForm />);
  });
  it('should return category form component', () => {
    const category = 'category';
    const result = SelectModalForm(category);
    expect(result).toEqual(<CategoryForm />);
  });
  it('should return attendant form component', () => {
    const attendant = 'attendant';
    const result = SelectModalForm(attendant);
    expect(result).toEqual(<AttendantForm />);
  });
  it('should return attendant form component', () => {
    const result = SelectModalForm(null);
    expect(result).toEqual(undefined);
  });
});
