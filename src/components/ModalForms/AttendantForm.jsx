import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './ModalForms.scss';

export default class AttendantForm extends Component {
  render() {
    return (
      <Form className="modalForm">
        <Form.Field className="formField">
          <input placeholder="Email" typeof="email" />
        </Form.Field>
        <Form.Field className="formField">
          <input placeholder="Password" typeof="password" />
        </Form.Field>
        <Form.Field className="formField">
          <input placeholder="Attendant Name" />
        </Form.Field>
        <Form.Field className="formField">
          <input placeholder="Mobile Number" typeof="tel" />
        </Form.Field>
        <Form.Field className="formField">
          <input placeholder="Image URL (example:https://exampleimageurl.jpg)" typeof="url" />
          <a target="_blank" rel="noopener noreferrer" href="https://imgur.com/">
            Upload image here
          </a>
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
