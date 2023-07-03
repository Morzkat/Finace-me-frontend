import { Routes, Route } from 'react-router-dom';
import BudgetPage from './pages/BudgetsPage';

function App() {

  return (
    <Routes>
      <Route path='/' Component={BudgetPage} />
      <Route path='/budgets' Component={BudgetPage} />
    </Routes>
  )
}

export default App
