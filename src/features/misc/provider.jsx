import { Toaster } from '@link/ui';
import { Api, AppRoutes } from '@link/data';
import { ApiWrapper } from './api-wrapper';

export const AppProviders = ({ children }) => {
  return (
    <ApiWrapper api={Api} loginRoute={AppRoutes.login}>
      {children}
      <Toaster />
    </ApiWrapper>
  );
};
