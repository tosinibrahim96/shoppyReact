import React, { Component } from 'react';
import Navbar from '../Navbar';
import ProductComponent from '../../components/InfoCard';
import { getUserInfo } from '../../helpers/jwtHelper';

export default class Product extends Component {
  render() {
    const result = getUserInfo();
    const { userRole } = result;
    return (
      <Navbar
        displayPage={(
          <ProductComponent
            nameToDisplay="productName"
            imageUrl="https://i.imgur.com/P6Qcgi4.jpg"
            currentPage="product"
            description="this is a product description"
            userRole={userRole}
          />
)}
      />
    );
  }
}
