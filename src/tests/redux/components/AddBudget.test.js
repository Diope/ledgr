import React from 'react';
import { shallow } from 'enzyme'
import CreateBudget from '../../../components/Presentation/CreateBudget'

describe('CreateBudget component test', () => {
  it('Should render properly', () => {
    shallow(<CreateBudget />)
  })
})