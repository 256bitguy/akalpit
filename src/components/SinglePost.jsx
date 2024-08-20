import React, { useState } from 'react'
import Options from '../assets/Options';
import { Heart } from 'lucide-react';
import { cn } from '../libs/utils/utils';

const SinglePost = ({post}) => {
    const [clicked,setClicked]=useState(0)
  return (
    <article
    key={post.id}
    className="flex max-w-xl flex-col border rounded-xl p-2 items-start justify-between"
  >
    <div className="flex items-center  justify-between  w-full text-xs">
    <div className="flex gap-x-3 items-center">
      <img
        alt=""
        src={post.author.imageUrl}
        className="h-10 w-10 rounded-full bg-gray-50"
      />
      
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900">
          <a href={post.author.href}>
            <span className="absolute inset-0" />
            {post.author.name}
          </a>
        </p>
        <p className="text-gray-600"> <time dateTime={post.datetime} className="text-gray-500">
        {post.date}
      </time></p>
      </div>
  </div>
      <div
        className="relative z-10     px-3 py-1.5 font-medium text-gray-600  "
      >
        <Options />
      </div>
    </div>
    <div className="group relative">
      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <a href={post.href}>
          <span className="absolute inset-0" />
          {post.title}
        </a>
      </h3>
      <p className="mt-5 line-clamp-5 font-mono text-sm leading-6 text-gray-600">
        {post.description}
      </p>
    </div>
    <div className="relative mt-8  "> </div>
    <div className="grid grid-flow-col grid-cols-5">
      <div className="mt-3   gap-x-1 align-center  m-2  flex flex-col justify-center gap-y-1 ">
      <Heart
          size={25}
          strokeWidth={3}
          className={cn("pt-1", {
            "fill-red-500 text-red-700 self-center": clicked,
            "text-black": !clicked,
          })}
          onClick={() => {
            setClicked(!clicked);
            console.log("sdf");
          }}
        />{" "}
       <span className='px-1 self-center'>293</span>
      </div>
    </div>
  </article>
  )
}

export default SinglePost