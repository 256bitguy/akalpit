import React, { useState } from 'react';
import Modal from './Modal'; // Assuming you have a Modal component
import { useNavigate } from 'react-router-dom';
import { ButtonsAka } from '../UI';

const Profile = () => {
    const navigate=useNavigate()
  const [isFollowersOpen, setIsFollowersOpen] = useState(false);
  const [isFollowingOpen, setIsFollowingOpen] = useState(false);

  const toggleFollowersModal = () => setIsFollowersOpen(!isFollowersOpen);
  const toggleFollowingModal = () => setIsFollowingOpen(!isFollowingOpen);

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      {/* Profile Header */}
      <ButtonsAka onClick={()=>navigate(-1)}>back</ButtonsAka>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-3xl mx-auto mb-6">
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <img src="user.png" alt="Profile Picture" className="w-20 h-20 rounded-full border-2 border-gray-400" />

          {/* User Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-600">Username</h1>
            <p className="text-gray-400">Name</p>
          </div>

          {/* Create Post Button */}
          <button className="bg-black text-white p-2 rounded-full hover:bg-gray-600 transition duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Posts List */}
      <div className="bg-white p-4 rounded-lg shadow-md max-w-3xl mx-auto mb-6">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Posts</h2>
        <div className="space-y-4">
          {/* Example Post */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-gray-600">This is an example post. Add more posts here.</p>
          </div>
          {/* Repeat similar blocks for more posts */}
        </div>
      </div>

      {/* Achievements, Saved, Shared Posts */}
      <div className="bg-white p-4 rounded-lg shadow-md max-w-3xl mx-auto mb-6">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Achievements</h2>
        {/* Achievements List */}
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Achievement 1</li>
          <li>Achievement 2</li>
          {/* Add more achievements */}
        </ul>
      </div>

      {/* Followers and Following */}
      <div className="bg-white p-4 rounded-lg shadow-md max-w-3xl mx-auto mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-600">Followers</h2>
          <button onClick={toggleFollowersModal} className="text-blue-500 hover:underline">View All</button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-600">Following</h2>
          <button onClick={toggleFollowingModal} className="text-blue-500 hover:underline">View All</button>
        </div>
        <div className="text-gray-600">
          <p>Number of Comments: <span className="font-semibold">12</span></p>
          <p>Saved Posts: <span className="font-semibold">8</span></p>
          <p>Shared Posts: <span className="font-semibold">5</span></p>
        </div>
      </div>

      {/* Modals */}
      {isFollowersOpen && (
        <Modal onClose={toggleFollowersModal}>
          <h2 className="text-xl font-semibold mb-4">Followers</h2>
          {/* Followers List */}
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Follower 1</li>
            <li>Follower 2</li>
            {/* Add more followers */}
          </ul>
        </Modal>
      )}
      {isFollowingOpen && (
        <Modal onClose={toggleFollowingModal}>
          <h2 className="text-xl font-semibold mb-4">Following</h2>
          {/* Following List */}
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Following 1</li>
            <li>Following 2</li>
            {/* Add more following */}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default Profile;
