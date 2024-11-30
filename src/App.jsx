import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Login from "./libs/sdk/auth/screens/AuthLoginScreen";
import Headers from "./components/Header";

import CardTwo from "./components/CardTwo";
import About from "./UI/About/About";

// import {   ModalAka, ModalButtonAka, ModalContentAka} from "./UI";
// import {

//   ChevronDown,
//   ChevronUp,
//   Handshake,
//   Newspaper,
//   PartyPopper,
//   University,
// } from "lucide-react";
// import New from "./components/New";
import { authLoader } from "./UI/Auth/auth/loader";
// import SignUp from "./libs/sdk/auth/screens/AuthSignupScreen";
import { authRoutes } from "./features/routes/Auth";
import Profile from "./components/Profile";
import Ptwo from "./components/Ptwo";
import Notifications from "./components/Notifications";
import Setting from "./components/Settings";
import Home from "./components/Home";
import PostCard from "./UI/post/PostCard";
import Card from "./UI/post/Card";

const router = createBrowserRouter([
  {
    path: "/",
    loader: authLoader,
    element: <Headers />,
    children: [
      {
        index: true, // Indicates that this is the default route for the parent
        element: <Home />,
      },
      {
        path: "posts",
        element: <PostCard />,
      },
      { path: "profile", element: <Profile /> },
    ],
  },

  { path: "/notifications", element: <Notifications /> },
  { path: "/setting", element: <Setting /> },
  {
    path: "/card",
    element: <Card />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/postcard",
    element: <PostCard />,
  },
  {
    path: "/mycompany",
    element: <CardTwo />,
  },
  {
    path: "/test",
    element: <Ptwo />,
  },

  ...authRoutes,
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
