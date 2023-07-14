import { useState } from 'react';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { periods } from '../../common/enums/period';
import { capitalize } from '../../common/string.utils';
import { useBudgets } from '../../hooks/useBudgets';

const BudgetForm = ({  budgetToEdit = null }) => {
  const [budget, setBudget] = useState( budgetToEdit || {period: 'once', name: '', amount: '0', currency: 'USD'} );
  const { createBudget, updateBudget } = useBudgets();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //TODO: Validate budget before added....
    budget._id = `${Math.random(1, 10000)}oei`;
    budgetToEdit === null ? createBudget(budget) : updateBudget(budget);
  }
  
  const handleInputChange = ({ name, value }) => {
    const _budget = { ...budget };
    _budget[name] = value;
    setBudget(_budget);
  }
  
  return (
    <div className="py-6 px-6 lg:px-8 text-left rounded-md">
      <h3 className="mb-4 text-xl font-medium text-boxdark">New Budget</h3>
  
      <form className="w-full max-w-lg" onSubmit={handleFormSubmit}>
            
        <div className="mb-3 mt-8">
          <span className="text-4xl block float-left mr-2">
            <FaMoneyCheckAlt className="text-boxdark text-money flex top-[-0.45rem] relative" />
          </span>
  
          <span className="text-boxdark">
            General Info
          </span>
        </div>
                
        <div className="flex flex-wrap -mx-3 mb-2 mt-2">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-bodydark text-[0.65rem] font-bold" htmlFor="Name">
              Name
            </label>
            <input className="appearance-none block w-full text-black border border-bodydark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-money" id="name" name="name" type="text" placeholder="Daily Basis" onChange={(e) => handleInputChange(e.target)} value={budget.name} />
          </div>
        </div>
            
        <div className="flex flex-wrap -mx-3 mb-4">
          
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-bodydark text-[0.65rem] font-bold" htmlFor="amount">
              Amount
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-black border border-bodydark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-money" id="amount" type="number" name="amount" placeholder="50,000" onChange={(e) => handleInputChange(e.target)} value={budget.amount} />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-bodydark text-[0.65rem] font-bold" htmlFor="currency">
              Currency
            </label>
  
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-bodydark text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-money" id="currency" name="currency" onChange={(e) => handleInputChange(e.target)} value={budget.currency}>
                <option value="USD">USD</option>
                <option value="DOP">DOP</option>
              </select>
            </div>
          </div>

        </div>
  
        <div className="mb-2 mt-8">
          <span className="text-3xl block float-left mr-2">
            <BsFillCalendarWeekFill className="text-boxdark text-money flex top-[-0.30rem] relative" />
          </span>
  
          <span className="text-boxdark">
            Period
          </span>
        </div>
  
        <div className="grid w-[30rem] grid-cols-6 gap-2 rounded-xl bg-gray-200 p-2">
          {
            periods && periods.map((period) => (
              <div key={period}>
                <input type="radio" name="period" id={period} value={period} className="peer hidden" onChange={(e) => handleInputChange(e.target)} checked={budget.period === period} />
                <label htmlFor={period} className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-money peer-checked:font-bold peer-checked:text-white peer-checked:w-[120%]">{capitalize(period)}</label>
              </div>
            ))
          }
        </div>
           
        <div className="md:flex md:items-center">
          <div className="md:w-[30%]"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-money hover:bg-money-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-6" type="submit">
              Create new Budget
            </button>
          </div>
        </div>
  
      </form>
    </div>
  ) 
}

export default BudgetForm;