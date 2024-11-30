import { unAuthenticatedLoader } from "../../UI/Auth/auth/loader";
import AuthLoginScreen from "../../UI/Auth/auth/screens/AuthLoginScreen";
import AuthSignupScreen from "../../UI/Auth/auth/screens/AuthSignupScreen";
import ForgotPasswordPage from "../../UI/Auth/auth/screens/ForgotPassword";

export const authRoutes = [
  {
    path: "auth",

    children: [
      {
        path: "login",
        index: true, // Indicates that this is the default route for the parent
        element: <AuthLoginScreen />,
      },

      {
        path: "signup",
        element: <AuthSignupScreen />,
      },
      //   {
      //     path: 'sso',
      //     loader: ssoLoader,
      //     element: (
      //       <AppProviders>
      //         <SsoScreen />
      //       </AppProviders>
      //     ),
      //   },
      {
        path: "forgot-password",
        loader: unAuthenticatedLoader,
        element: <ForgotPasswordPage />,
      },
      //   {
      //     path: 'reset-password',
      //     loader: unAuthenticatedLoader,
      //     element: (

      //         <ResetPassword />

      //     ),
      //   },
    ],
  },
];
