export const BUDGET_ACTION_TYPES = {
  GET_BUDGETS: 'GET_BUDGETS',
  CREATE_BUDGET: 'CREATE_BUDGET',
  REMOVE_BUDGET: 'REMOVE_BUDGET',
  UPDATE_BUDGET: 'UPDATE_BUDGET',
};

const UPDATE_STATE_BY_ACTION = {
  [BUDGET_ACTION_TYPES.CREATE_BUDGET]: (state, action) => {
    const { payload } = action;

    var budgetExist = state.find(x => x.name === payload.name);
    if (budgetExist) {
      console.log('Throw a exception and show message.');
      console.error('Error adding new budget, name already exists.');
      return state;
    }
    //TODO: Create logic for send request to api and base on api response add to state.
    return [ ...state, payload ];
  },
  [BUDGET_ACTION_TYPES.REMOVE_BUDGET]: (state, action) => {
    console.log('action: ', action);
    return state;
  },
  [BUDGET_ACTION_TYPES.UPDATE_BUDGET]: (state, action) => {
    console.log('action: ', action);
    return state;
  },
};

export const budgetReducer = (state, action) => {
  const { type: actionType } = action;
  const stateUpdated = UPDATE_STATE_BY_ACTION[actionType];
  return stateUpdated ? stateUpdated(state, action) : state;
}