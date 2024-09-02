import React, { useState } from 'react';

const ClipboardAka = ({ value }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Reset the copied state after 2 seconds
    });
  };

  return (
    <div className="grid grid-cols-8 gap-2 w-full max-w-[23rem]">
      <label htmlFor="npm-install" className="sr-only ">Label</label>
      <input
        id="npm-install"
        type="text"
        className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="sdfasf"
         
         
      />
      <button
        onClick={handleCopy}
        className="col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
      >
        {isCopied ? (
          <span className="inline-flex items-center">
            <svg className="w-3 h-3 text-white me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
            Copied!
          </span>
        ) : (
          <span id="default-message">Copy</span>
        )}
      </button>
    </div>
  );
};

export default ClipboardAka;
