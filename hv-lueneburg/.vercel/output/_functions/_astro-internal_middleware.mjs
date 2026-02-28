import { d as defineMiddleware, s as sequence } from './chunks/index_Cc_UvfXO.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CryYFUtI.mjs';
import 'piccolore';
import './chunks/astro/server_DIIrBVhZ.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;
  if (url.pathname.startsWith("/intern/") && url.pathname.replace(/\/$/, "") !== "/intern") {
    const session = cookies.get("hvl_session")?.value;
    if (session !== "true") {
      return redirect("/intern");
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
