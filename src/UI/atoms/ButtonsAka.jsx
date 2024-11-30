import React from 'react';

const ButtonsAka = ({ 
  type = 'button', 
  className, 
  children, 
  onClick, 
  variant = 'default', 
  ...props 
  
},ref) => {
  const baseClasses = 'focus:outline-none rounded-lg text-sm px-5 py-2.5 me-2 mb-2';
  
  // Define classes based on variant
  const variantClasses = {
    default: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300',
    alternative: 'py-2.5 px-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100',
    dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300',
    light: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100',
    green: 'text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300',
    red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300',
    yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300',
    purple: 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300',
    vivek:'text-green-400 bg-blue-200 border border-black-400'
  };

  return (
    <button 
     
      type={type} 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonsAka;
