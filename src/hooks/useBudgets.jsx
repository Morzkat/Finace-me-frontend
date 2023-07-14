import { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetsContext';

export function useBudgets() {
  const context = useContext(BudgetContext);

  if (context === undefined) throw new Error('useBudget must be within a BudgetProvider');
  return context;
}