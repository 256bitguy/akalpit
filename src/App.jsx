import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./libs/sdk/auth/screens/AuthLoginScreen";
import Headers from "./components/Header";
import Card from "./libs/post/Card";
import PostCard from "./libs/post/PostCard";
import CardTwo from "./components/CardTwo";
import About from "./UI/About/About";

import {   ModalAka, ModalButtonAka, ModalContentAka} from "./UI";
import {
 
  ChevronDown,
  ChevronUp,
  Handshake,
  Newspaper,
  PartyPopper,
  University,
} from "lucide-react";
import New from "./components/New";
import { authLoader } from "./libs/sdk/auth/loader";
import SignUp from "./libs/sdk/auth/screens/AuthSignupScreen";
import { authRoutes } from "./features/routes/Auth";
import Profile from "./components/Profile";
import Ptwo from "./components/Ptwo";

const router=createBrowserRouter([
  {
    path:'/',
    loader:authLoader,
    element:<Headers/>,
    children:[
      {
        path:'posts',
        element:<PostCard/>
      },
      
    ]

  },
  {path:'/profile',
    element:<Profile />
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
    path:'/mycompany',
    element:<CardTwo/>
  },
  {
    path:'/test',
    element: <Ptwo/>
  },
   
...authRoutes
])
export default function App() {
  return (
    <>
   <RouterProvider router={router}/>
   </>
  )
}