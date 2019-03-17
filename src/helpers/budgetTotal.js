export default (budgets) => {
  if (budgets.length === 0) {
    return 0
  } else {
    return budgets
      .map((budget) => budget.amount)
      .reduce((sum, value) => {
        return sum + value
      }, 0)
  }
}