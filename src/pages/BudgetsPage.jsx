import { useState } from 'react';
import { BudgetCard } from '../components/BudgetCard';
import { Modal } from '../components/Modal';
import DefaultLayout from '../layouts/DefaultLayout';
import BudgetForm from '../components/Forms/BudgetForm';
import { CreateNewCard } from '../components/CreateNewCard';
import { useBudgets } from '../hooks/useBudgets';

export default function BudgetPage() {
  const [isOpen, setIsOpen] = useState(false);
  // const [budgets, setBudgets] = useState([]);

  const { budgets } = useBudgets();
  console.log('page | budgets: ', budgets);
  // console.log('loading: ', loading);

  const handleModalState = (modalState) => setIsOpen(modalState);
        
  return <DefaultLayout>
    <div className="container w-full mx-auto">
      <div className="flex flex-wrap m-10 mt-6">
        { budgets && budgets.map((budget) => (<BudgetCard key={budget._id} budget={budget} />)) }
        <CreateNewCard handleModalState={handleModalState} body={'Take control of your expenses and save more money with budgets!'} name={'Budget'} />
      </div>
    </div>

    <Modal isOpen={isOpen} handleModalState={handleModalState} >
      <BudgetForm/>
    </Modal>
  </DefaultLayout>
}
