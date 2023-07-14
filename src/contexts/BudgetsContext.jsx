import React from 'react'
import { useReducer } from 'react';
import { budgetReducer } from '../reducers/BudgetReducer';
import { getBudgets } from '../services/budgets';

export const BudgetContext = React.createContext()

let initialState = [];

try {
  const { budgets } = await getBudgets();
  initialState = budgets;
} catch (error) {
  console.log('error: ', 'error setting budgets as initial state: ', error);
}

function useBudgetReducer() {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const createBudget = budget => dispatch({ 
    type: 'CREATE_BUDGET',
    payload: budget
  });
  
  const updateBudget = budget => dispatch({ 
    type: 'UPDATE_BUDGET',
    payload: budget
  });

  const removeBudget = budgetId => dispatch({ 
    type: 'REMOVE_BUDGET',
    payload: budgetId
  });

  return { state, getBudgets, createBudget, updateBudget, removeBudget }
}

export function BudgetsProvider({children}) {
  const { state, getBudgets, createBudget, updateBudget, removeBudget } = useBudgetReducer();
  return ( 
    <BudgetContext.Provider value={{ 
      budgets: state, 
      getBudgets,
      createBudget, 
      updateBudget, 
      removeBudget 
    }}>
      {children}
    </BudgetContext.Provider>
  )
}
