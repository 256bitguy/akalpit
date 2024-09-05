import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonsAka } from '../UI';

const notifications = [
  {
    type: 'event',
    title: 'Upcoming Event: React Conference',
    description: 'Don’t miss the React Conference happening next week. Check out the agenda and speakers.',
    date: '2024-09-12',
  },
  {
    type: 'request',
    title: 'New Follower Request',
    description: 'User123 wants to follow you. Accept or decline the request.',
  },
  {
    type: 'request',
    title: 'New Following Request',
    description: 'User456 wants to follow you back. Accept or decline the request.',
  },
  {
    type: 'update',
    title: 'Event Update',
    description: 'The React Conference schedule has been updated. Please check the latest timings.',
    date: '2024-09-10',
  },
];

const Notifications = () => {
    const navigate=useNavigate();
  return (
    <div className="bg-gray-200 min-h-screen p-6">
          <ButtonsAka onClick={()=>navigate(-1)}>back</ButtonsAka>
      {/* Notifications Card */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-600 mb-4">Notifications</h1>
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700">{notification.title}</h2>
              <p className="text-gray-600">{notification.description}</p>
              {notification.date && (
                <p className="text-gray-400 mt-2">Date: {notification.date}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
