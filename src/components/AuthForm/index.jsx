import React, { Component, Fragment } from 'react';
import { Button, Form } from 'semantic-ui-react';
import logo from './images/logo.png';
import background from './images/background.png';
import '../../partial-styles/responsive.scss';
import './AuthForm.scss';

export default class AuthForm extends Component {
  render() {
    return (
      <Fragment>
        <img src={logo} alt="store logo" className="storeLogo" />
        <div className="row formContainer">
          <div className="col-5 col-s-5 ">
            <Form className="loginForm">
              <Form.Field className="loginField">
                <label htmlFor="userEmail">Email</label>
                <input placeholder="Email" id="userEmail" type="email" required />
              </Form.Field>
              <Form.Field className="loginField">
                <label htmlFor="userPassword">Password</label>
                <input placeholder="Password" id="userPassword" type="password" required />
              </Form.Field>
              <Button type="submit" className="loginButton">
                Submit
              </Button>
            </Form>
          </div>
          <img src={background} alt="Background graphics" className="col-5 col-s-5 customer" />
        </div>
      </Fragment>
    );
  }
}
