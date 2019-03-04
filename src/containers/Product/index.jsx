import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import ProductComponent from '../../components/InfoCard';
import { getUserInfo } from '../../helpers/jwtHelper';

export default class Product extends Component {
  render() {
    const result = getUserInfo();
    if (!result) {
      return <Redirect to="/login" />;
    }
    return (
      <Navbar
        displayPage={(
          <ProductComponent
            nameToDisplay="productName"
            imageUrl="https://i.imgur.com/P6Qcgi4.jpg"
            currentPage="product"
            description="this is a product description"
            userRole={result.userRole}
          />
)}
      />
    );
  }
}
