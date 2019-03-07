import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import AttendantComponent from '../../components/InfoCard';
import { getUserInfo } from '../../helpers/jwtHelper';
import { storeAttendants } from '../../actions/getAttendantsAction';
import Unauthorized from '../../components/Unauthorized';

class Attendant extends Component {
  componentDidMount = () => {
    this.props.storeAttendants();
  };

  render() {
    const { successResponse } = this.props.allAttendants;
    const result = getUserInfo();
    if (!result) {
      return <Redirect to="/login" />;
    }

    return result.userRole === 'admin' ? (
      <Navbar
        displayPage={successResponse.map(({ id, email, image_url, mobile_number, first_name }) => (
          <AttendantComponent
            key={id}
            id={id}
            nameToDisplay={first_name}
            imageUrl={image_url}
            currentPage="attendant"
            description={email}
            mobileNumber={mobile_number}
            userRole={result.userRole}
          />
        ))}
      />
    ) : (
      <Unauthorized />
    );
  }
}

const mapStateToProps = state => ({
  allAttendants: state.allAttendants
});

export { Attendant as AttendantPage };
export default connect(
  mapStateToProps,
  { storeAttendants }
)(Attendant);
