import React from 'react';
 
 
import { CarouselAka } from '../UI';
const images=[
    {
        src:'user.png',
        alt:"dfgddf"
    },
    {
        src:'user.png',
        alt:"dfgddf"
    },
    {
        src:'user.png',
        alt:"dfgddf"
    },
    {
        src:'user.png',
        alt:"dfgddf"
    },
]
const Ptwo = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-6">
    
      <div className='relative opacity-20' >
      <CarouselAka images={images} ></CarouselAka>
        
        {/* Profile Picture and Info */}
        <div className="absolute bottom-0 left-1/2   transform -translate-x-1/2 mb-4 w-full flex justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center space-y-2">
            <img src="profile-pic.jpg" alt="Profile" className="w-24 h-24 rounded-full border-2 border-gray-400" />
            <h1 className="text-xl font-semibold text-gray-600">Profile Name</h1>
            <div className="text-gray-400">★★★★☆</div>
            <p className="text-gray-600">Total Members: 123</p>
            <button className="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-gray-600 transition duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              <span>Join</span>
            </button>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="bg-white p-4 rounded-lg shadow-md max-w-3xl mx-auto my-6">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Posts</h2>
        <div className="space-y-4">
          {/* Example Post */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-gray-600">This is an example post. Add more posts here.</p>
          </div>
          {/* Repeat similar blocks for more posts */}
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-white p-4 rounded-lg shadow-md max-w-3xl mx-auto my-6">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Overview</h2>
        <p className="text-gray-600 mb-4">
          <strong>Website:</strong> <a href="https://example.com" className="text-blue-500 hover:underline">https://example.com</a><br />
          <strong>Location:</strong> Example City, Country<br />
          <strong>Description:</strong> This is a brief description about the profile. It provides an overview of what the profile is about and its significance. The description is concise and informative, providing key insights into the profile's purpose and offerings.
        </p>
      </div>
    </div>
  );
};

export default Ptwo;
