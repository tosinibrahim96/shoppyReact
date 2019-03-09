import React from 'react';
import { shallow } from 'enzyme';
import { AttendantFormPage } from '../AttendantForm';
import { addStoreAttendant } from '../../../actions/addAttendantAction';
import { storeAttendants } from '../../../actions/getAttendantsAction';

describe('Test the AttendantForm Component', () => {
  it('should match snapshot', () => {
    const details = {
      nameToDisplay: 'John Doe',
      imageUrl: 'https://i.imgur.com/27DUH5b.jpg',
      description: 'admin@mail.com',
      mobileNumber: '08076543241'
    };
    const event = {
      target: {
        name: 'firstname',
        value: 'Firstname'
      },
      preventDefault: () => {}
    };
    const wrapper = shallow(
      <AttendantFormPage
        details={details}
        storeAttendants={storeAttendants}
        addStoreAttendant={addStoreAttendant}
      />
    );
    wrapper.instance().handleFormChange(event);
    wrapper.instance().handleFormSubmit(event);
    wrapper.instance().componentWillUnmount();
    expect(wrapper).toMatchSnapshot();
  });
});
