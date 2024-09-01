import React from 'react';

const BottomNavAka = ({buttons}) => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {buttons.map((button,index)=>{
          
        })}
      </div>
    </div>
  );
};

export default BottomNavAka;
