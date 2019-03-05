import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import CategoryComponent from '../../components/InfoCard';
import { getUserInfo } from '../../helpers/jwtHelper';

export default class Category extends Component {
  render() {
    const result = getUserInfo();
    if (!result) {
      return <Redirect to="/login" />;
    }
    return (
      <Navbar
        displayPage={(
          <CategoryComponent
            nameToDisplay="categoryName"
            imageUrl="https://i.imgur.com/UBDlxxg.jpg"
            currentPage="category"
            description="this is a category description"
            userRole={result.userRole}
          />
)}
      />
    );
  }
}
