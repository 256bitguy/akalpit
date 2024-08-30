import React from 'react'
import ProfileCard from './ProfleCard';
import { cn } from '../libs/utils/utils';
import New2 from './New2';


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
const MyCompanyCard = ({className}) => {
  return (
    <div
   className={cn("flex max-w-xl gap-y-5  flex-col border rounded-xl p-4 bg-white ",className  )}>
    <New2 className="bg-orange-400"/>
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