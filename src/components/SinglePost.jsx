import React, { useState } from 'react';
import Options from '../assets/Options';
import { Heart } from 'lucide-react';
import { cn } from '../libs/utils/utils';
import { CardAka, CardBotttomAka, CardCenterAka, CardTopAka } from '../UI';

const SinglePost = ({ post }) => {
    const [clicked, setClicked] = useState(false);

    const handleHeartClick = () => {
        setClicked(prevState => !prevState);
        
    };

    return (
        <CardAka className="shadow-sm border  flex flex-col justify-between h-96 border-gray-200">
            <CardTopAka  className="flex  items-center justify-between text-xs">
                 
                <div className="flex gap-x-3 items-center">
                    <img
                        alt={`Profile picture of ${post.author.name}`}
                        src={post.author.imageUrl}
                        className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">{post.author.name}</p>
                        <p className="text-gray-600">
                            <time dateTime={post.datetime} className="text-gray-500">
                                {post.date}
                            </time>
                        </p>
                    </div>
                </div>
                <div className="relative z-10 px-3 py-1.5 font-medium text-gray-600">
                    <Options />
                </div>
            
            </CardTopAka>
            <CardCenterAka className="group   flex-1  relative m-3">
                 
                <CardTopAka className="text-lg  font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {post.title}
                </CardTopAka>
                <div className="mt-5  overflow-auto h-48 max-h-96 line-clamp-5 font-mono text-sm leading-6 text-gray-600">
                    {post.description}
                </div>
            </CardCenterAka>
            <CardBotttomAka  className="  inline-flex items-center mt-2  px-2 gap-1 flex-col items-start      ">
                 <span>
                       <Heart
                            size={25}
                            strokeWidth={3}
                            className={cn(" ", {
                                "fill-red-500 text-red-700": clicked,
                                "text-black": !clicked,
                            })}
                            onClick={handleHeartClick}
                        />
                       </span>
                <span >293</span>
                 </CardBotttomAka>
             
        </CardAka>
        
    );
};

export default SinglePost;
