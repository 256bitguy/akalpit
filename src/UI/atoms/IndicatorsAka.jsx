import React from 'react';

const metrics = [
  { label: 'Visitors', color: 'bg-blue-600' },
  { label: 'Sessions', color: 'bg-purple-500' },
  { label: 'Customers', color: 'bg-indigo-500' },
  { label: 'Revenue', color: 'bg-teal-500' },
];

const IndicatorsAka = () => {
  return (
    <div className="flex flex-wrap">
      {metrics.map((metric, index) => (
        <span key={index} className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
          <span className={`flex w-2.5 h-2.5 ${metric.color} rounded-full me-1.5 flex-shrink-0`}></span>
          {metric.label}
        </span>
      ))}
    </div>
  );
};

export default IndicatorsAka;
