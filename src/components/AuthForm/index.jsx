import React, { Component, Fragment } from 'react';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import logo from './images/logo.png';
import background from './images/background.png';
import { userLogin } from '../../actions/authAction';
import { getUserInfo } from '../../helpers/jwtHelper';
import '../../partial-styles/responsive.scss';
import './AuthForm.scss';

class AuthForm extends Component {
  state = {
    loginDetails: {
      email: '',
      password: ''
    }
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    this.props.userLogin(this.state.loginDetails);
  };

  handleChange = (event) => {
    const { loginDetails } = this.state;
    const { type, value } = event.target;
    loginDetails[type] = value;
    this.setState({
      loginDetails
    });
  };

  createLoginForm = () => (
    <Form className="loginForm" onSubmit={this.handleLoginSubmit}>
      <Form.Field className="loginField">
        <input
          placeholder="Email"
          id="userEmail"
          type="email"
          required
          onChange={this.handleChange}
        />
      </Form.Field>
      <Form.Field className="loginField">
        <input
          placeholder="Password"
          id="userPassword"
          type="password"
          required
          onChange={this.handleChange}
        />
      </Form.Field>
      <Button type="submit" className="loginButton">
        Submit
      </Button>
    </Form>
  );

  render() {
    const userInfo = getUserInfo();
    if (userInfo) {
      return <Redirect to="/" />;
    }
    return (
      <Fragment>
        <img src={logo} alt="store logo" className="storeLogo" />
        <div className="row formContainer">
          <div className="col-5 col-s-5 ">{this.createLoginForm()}</div>
          <img src={background} alt="Background graphics" className="col-5 col-s-5 customer" />
        </div>
      </Fragment>
    );
  }
}

AuthForm.propTypes = {
  userLogin: PropTypes.func.isRequired,
  userLoginStatus: PropTypes.shape({})
};

AuthForm.defaultProps = {
  userLoginStatus: {}
};

const mapStateToProps = state => ({
  userLoginStatus: state.userLogin
});
export { AuthForm as AuthFormPage };
export default connect(
  mapStateToProps,
  { userLogin }
)(AuthForm);
