
export function Modal( { isOpen, handleModalState, children } ) {

  const handleClose = () => handleModalState(false);

  return (
    <>
      { 
        isOpen && 
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className=" w-[600px] flex flex-col">
            <div className="bg-white rounded-lg">
              <button className="text-black text-xl place-self-end mr-3 mt-1 relative float-right" onClick={handleClose}>X</button>
              {children}
            </div>
          </div>
        </div> 
      }
    </>
  )
}
