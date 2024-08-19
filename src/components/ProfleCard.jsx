
import React from 'react';

const ProfileCard = ({ name, followers, imageUrl }) => {
  return (
    <div className="flex max-w-xl gap-x-2 w-full flex-row border rounded-xl p-1 bg-white items-center">
      <div className="p-2">
        <img 
          src={imageUrl}
          className="h-12 w-12 border border-black rounded-full"
          alt={name}
        />
      </div>
      <div className="flex gap-y-0 flex-col">
        <div className="font-semibold text-xl">{name}</div>
        <div className="font-thin text-sm">{followers} Followers</div>
      </div>
    </div>
  );
};

export default ProfileCard;
