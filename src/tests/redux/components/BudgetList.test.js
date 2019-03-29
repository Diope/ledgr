import React from 'react';
import { shallow } from 'enzyme'
import BudgetList from '../../../components/Presentation/BudgetList'
import budgets from '../../fixtures/budgets';

describe('BudgetList component testing', () => {

  
  test('Should render the BudgetList component with fixture data', () =>{
    const wrapper = shallow(<BudgetList budgets={budgets}/>)
    expect(wrapper);
  });
});