import {FILTER_BY_TEXT} from '../actionTypes'

export const filterByText = (text="") => ({
  type: FILTER_BY_TEXT,
  text
})