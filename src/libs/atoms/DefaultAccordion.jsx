 import React, { useState } from 'react'
import { cn } from '../utils/utils'
 import {Apple, ChevronDown, ChevronUp, Handshake, Newspaper, PartyPopper, University} from "lucide-react"
import { Link } from 'react-router-dom'
 const DefaultAccordion = ({message}) => {
  const [value,setValue]=useState(1)
   return (
     <div className='flex  bg-white flex-col'>
     <div className='flex w-11/12 self-center justify-between bg-white items-center p-3 '  onClick={()=>{setValue(!value)}}>
         <div className='rounded-sm  '>
            <p className='font-bold text-lg text-neutral-400'>{message}</p>
          </div>
          <div className='pr-5'>
           {value ?
            <ChevronDown size={25} /> 
            :<ChevronUp size={25}  /> }
        </div>
     </div>
     <div className={cn(" w-11/12 -m-1 self-center bg-white p-2", value ? "hidden" : "bg-white")}>
     <div className='grid grid-flow-row gap-3 p-1'>
    
     </div>
     </div>
    
     </div>
   )
 }
 
 export default DefaultAccordion

 