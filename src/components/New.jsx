import { Cross, CrossIcon, X } from 'lucide-react';
import React, { useState } from 'react';

const New = React.forwardRef(({ className ,children,...props}, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle the drawer */}
      <div className="text-center">
        <button
          className={className}
          type="button"
          onClick={toggleDrawer}
        >
          {props.name}
        </button>
        
      </div>

      {/* Drawer component */}
      <div
        id="drawer-example"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white w-80 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          
          <X />
          <span className="sr-only">Close menu</span>
        </button>
        {children}
      </div>
    </div>
  );
});

export default New;
