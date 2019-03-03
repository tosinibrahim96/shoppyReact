import React, { Component } from 'react';
import Navbar from '../Navbar';
import AttendantComponent from '../../components/InfoCard';
import { getUserInfo } from '../../helpers/jwtHelper';
import Unauthorized from '../../components/Unauthorized';

export default class Attendant extends Component {
  render() {
    const result = getUserInfo();
    const { userRole } = result;
    return userRole === 'admin' ? (
      <Navbar
        displayPage={(
          <AttendantComponent
            nameToDisplay="attendantName"
            imageUrl="https://i.imgur.com/344U6oc.jpg"
            currentPage="attendant"
            description="attendant@mail.com"
            mobileNumber="08034563432"
            userRole={userRole}
          />
)}
      />
    ) : (
      <Unauthorized />
    );
  }
}
