import React from 'react';
import Navbar from '../Navbar';
import CategoryComponent from '../../components/InfoCard';

export default function Category() {
  return (
    <Navbar
      displayPage={(
        <CategoryComponent
          nameToDisplay="categoryName"
          imageUrl="https://i.imgur.com/UBDlxxg.jpg"
          currentPage="category"
          description="this is a category description"
          userRole="admin"
        />
)}
    />
  );
}
