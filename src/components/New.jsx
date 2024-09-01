import React, { useRef } from 'react';
import {  CalenderAka, CardAka, CardBotttomAka, CardCenterAka, CardTopAka } from '../UI';
import Card from '../libs/post/Card';
import Options from '../assets/Options';
import { Heart } from 'lucide-react';
import { cn } from '../libs/utils/utils';


const New = () => {
  
  return (
     
<CardAka className="p-1 m-4 outline-1 ring-1">
  <CardTopAka className="flex items-center justify-between text-xs">
  
                <div className="flex gap-x-3 items-center">
                    <img
                        alt={`Profile picture of  vivek`}
                        src='/user.png'
                        className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">sdfasd</p>
                        <p className="text-gray-600">
                            sfasf
                        </p>
                    </div>
                </div>
                <div className="relative z-10 px-3 py-1.5 font-medium text-gray-600">
                    <Options />
                </div>
             
  </CardTopAka>
  <CardCenterAka>
  <div className="group relative mt-3">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                   asdfasdfasdf
                </h3>
                <p className="mt-5 line-clamp-5 font-mono text-sm leading-6 text-gray-600">
                    sadfasdfsdfsadfsad
                    sadfasdfsdfsadfsad
                    sadfasdfsdfsadfsad
                    sadfasdfsdfsadfsad
                    sadfasdfsdfsadfsad
                    sadfasdfsdfsadfsad
                    sadfasdfsdfsadfsad
                    sadfasdfsdfsadfsad
                </p>
            </div>
  </CardCenterAka>
  <CardBotttomAka>
  <div className="mt-8">
                <div className="grid grid-flow-col grid-cols-5">
                    <div className="mt-3 gap-x-1 align-center m-2 flex flex-col justify-center gap-y-1">
                        <Heart
                            size={25}
                            strokeWidth={3}
                        />
                        <span className='px-1 self-center'>293</span>
                    </div>
                </div>
            </div>
  </CardBotttomAka>
  </CardAka>      
    
  );
};

export default New;
