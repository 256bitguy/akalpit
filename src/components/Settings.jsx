import React, { useState } from 'react';
import { ButtonsAka } from '../UI';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const navigate=useNavigate();
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const handleNotificationChange = (event) => {
    setNotifications({
      ...notifications,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="bg-gray-200 min-h-screen p-6">
        <ButtonsAka onClick={()=>navigate(-1)}>back</ButtonsAka>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-600 mb-6">Settings</h1>

        {/* Personal Information */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-1">Name</label>
              <input
                id="name"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue="johndoe@example.com"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-gray-600 mb-1">Bio</label>
              <textarea
                id="bio"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                defaultValue="This is a brief bio."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-600 mb-1">Username</label>
              <input
                id="username"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue="john_doe"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
              <input
                id="password"
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Privacy Settings</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="profile-visibility" className="block text-gray-600 mb-1">Profile Visibility</label>
              <select
                id="profile-visibility"
                className="w-full p-2 border  border-gray-300 rounded"
                defaultValue="public"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="friends">Friends</option>
              </select>
            </div>
            <div>
              <label htmlFor="searchability" className="block text-gray-600 mb-1">Allow Search Engines</label>
              <input
                id="searchability"
                type="checkbox"
                className="mr-2"
                defaultChecked
              />
              <span className="text-gray-600">Allow search engines to index your profile.</span>
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Email Notifications</label>
              <input
                type="checkbox"
                name="email"
                checked={notifications.email}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              <span className="text-gray-600">Receive notifications via email.</span>
            </div>
            <div>
              <label className="block text-gray-600 mb-1">SMS Notifications</label>
              <input
                type="checkbox"
                name="sms"
                checked={notifications.sms}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              <span className="text-gray-600">Receive notifications via SMS.</span>
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Push Notifications</label>
              <input
                type="checkbox"
                name="push"
                checked={notifications.push}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              <span className="text-gray-600">Receive push notifications on your device.</span>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="text-center">
          <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-600 transition duration-300">
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7M3 12a9 9 0 1118 0A9 9 0 013 12z"></path>
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
