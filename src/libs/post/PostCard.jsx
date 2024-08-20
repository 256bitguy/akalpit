import { CirclePlus, Ellipsis, Eye, Heart, IceCreamBowl, PersonStanding, Share } from "lucide-react"
import { cn } from "../utils/utils"
import { useState } from "react"
import Options from "../../assets/Options"
import SinglePost from "../../components/SinglePost"

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
   <SinglePost post={post}/>
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