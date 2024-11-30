import React from 'react';
import New from './New';
import { cn } from '../libs/utils/utils';

const New2 = React.forwardRef(({ className,children ,...props}, ref) => {
  return (
    <New ref={ref} className={cn("", className)} name={props.name}>
        {children}
        </New>
  );
});

export default New2;
