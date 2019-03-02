import React from 'react';
import ProductForm from '../components/ModalForms/ProductForm';
import CategoryForm from '../components/ModalForms/CategoryForm';
import AttendantForm from '../components/ModalForms/AttendantForm';

export default function SelectModalForm(currentPage) {
  switch (currentPage) {
    case 'product':
      return <ProductForm />;
    case 'category':
      return <CategoryForm />;
    case 'attendant':
      return <AttendantForm />;
    default:
      break;
  }
}
