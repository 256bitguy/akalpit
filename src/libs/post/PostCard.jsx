import { CirclePlus, Ellipsis, Eye, Heart, IceCreamBowl, PersonStanding, Share } from "lucide-react"
import { cn } from "../utils/utils"
import { useState } from "react"
import Options from "../../assets/Options"

const posts = [
    {
      id: 1,
      title: 'अब उसे अंधेरे में भी डर नहीं लगता था....',
      href: '#',
      description:
        "धीरे-धीरे, मोहन का अंधेरे से डर समाप्त हो गया। अब उसे अंधेरे में भी डर नहीं लगता था, क्योंकि वह जानता था कि उसका प्यारा सितारा हमेशा उसके साथ है। मोहन ने सीखा कि कभी भी हमें किसी चीज़ से डरना नहीं चाहिए, क्योंकि जब हम सच्चे दिल से किसी चीज़ को चाहने लगते हैं, तो वह हमें ताकत देती है।",
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          "धीरे-धीरे, मोहन का अंधेरे से डर समाप्त हो गया। अब उसे अंधेरे में भी डर नहीं लगता था, क्योंकि वह जानता था कि उसका प्यारा सितारा हमेशा उसके साथ है। मोहन ने सीखा कि कभी भी हमें किसी चीज़ से डरना नहीं चाहिए, क्योंकि जब हम सच्चे दिल से किसी चीज़ को चाहने लगते हैं, तो वह हमें ताकत देती है।",
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          "धीरे-धीरे, मोहन का अंधेरे से डर समाप्त हो गया। अब उसे अंधेरे में भी डर नहीं लगता था, क्योंकि वह जानता था कि उसका प्यारा सितारा हमेशा उसके साथ है। मोहन ने सीखा कि कभी भी हमें किसी चीज़ से डरना नहीं चाहिए, क्योंकि जब हम सच्चे दिल से किसी चीज़ को चाहने लगते हैं, तो वह हमें ताकत देती है।",
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          "धीरे-धीरे, मोहन का अंधेरे से डर समाप्त हो गया। अब उसे अंधेरे में भी डर नहीं लगता था, क्योंकि वह जानता था कि उसका प्यारा सितारा हमेशा उसके साथ है। मोहन ने सीखा कि कभी भी हमें किसी चीज़ से डरना नहीं चाहिए, क्योंकि जब हम सच्चे दिल से किसी चीज़ को चाहने लगते हैं, तो वह हमें ताकत देती है।",
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 5,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          "धीरे-धीरे, मोहन का अंधेरे से डर समाप्त हो गया। अब उसे अंधेरे में भी डर नहीं लगता था, क्योंकि वह जानता था कि उसका प्यारा सितारा हमेशा उसके साथ है। मोहन ने सीखा कि कभी भी हमें किसी चीज़ से डरना नहीं चाहिए, क्योंकि जब हम सच्चे दिल से किसी चीज़ को चाहने लगते हैं, तो वह हमें ताकत देती है।",
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 6,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          "धीरे-धीरे, मोहन का अंधेरे से डर समाप्त हो गया। अब उसे अंधेरे में भी डर नहीं लगता था, क्योंकि वह जानता था कि उसका प्यारा सितारा हमेशा उसके साथ है। मोहन ने सीखा कि कभी भी हमें किसी चीज़ से डरना नहीं चाहिए, क्योंकि जब हम सच्चे दिल से किसी चीज़ को चाहने लगते हैं, तो वह हमें ताकत देती है।",
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 7,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          "धीरे-धीरे, मोहन का अंधेरे से डर समाप्त हो गया। अब उसे अंधेरे में भी डर नहीं लगता था, क्योंकि वह जानता था कि उसका प्यारा सितारा हमेशा उसके साथ है। मोहन ने सीखा कि कभी भी हमें किसी चीज़ से डरना नहीं चाहिए, क्योंकि जब हम सच्चे दिल से किसी चीज़ को चाहने लगते हैं, तो वह हमें ताकत देती है।",
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 8,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          "धीरे-धीरे, मोहन का अंधेरे से डर समाप्त हो गया। अब उसे अंधेरे में भी डर नहीं लगता था, क्योंकि वह जानता था कि उसका प्यारा सितारा हमेशा उसके साथ है। मोहन ने सीखा कि कभी भी हमें किसी चीज़ से डरना नहीं चाहिए, क्योंकि जब हम सच्चे दिल से किसी चीज़ को चाहने लगते हैं, तो वह हमें ताकत देती है।",
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 9,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          "धीरे-धीरे, मोहन का अंधेरे से डर समाप्त हो गया। अब उसे अंधेरे में भी डर नहीं लगता था, क्योंकि वह जानता था कि उसका प्यारा सितारा हमेशा उसके साथ है। मोहन ने सीखा कि कभी भी हमें किसी चीज़ से डरना नहीं चाहिए, क्योंकि जब हम सच्चे दिल से किसी चीज़ को चाहने लगते हैं, तो वह हमें ताकत देती है।",
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },

    // More posts...
  ]
  
  export default function PostCard() {
    const [clicked,setClicked]=useState(0)
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
       
          <div className="flex justify-center ">
      <div className="m-2 p-5 flex  border   bg-gray-200 rounded-lg ">
      <CirclePlus size={35} color="green"/>
      <p className="ml-5 text-xl">Start a Post..</p>
      </div>
    
          
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none sm:self-center sm:grid-cols-1">
          {
  posts.map((post) => (
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
        <div className="mt-3 border gap-x-1 align-center  m-2 inline-flex rounded-md">
        <Heart
            size={22}
            strokeWidth={3}
            className={cn("pt-1", {
              "fill-red-500 text-red-700": clicked,
              "text-black": !clicked,
            })}
            onClick={() => {
              setClicked(!clicked);
              console.log("sdf");
            }}
          />{" "}
         <span>23</span>
        </div>
      </div>
    </article>
  ))
}

          </div>
        </div>
      </div>
    )
  }
  

//   <div><Eye /></div>
//                 <div><IceCreamBowl /></div>
//                 <div><Share /></div>
//                 <div><PersonStanding /></div>