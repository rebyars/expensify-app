//Get total expenses

export default (expenses) => {
    return expenses.reduce((total, currentExpense) => total + currentExpense.amount, 0);
};