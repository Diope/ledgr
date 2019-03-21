import React from 'react';
import { shallow, render } from 'enzyme'
import Dashboard from '../../../components/Presentation/Dashboard'

describe('Dashboard component testing', () => {

  const wrapper = shallow(<Dashboard />)

  it('Should render the dashboard component', () =>{
    expect(wrapper);
  });
});