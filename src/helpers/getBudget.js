import moment from 'moment'

export default (budgets, {text, startingDate, endingDate, sortBy}) => {
  console.log(budgets);
  return budgets.filter((budget) => {
    const createdAtMoment = moment(budget.createdAt)
    
    const startingDateMatch = startingDate ? startingDate.isSameOrBefore(createdAtMoment, 'day') : true;   
    const endingDateMatch = endingDate ? endingDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const matchingText = budget.description.toLowerCase().includes(text.toLowerCase());

    return startingDateMatch && endingDateMatch && matchingText;
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}