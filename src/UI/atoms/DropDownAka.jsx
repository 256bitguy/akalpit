import React, { useState, useEffect, useRef } from 'react';



function DropDownAka({list}) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(list[0]?.name);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelection = (item) => {
    setValue(item.name);
    setIsOpen(false);  // Close the dropdown menu when a value is selected
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button 
        onClick={toggleDropdown} 
        className="text-black font-semibold text-sm px-5 text-center inline-flex items-center" 
        type="button"
      >
        {value}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {isOpen && 
        <div id="dropdown" className="z-10 absolute shadow text-left bg-white rounded-md border border-gray-200 ring-gray-100 w-24 mt-2">
          <ul className="text-sm max-h-44 gap-y-2 overflow-auto p-1">
            {list?.map((item) => (
              <li key={item.id}>
                <div 
                  className="block px-1 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" 
                  onClick={() => handleSelection(item)}
                >
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}

export   {DropDownAka};
