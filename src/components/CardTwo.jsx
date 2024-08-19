import { cn } from "../libs/utils/utils";
import MyCompanyCard from "./MyCompanyCard";
 
 
  
  
  export default function CardTwo() {
    console.log(window.innerHeight == window.screen.height,"dsafignsfahjsakjfisudghjsfkdhj")
    return (
      <div className={cn("bg-gray-200 py-10  sm:py-32",(window.innerHeight == window.screen.height )? "h-screen":"h-full")}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
       
        <div className="flex justify-center flex-col   ">
       <h1 className="text-3xl font-sans font-bold">Discover and Follow Topics</h1>
       <h1 className="text-xl font-sans font-extralight">You can tailor your interest to align with topics</h1>
       <button
              type="button"
              className="relative rounded-full bg-black p-1 w-5/12 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <h2 className="text-sm m-1">Topic Customization</h2>
            </button>

       </div>
       <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none sm:self-center sm:grid-cols-1">
       <MyCompanyCard/>
       <MyCompanyCard/>
       <MyCompanyCard/>
       <MyCompanyCard/>
      </div>
     </div>
      </div>
    )
  }

 
   