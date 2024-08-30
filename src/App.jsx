import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./UI/Auth/Login";
import Headers from "./components/Header";
import Card from "./libs/post/Card";
import PostCard from "./libs/post/PostCard";
import CardTwo from "./components/CardTwo";
import About from "./UI/About/About";
import SignUp from "./UI/Auth/SignUp";
import { AccordionAka, DrawerAka} from "./UI";
import {
 
  ChevronDown,
  ChevronUp,
  Handshake,
  Newspaper,
  PartyPopper,
  University,
} from "lucide-react";

const router=createBrowserRouter([
  {
    path:'/',
    element:<Headers/>,
    children:[
      {
        path:'posts',
        element:<PostCard/>
      }
    ]

  },
  {
    path:'/card',
    element:<Card/>
  },
  {
    path:'/about',
    element:<About/>
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
  // {
  //   path:'/test',
  //   element:
       
    
  // },
  {
    path:'/signup',
    element:<SignUp/>
  }

])
export default function App() {
  return (
    <>
   <RouterProvider router={router}/>
   </>
  )
}