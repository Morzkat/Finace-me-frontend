export const CreateNewCard = ({ handleModalState, name, body }) => (
  <div className="w-full mt-2 sm:w-1/2 md:w-1/2 xl:w-1/4 p-2">
    {/*TODO: Add link for go to Budget details...  */}
    <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
      
      <div className="p-4">
        <div className="container flex flex-col items-center">
          <span className="text-bodydark mb-3">{body}</span>
          <button 
            className="bg-money hover:bg-money-500 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleModalState(true)}>
            Create a new {name}
          </button>
        </div>
      </div>
      
      <div className="m-6">&nbsp;</div> 
    </div>
  </div>
);