export default (budgets, {text, startingDate, endingDate, sortBy}) => {
  console.log(budgets);
  return budgets.filter((budget) => {
    const startingDateMatch = typeof startingDate !== 'number' || budget.createdAt >= startingDate;
    const endingDateMatch = typeof endingDate !== 'number' || budget.createdAt <= endingDate;
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