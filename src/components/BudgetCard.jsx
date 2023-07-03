import { BarLoader } from './BarLoader';

const BudgetCard = ( { budget } ) => {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-2">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
            
          <div className="p-4">
            <h2 className="mt-2 font-bold">{budget.name}</h2>
            <span className="inline-block mb-2 px-2 py-1 leading-none bg-orange-200 text-black rounded-full font-semibold uppercase tracking-wide text-xs">
              { budget.wallet }
            </span>

            <div className="mt-3 flex items-center">
              <span className="text-green font-bold text-xl">{budget.amountLeft}</span>
              <span className="text-green text-sm font-semibold">{budget.currency}</span>&nbsp;

              <span className="text-md text-strokedark">left</span>&nbsp;
              <span className="text-md text-strokedark">From</span>           
            </div>

            <div className="flex items-center">
              <span className="text-sm break-normal text-strokedark">{budget.amount}</span>
              <span className="text-sm break-words text-strokedark">{budget.currency}</span>&nbsp;
            </div>
              
            {/*TODO: Create a new component for bar loader... */}
            <BarLoader percentage={80} />
          </div>
            
          <div className="p-4 text-xs text-gray-700">
            <div className="flex">
              {/* Current month start date and end date... */}
              <div className="w-3/6"> <p className="text-left text-strokedark">Jun 30, 2023</p> </div>
              <div className="w-3/6"> <p className="text-right text-strokedark">Jun 30, 2023</p> </div>
            </div>
          </div>
        </a>
      </div>
    </>)
}

export { BudgetCard };