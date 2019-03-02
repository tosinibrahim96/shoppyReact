import React from 'react';
import Navbar from '../Navbar';
import AttendantComponent from '../../components/InfoCard';

export default function Category() {
  return (
    <Navbar
      displayPage={(
        <AttendantComponent
          nameToDisplay="attendantName"
          imageUrl="https://i.imgur.com/344U6oc.jpg"
          currentPage="attendant"
          description="attendant@mail.com"
          mobileNumber="08034563432"
          userRole="admin"
        />
)}
    />
  );
}