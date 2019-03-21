import React from 'react';
import { shallow } from 'enzyme'
import BudgetList from '../../../components/Presentation/BudgetList'

describe('BudgetList component testing', () => {

  const wrapper = shallow(<BudgetList />)

  it('Should render the dashboard component', () =>{
    expect(wrapper);
  });
});