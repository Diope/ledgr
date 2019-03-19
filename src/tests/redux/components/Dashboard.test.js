import React from 'react';
import { shallow, render } from 'enzyme'
import Dashboard from '../../../components/Presentation/Dashboard'

describe('Dashboard component testing', () => {
  it('Should render the dashboard component', () =>{
    shallow(<Dashboard />)
  });
});