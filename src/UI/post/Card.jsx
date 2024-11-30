import { Search } from "lucide-react";

const Card = () => {
  return (
    <div className="flex flex-col justify-center  bg-gray-200  ">
      <div className="m-2 p-4 flex flex-col border text-center justify-center rounded-lg ">
        <h6 className="text-4xl font-bold">
          Join our peer students and fellow one to perform on the stage with
          yours
        </h6>
        <div className="p-4">
          <h6 className="text-3xl mt-5 font-bold fade-in">
            स्टेज नहीं मिलेगा <br />
            तो स्टार कैसे बनेगा?
          </h6>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <img alt="" src="public/user.png"></img>
      </div>
      <div className="flex flex-col justify-center">
        <div className="mt-5 bg-gray-50 border border-gray-300 items-center mx-2 px-5 rounded-lg inline-flex">
          <Search size={25} className="mr-3" />
          <input
            type="text"
            id="first_name"
            className=" text-gray-900 text-xl rounded-lg   block w-full p-2.5"
            placeholder="Find Your College"
            required
          />
        </div>
        <div className="relative my-4 flex items-center mx-2">
          <hr className="flex-grow border-gray-300 dark:border-gray-500" />
          <span className="mx-4 text-gray-500 dark:text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>
        <div className="flex items-center justify-center">
          <button className="block w-3/4 rounded-md bg-black px-3.5 py-2.5 text-center    text-2xl font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Join Now
          </button>
        </div>
        <hr className="flex-grow border-gray-300 dark:border-gray-600 mt-5" />
      </div>
    </div>
  );
};

export default Card;
