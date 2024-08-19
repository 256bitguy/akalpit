import React from 'react'
import ProfileCard from './ProfleCard';


const profiles = [
    {
      id: 1,
      name: "Auto",
      followers: "783k",
      imageUrl: "akalpit.png"
    },
    {
      id: 2,
      name: "Techie",
      followers: "1.2M",
      imageUrl: "akalpit.png"
    },
    {
      id: 3,
      name: "GamerX",
      followers: "450k",
      imageUrl: "akalpit.png"
    },
    {
      id: 4,
      name: "Foodie",
      followers: "920k",
      imageUrl: "akalpit.png"
    },
    {
      id: 5,
      name: "Traveler",
      followers: "300k",
      imageUrl: "akalpit.png"
    }
  ];
const MyCompanyCard = () => {
  return (
    <div
   className="flex max-w-xl gap-y-5  flex-col border rounded-xl p-4 bg-white   ">
    <div>
        <h2 className="font-bold text-gray-600">UNIVERSITY</h2>
       </div>
     {profiles.map(profile => (
     <ProfileCard
       key={profile.id}
       name={profile.name}
       followers={profile.followers}
       imageUrl={profile.imageUrl}
     />
   ))}

   
 </div>
  )
}

export default MyCompanyCard