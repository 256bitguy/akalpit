import React, { useState } from 'react';
import Options from '../assets/Options';
import { Heart } from 'lucide-react';
import { cn } from '../libs/utils/utils';

const SinglePost = ({ post }) => {
    const [clicked, setClicked] = useState(false);

    const handleHeartClick = () => {
        setClicked(prevState => !prevState);
        console.log("Heart icon clicked");
    };

    return (
        <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center justify-between text-xs">
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
            </div>
            <div className="group relative mt-3">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {post.title}
                </h3>
                <p className="mt-5 line-clamp-5 font-mono text-sm leading-6 text-gray-600">
                    {post.description}
                </p>
            </div>
            <div className="mt-8">
                <div className="grid grid-flow-col grid-cols-5">
                    <div className="mt-3 gap-x-1 align-center m-2 flex flex-col justify-center gap-y-1">
                        <Heart
                            size={25}
                            strokeWidth={3}
                            className={cn("pt-1", {
                                "fill-red-500 text-red-700": clicked,
                                "text-black": !clicked,
                            })}
                            onClick={handleHeartClick}
                        />
                        <span className='px-1 self-center'>293</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
