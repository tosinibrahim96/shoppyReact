import React from 'react';
import { shallow } from 'enzyme';
import { AuthFormPage } from './index';
import { userLogin } from '../../actions/authAction';

describe('Test the Login Form Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AuthFormPage userLogin={userLogin} />);

    wrapper.instance().createLoginForm();
    wrapper.instance().handleLoginSubmit({
      preventDefault: jest.fn()
    });
    wrapper.instance().handleChange({
      target: jest.fn()
    });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test the Login Form Component', () => {
  beforeAll(() => {
    localStorage.setItem(
      'Authentication',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlMb2FkIjp7ImlkIjoiN2NhM2JjYzktZTMzOS00OTcwLTk0YjMtYjI5YTg1N2ViM2ExIiwicm9sZSI6W119LCJpYXQiOjE1NTE0NjE4OTcsImV4cCI6MTU1MTU0ODI5N30.IzGf0L_pH9W_gN2AC2Ee5aWqwSO4l3fa46ZrcyUbMKU'
    );
  });
  afterEach(() => {
    localStorage.removeItem('Authentication');
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<AuthFormPage userLogin={userLogin} />);
    expect(wrapper).toMatchSnapshot();
  });
});
