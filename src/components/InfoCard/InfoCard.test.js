import React from 'react';
import { shallow } from 'enzyme';
import InfoCard from './index';

describe('Test the InfoCard Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<InfoCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
