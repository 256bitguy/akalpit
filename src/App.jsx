import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./UI/Auth/Login";
import Headers from "./components/Header";
import Card from "./libs/post/Card";
import PostCard from "./libs/post/PostCard";
import Profile from "./UI/Profile/Profile";
import CardTwo from "./components/cardTwo";
import AudioRecorder from "./components/AudioRecorder";
import TextEditor from "./components/TextEditor";

const router=createBrowserRouter([
  {
    path:'/',
    element:<Headers />
  },
  {
    path:'/card',
    element:<Card/>
  },
  {
    path:'/postcard',
    element:<PostCard/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/mycompany',
    element:<CardTwo/>
  },
  {
    path:'/test',
    element:<AudioRecorder/>
  }

])
export default function App() {
  return (
    <>
   <RouterProvider router={router}/>
   </>
  )
}