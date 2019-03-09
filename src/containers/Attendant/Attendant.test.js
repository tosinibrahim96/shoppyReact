import React from 'react';
import { shallow } from 'enzyme';
import { AttendantPage } from './index';
import { storeAttendants } from '../../actions/getAttendantsAction';
import { getUserInfo } from '../../helpers/jwtHelper';

describe('Test the Attendant Component', () => {
  beforeAll(() => {
    localStorage.setItem(
      'Authentication',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlMb2FkIjp7ImlkIjoiN2NhM2JjYzktZTMzOS00OTcwLTk0YjMtYjI5YTg1N2ViM2ExIiwicm9sZSI6W119LCJpYXQiOjE1NTE0NjE4OTcsImV4cCI6MTU1MTU0ODI5N30.IzGf0L_pH9W_gN2AC2Ee5aWqwSO4l3fa46ZrcyUbMKU'
    );
    const result = getUserInfo();
    result.userRole = 'admin';
  });
  afterEach(() => {
    localStorage.removeItem('Authentication');
  });
  it('should match snapshot', () => {
    const allAttendants = {
      successResponse: [
        {
          id: '1',
          email: 's@mail.com',
          image_url: 'imageurl',
          mobile_number: '09085674565',
          first_name: 'welcome'
        }
      ],
      allAttendantsLoading: true
    };
    const wrapper = shallow(
      <AttendantPage storeAttendants={storeAttendants} allAttendants={allAttendants} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test the Attendant Component', () => {
  beforeAll(() => {});
  afterEach(() => {
    localStorage.removeItem('Authentication');
  });
  it('should match snapshot', () => {
    const allAttendants = {
      successResponse: [
        {
          id: '1',
          email: 's@mail.com',
          image_url: 'imageurl',
          mobile_number: '09085674565',
          first_name: 'welcome'
        }
      ],
      allAttendantsLoading: false
    };
    const wrapper = shallow(
      <AttendantPage storeAttendants={storeAttendants} allAttendants={allAttendants} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
