import React, { useState, useRef, forwardRef } from "react";
import { X } from "lucide-react";
import { cn } from "../../libs/utils/utils";

// Drawer Button Component
const DrawerButtonAka = forwardRef(({ className, children, ...props }, ref) => (
  <div className="text-center">
    <button
      ref={ref}
      className={className}
      type="button"
      onClick={props.onClick} // Use the passed onClick function
    >
      {children}
    </button>
  </div>
));
DrawerButtonAka.displayName = "DrawerButtonAka";

// Drawer Dialog Component
const DrawerDialogAka = forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
      props.isOpen ? "translate-x-0" : "-translate-x-full"
    } bg-white w-80 `,className)}
    tabIndex="-1"
    aria-labelledby="drawer-label"
  >
    <button
      type="button"
      onClick={props.onClose} // Use the passed onClose function
      aria-controls="drawer-example"
      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <X />
    </button>
    {children}
  </div>
));
DrawerDialogAka.displayName = "DrawerDialogAka";

// Drawer Component to manage state and combine Button and Dialog
const DrawerAka = forwardRef(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref}>
      {/* Pass state and functions to children */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen,
          onClick: toggleDrawer,
          onClose: toggleDrawer,
          ref: drawerRef,
        }),
      )}
    </div>
  );
});
DrawerAka.displayName = "DrawerAka";

export { DrawerAka, DrawerButtonAka, DrawerDialogAka };
