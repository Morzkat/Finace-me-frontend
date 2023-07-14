export const BUDGET_ACTION_TYPES = {
  GET_BUDGETS: 'GET_BUDGETS',
  CREATE_BUDGET: 'CREATE_BUDGET',
  REMOVE_BUDGET: 'REMOVE_BUDGET',
  UPDATE_BUDGET: 'UPDATE_BUDGET',
};

//TODO: Create a class of common file to move this logic...
const budgetExist = (budgets = [], id = 0) => {
  const budgetIndex = budgets.findIndex(x => x._id === id);
  return budgetIndex > -1 ? true : false;
}

const UPDATE_STATE_BY_ACTION = {
  [BUDGET_ACTION_TYPES.CREATE_BUDGET]: (state, action) => {
    const { payload } = action;

    if (budgetExist(state, payload._id)) {
      console.log('Throw a exception and show message.');
      console.error('Error adding new budget, name already exists.');
      return state;
    }
    //TODO: Create logic for send request to api and base on api response add to state.
    return [ ...state, payload ];
  },

  [BUDGET_ACTION_TYPES.UPDATE_BUDGET]: (state, action) => {
    console.log('action: ', action);
    const { payload } = action;

    if (!budgetExist(state, payload._id)) {
      console.log('Throw a exception and show message.');
      console.error('Error trying to update a budget which does not exists.');
      return state;
    }

    const budgetIndex = state.findIndex(x => x._id ===  payload._id);
    const newState = structuredClone(state);
    newState[budgetIndex] = payload;

    //TODO: Create logic for send request to api and base on api response add to state.
    return newState;
  },

  [BUDGET_ACTION_TYPES.REMOVE_BUDGET]: (state, action) => {
    console.log('action: ', action);
    const { id } = action.payload;

    if (!budgetExist(state, id)) {
      console.log('Throw a exception and show message.');
      console.error('Error deleting budget, budget does not exists.');
    }

    const newState = state.filter((budget) => budget._id !== id );
    console.log('new state: ', newState);

    //TODO: Create logic for send request to api and base on api response add to state.
    return newState;
  },
};




export const budgetReducer = (state, action) => {
  const { type: actionType } = action;
  const stateUpdated = UPDATE_STATE_BY_ACTION[actionType];
  return stateUpdated ? stateUpdated(state, action) : state;
}