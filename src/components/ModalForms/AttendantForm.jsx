import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { addStoreAttendant } from '../../actions/addAttendantAction';
import { storeAttendants } from '../../actions/getAttendantsAction';
import './ModalForms.scss';

class AttendantForm extends Component {
  state = {
    userDetails: {
      email: '',
      image_url: '',
      first_name: '',
      mobile_number: '',
      password: ''
    }
  };

  componentWillUnmount = () => {
    clearTimeout(this.state.timeoutId);
  };

  handleFormChange = (event) => {
    const { userDetails } = this.state;
    const { name, value } = event.target;
    userDetails[name] = value;
    this.setState({
      userDetails
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { userDetails } = this.state;
    this.props.addStoreAttendant(userDetails);
    const timeoutId = setTimeout(() => this.props.storeAttendants(), 500);
    this.setState({ timeoutId });
  };

  displayFormContent = () => {
    const { email, image_url, first_name, mobile_number, password } = this.state.userDetails;
    return (
      <Fragment>
        <Form.Field className="formField">
          <input
            placeholder="Email"
            typeof="email"
            value={email}
            name="email"
            onChange={this.handleFormChange}
          />
        </Form.Field>
        <Form.Field className="formField">
          <input
            placeholder="Password"
            typeof="password"
            value={password}
            name="password"
            onChange={this.handleFormChange}
          />
        </Form.Field>
        <Form.Field className="formField">
          <input
            placeholder="Attendant Name"
            value={first_name}
            name="first_name"
            onChange={this.handleFormChange}
          />
        </Form.Field>
        <Form.Field className="formField">
          <input
            placeholder="Mobile Number"
            typeof="tel"
            value={mobile_number}
            name="mobile_number"
            onChange={this.handleFormChange}
          />
        </Form.Field>
        <Form.Field className="formField">
          <input
            placeholder="Image URL (example:https://exampleimageurl.jpg)"
            typeof="url"
            value={image_url}
            name="image_url"
            onChange={this.handleFormChange}
          />
          <a target="_blank" rel="noopener noreferrer" href="https://imgur.com/">
            Upload image here
          </a>
        </Form.Field>
      </Fragment>
    );
  };

  render() {
    return (
      <Form className="modalForm" onSubmit={this.handleFormSubmit}>
        {this.displayFormContent()}
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export { AttendantForm as AttendantFormPage };
export default connect(
  mapStateToProps,
  { addStoreAttendant, storeAttendants }
)(AttendantForm);
