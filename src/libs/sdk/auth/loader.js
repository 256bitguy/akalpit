import { redirect } from 'react-router-dom';

export function authLoader() {
  if (!localStorage.getItem('AK_AUTH_TOKEN')) {
     
    return redirect('/auth/login'  );
  }
  return null;
}

export function unAuthenticatedLoader() {
  if (localStorage.getItem('AK_AUTH_TOKEN')) {
    return redirect('/auth');
  }
  return null;
}
export function ssoLoader() {
  console.log(request, 'Request from sso');
  return null;
}

export function authenticatedStatelessLoader() {
  if (!localStorage.getItem('AK_AUTH_TOKEN')) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/auth/login?' + params.toString());
  }
  return null;
}
