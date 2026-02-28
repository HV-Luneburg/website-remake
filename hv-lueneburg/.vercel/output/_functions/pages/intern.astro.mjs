import '../chunks/page-ssr_aPhGMzXi.mjs';
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import { b as $$PageLayout, a as $$Icon } from '../chunks/PageLayout_lQFaGjkI.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let errorMessage = "";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const password = data.get("password");
    if (password === "NurDerHVL2026!") {
      Astro2.cookies.set("hvl_session", "true", { path: "/", maxAge: 60 * 60 * 24 * 30 });
      return Astro2.redirect("/intern/dashboard");
    } else {
      errorMessage = "Leider ist das Passwort falsch.";
    }
  }
  const metadata = {
    title: "Interner Bereich | Login"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8"> <div class="sm:mx-auto sm:w-full sm:max-w-md animate-fade"> <div class="flex justify-center mb-6 text-primary"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:shield-lock", "class": "w-16 h-16" })} </div> <h2 class="mt-6 text-center text-3xl font-heading font-black text-gray-900 dark:text-white">
HVL Mitglieder-Portal
</h2> <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
Bitte melde dich an, um auf vereinsinterne Dokumente, Termine und Bestellungen zuzugreifen.
</p> </div> <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md animate-fade" style="animation-delay: 0.2s;"> <div class="bg-white dark:bg-slate-800 py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100 dark:border-slate-700"> ${errorMessage && renderTemplate`<div class="mb-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start gap-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:alert-triangle", "class": "w-5 h-5 text-red-500 mt-0.5" })} <p class="text-sm font-bold text-red-700 dark:text-red-400">${errorMessage}</p> </div>`} <form class="space-y-6" method="POST"> <div> <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
E-Mail Adresse
</label> <div class="mt-1"> <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-transparent dark:text-white" placeholder="spieler@hv-lueneburg.de"> </div> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
Passwort
</label> <div class="mt-1 relative"> <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-transparent dark:text-white"> </div> <p class="mt-2 text-xs text-gray-500">Das Passwort erhältst du von deinem Trainer.</p> </div> <div class="flex items-center justify-between"> <div class="flex items-center"> <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"> <label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
Angemeldet bleiben
</label> </div> </div> <div> <button type="submit" class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-md text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all">
Einloggen
</button> </div> </form> <div class="mt-6 relative"> <div class="absolute inset-0 flex items-center"> <div class="w-full border-t border-gray-300 dark:border-slate-600"></div> </div> <div class="relative flex justify-center text-sm"> <span class="px-2 bg-white dark:bg-slate-800 text-gray-500">Du hast noch keinen Zugang?</span> </div> </div> <div class="mt-6 w-full flex justify-center"> <a href="mailto:admin@hv-lueneburg.de" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:mail", "class": "w-4 h-4" })} Zugang beim Trainer erfragen
</a> </div> </div> </div> </div> ` })}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/intern/index.astro", void 0);

const $$file = "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/intern/index.astro";
const $$url = "/intern";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
