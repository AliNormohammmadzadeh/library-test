import { useState, useEffect, useRef } from 'react';


function DropdownButton(props) {
  const {title , items} = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current &&  !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left z-10">
      <button type="button" className="inline-flex justify-center items-center w-full px-4 py-4 text-sm font-medium text-gray-950 bg-white border border-teal-50 rounded-md shadow-sm hover:border-b-pink-950 hover:border-b-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-sky-500" onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? (
          <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 17a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 14.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 17z" />
          </svg>
        )}
      </button>
      {isOpen && (
        <div ref={dropdownRef} className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {Object.keys(items).map((key)=>(
              <a key={key} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
               {items[key]}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default DropdownButton;