 import React from 'react'
import { AccordionAka, AccordionSubtitleAka, AccordionTitleAka, DrawerAka, DrawerButtonAka, DrawerDialogAka } from '../UI'
import { Handshake,   Newspaper, PartyPopper, University } from 'lucide-react'
import { Link } from 'react-router-dom'
 
 const New = () => {
   return (
   <DrawerAka>
    <DrawerButtonAka className="bg-red-400 text-white mt-5  rounded-lg w-24  h-12">open karo</DrawerButtonAka>
    <DrawerDialogAka className="flex flex-col bg-white gap-3 ">
   <div>
   </div>
   <div>
   
   </div>
    </DrawerDialogAka>
   </DrawerAka>
   )
 }
 
 export default New