import { unAuthenticatedLoader } from '../../libs/sdk/auth/loader';
import AuthLoginScreen from '../../libs/sdk/auth/screens/AuthLoginScreen';
import AuthSignupScreen from '../../libs/sdk/auth/screens/AuthSignupScreen';
import ForgotPasswordPage from '../../libs/sdk/auth/screens/ForgotPassword';
 
 

export const authRoutes = [
  {
    path: '/auth',
     
    children: [
      {
        path: 'login',
        loader: unAuthenticatedLoader,
        element: (
          
            <AuthLoginScreen />
        
        ),
      },
      {
        path: 'signup',
        loader: unAuthenticatedLoader,
        element: (
         
            <AuthSignupScreen />
        
        ),
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
        path: 'forgot-password',
        loader: unAuthenticatedLoader,
        element: (
        
            <ForgotPasswordPage />
        
        ),
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
