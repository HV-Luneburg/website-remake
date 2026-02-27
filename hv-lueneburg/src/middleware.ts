import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;
  
  // Protect all routes under /intern/ except the login page itself (/intern or /intern/)
  if (url.pathname.startsWith('/intern/') && url.pathname.replace(/\/$/, '') !== '/intern') {
    const session = cookies.get('hvl_session')?.value;
    
    // If there is no valid session cookie, redirect back to login
    if (session !== 'true') {
      return redirect('/intern');
    }
  }
  
  return next();
});
