import React, { useState, forwardRef } from "react";
import {
  ChevronDown,
  ChevronUp
} from "lucide-react";

import { cn } from "../../libs/utils/utils";

// Accordion Title Component
const AccordionTitleAka = forwardRef(({ onClick, value,title,className }, ref) => {
  return (
    <div
      className={cn("flex w-11/12 self-center justify-between bg-white items-center p-3",className)}
      onClick={onClick}
      ref={ref}
    >
      <div> <p >{title}</p></div>
    <div className="pr-5">
        {value ? <ChevronUp size={25} />:  <ChevronDown size={25} />}
      </div>
    </div>
  );
});


const AccordionSubtitleAka = forwardRef(({ value ,className,children}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-11/12 -m-1 self-center  p-2",
        value ? {className} : "hidden"
      )}
    >
      {children}
    </div>
  );
});


const AccordionAka = forwardRef(({ className, children, ...props }) => {
  const [value, setValue] = useState(false);
  const handleClick = () => setValue(!value);


  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      value: value,
      onClick: handleClick,
    })
  )

  return (
    <div className={cn("flex bg-white flex-col", className)} {...props}>
      {childrenWithProps}
    </div>
  );
})

export  {AccordionSubtitleAka,AccordionAka,AccordionTitleAka} ;
