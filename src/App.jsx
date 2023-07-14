import { Routes, Route } from 'react-router-dom';
import BudgetPage from './pages/BudgetsPage';
import { BudgetsProvider } from './contexts/BudgetsContext';

function App() {

  return (
    <>
      <BudgetsProvider>
        <Routes>
          <Route path='/' Component={BudgetPage} />
        </Routes>
      </BudgetsProvider>
    </>
    
  // <Routes>
  //   <Route path='/' Component={BudgetPage} />

  //   <BudgetsProvider>
  //     <Routes>
  //       <Route path='/budgets' Component={BudgetPage} />
  //     </Routes>
  //   </BudgetsProvider>

  // </Routes>
  )
}

export default App
