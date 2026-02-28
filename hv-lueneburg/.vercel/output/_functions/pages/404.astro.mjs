import '../chunks/page-ssr_aPhGMzXi.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CEy0vk85.mjs';
import { g as getHomePermalink } from '../chunks/permalinks_plztHYTi.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = `Fehler 404`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": { title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <div class="max-w-md text-center"> <h2 class="mb-8 font-bold text-9xl"> <span class="sr-only">Fehler</span> <span class="text-primary">404</span> </h2> <p class="text-3xl font-semibold md:text-3xl">Diese Seite wurde leider nicht gefunden.</p> <p class="mt-4 mb-8 text-lg text-muted dark:text-slate-400">
Keine Sorge, auf unserer Startseite findest du bestimmt, was du suchst.
</p> <a rel="noopener noreferrer"${addAttribute(getHomePermalink(), "href")} class="btn ml-4">Zur Startseite</a> </div> </div> </section> ` })}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/404.astro", void 0);

const $$file = "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
