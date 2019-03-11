import {FILTER_BY_TEXT, SORT_BY_AMOUNT, SORT_BY_DATE, SET_STARTING_DATE, SET_ENDING_DATE} from '../actionTypes'

export const filterByText = (text="") => ({
  type: FILTER_BY_TEXT,
  text
})

export const sortByDate = () => ({
  type: SORT_BY_DATE
});

export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT
});

export const setStartingDate = (startingDate) => ({
  type: SET_STARTING_DATE,
  startingDate
});

export const setEndingDate = (endingDate) => ({
  type: SET_ENDING_DATE,
  endingDate
})