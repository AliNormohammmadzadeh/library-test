import React , {useState} from 'react'

const Close = () => {
    const [showMessage, setShowMessage] = useState(true);

    function handleClose() {
      setShowMessage(false);
    }
  return (
    <div className=''> 
         {showMessage ? (
            <div className=" bg-cyan-300 px-4 py-3  flex items-center justify-between" role="alert">
                <div className="flex items-center xl:ml-64"> 
                    <div className="w-8 h-8 flex items-center justify-center border-2  border-gray-500 rounded-full mr-2 text-gray-500 font-bold text-xl">
                        !
                    </div>
                    <p className="text-sm text-gray-700">All locations are closed Friday, April 7 and Sunday, April 9 for the Easter holiday.</p>
                </div>
                <button type="button" className="ml-2 xl:mr-64  border-hidden rounded-full p-2 inline-flex items-center justify-center text-gray-950  hover:bg-neutral-200  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500" onClick={handleClose}>
                    <p className='text-sm'>Close</p>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M14.348 5.652a1 1 0 0 1 0 1.414L11.414 10l2.934 2.934a1 1 0 1 1-1.414 1.414L10 11.414l-2.934 2.934a1 1 0 1 1-1.414-1.414L8.586 10 5.652 7.066a1 1 0 1 1 1.414-1.414L10 8.586l2.934-2.934a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        ) : null
      }
    </div>
  )
}

export default Close