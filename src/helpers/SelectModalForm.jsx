import React from 'react';
import ProductForm from '../components/ModalForms/ProductForm';
import CategoryForm from '../components/ModalForms/CategoryForm';
import AttendantForm from '../components/ModalForms/AttendantForm';

export default function SelectModalForm(currentPage, props = {}) {
  switch (currentPage) {
    case 'product':
      return <ProductForm details={props} />;
    case 'category':
      return <CategoryForm details={props} />;
    case 'attendant':
      return <AttendantForm details={props} />;
    default:
      break;
  }
}
