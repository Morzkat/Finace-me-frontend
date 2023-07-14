import httpService from './http.service'

// TODO: Create modal and map for Budget...
export const getBudgets = async () => {
  try {
    const budgets = await httpService.get('budgets');

    // TODO: Create a model for budgets...
    return budgets;
  } catch (error) {
    //TODO: Implement a logger...
    console.error('Error getting budgets...: ', error);
  }
}

export const createNewBudget = async (budget) => {
  try {
    const response = await httpService.post(budget);
    console.log('response: ', response);
    // const
    return response;
  } catch (error) {
    console.error('Error creating new budget', error);
  }
}