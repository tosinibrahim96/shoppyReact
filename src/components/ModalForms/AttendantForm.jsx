import React, { Component, Fragment } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './ModalForms.scss';

export default class AttendantForm extends Component {
  displayFormContent = () => {
    const { nameToDisplay, imageUrl, description, mobileNumber } = this.props.details;
    return (
      <Fragment>
        <Form.Field className="formField">
          <input placeholder="Email" typeof="email" defaultValue={description} />
        </Form.Field>
        <Form.Field className="formField">
          <input placeholder="Password" typeof="password" />
        </Form.Field>
        <Form.Field className="formField">
          <input placeholder="Attendant Name" defaultValue={nameToDisplay} />
        </Form.Field>
        <Form.Field className="formField">
          <input placeholder="Mobile Number" typeof="tel" defaultValue={mobileNumber} />
        </Form.Field>
        <Form.Field className="formField">
          <input
            placeholder="Image URL (example:https://exampleimageurl.jpg)"
            typeof="url"
            defaultValue={imageUrl}
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
      <Form className="modalForm">
        {this.displayFormContent()}
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
