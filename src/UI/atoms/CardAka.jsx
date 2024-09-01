import React from 'react';
import { cn } from '../../libs/utils/utils';


const CardTopAka=({children, className })=>{
return(
<div className={cn("block m-1",className)}>
{children}
    </div>
)
}
const CardCenterAka=({children, className })=>{
  return(
    <div className={cn("block m-1",className)}>
    {children}
        </div>
)
}
const CardBotttomAka=({children, className })=>{
  return(
    <div className={cn("block m-1",className)}>
    {children}
        </div>
  )
}
const CardAka = ({children, className }) => {
  return (
    <div className={cn(" max-w-full rounded-lg shadow m-1 flex flex-col   ",className)}>
{children}
    </div>
    
  );
};

export   {CardAka,CardBotttomAka,CardCenterAka,CardTopAka};
