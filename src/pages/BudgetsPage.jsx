import { BudgetCard } from '../components/BudgetCard';
import DefaultLayout from '../layouts/DefaultLayout';

export default function BudgetPage() {
  const budget = {
    name: 'Dairy Life',
    amount: '450,000',
    amountSpent: '450,000',
    amountLeft: '450,000',
    amountCanSpentByDay: '0',
    wallet: 'Daily basis',
    currency: 'USD'
  }

  const addNewBudget = () => {
    //TODO: Open new modal for add new Budget...
  }
      
  return <DefaultLayout>
    <div className="container w-full mx-auto">
      <div className="flex flex-wrap m-10 mt-6">

        {/*TODO: Loops and show all Budget... */}
        <BudgetCard budget={budget} />

        <div className="w-full mt-2 sm:w-1/2 md:w-1/2 xl:w-1/4 p-2">
          {/*TODO: Add link for go to Budget details...  */}
          <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
            
            <div className="p-4">
              <div className="container flex flex-col items-center">
                <span className="text-strokedark mb-3">Take control of your expenses and save more money with budgets!</span>
                <button 
                  className="bg-money hover:bg-money-500 text-white font-bold py-2 px-4 rounded"
                  onClick={addNewBudget}>
                  Add a new Budget
                </button>
              </div>
            </div>
            
            <div className="m-6">&nbsp;</div> 
          </div>
        </div>

      </div>
    </div>
  </DefaultLayout>
}
