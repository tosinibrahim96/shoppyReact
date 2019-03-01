import React from 'react';
import Navbar from '../Navbar';
import ProductComponent from '../../components/InfoCard';

export default function Product() {
  return (
    <Navbar
      displayPage={(
        <ProductComponent
          nameToDisplay="productName"
          imageUrl="https://i.imgur.com/P6Qcgi4.jpg"
          currentPage="product"
          description="this is a product description"
          userRole="admin"
        />
)}
    />
  );
}
