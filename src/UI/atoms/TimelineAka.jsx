import React from 'react';

// TimelineItem component for each item in the timeline
const TimelineItem = ({ time, user, action, detail, imgSrc, imgAlt }) => {
    return (
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img className="rounded-full shadow-lg" src={imgSrc} alt={imgAlt} />
            </span>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{time}</time>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    {user} {action} <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">{detail}</a>
                </div>
            </div>
        </li>
    );
};

// Main Timeline component
const TimelineAka = () => {
    const timelineData = [
        {
            time: 'just now',
            user: 'Bonnie moved',
            action: 'to',
            detail: 'Funny Group',
            imgSrc: '/docs/images/people/profile-picture-3.jpg',
            imgAlt: 'Bonnie image',
        },
        {
            time: '2 hours ago',
            user: 'Thomas Lean commented on',
            action: 'Flowbite Pro',
            detail: 'this is a comment',
            imgSrc: '/docs/images/people/profile-picture-5.jpg',
            imgAlt: 'Thomas Lean image',
            additionalDetail: 'Hi ya\'ll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we\'ll be speaking about Measurement.'
        },
        {
            time: '1 day ago',
            user: 'Jese Leos has changed',
            action: 'task status to',
            detail: 'Finished',
            imgSrc: '/docs/images/people/profile-picture-1.jpg',
            imgAlt: 'Jese Leos image',
        },
    ];

    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {timelineData.map((item, index) => (
                <TimelineItem
                    key={index}
                    time={item.time}
                    user={item.user}
                    action={item.action}
                    detail={item.detail}
                    imgSrc={item.imgSrc}
                    imgAlt={item.imgAlt}
                />
            ))}
        </ol>
    );
};

export default TimelineAka;
