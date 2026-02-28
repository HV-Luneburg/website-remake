import '../../chunks/page-ssr_aPhGMzXi.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import { b as $$PageLayout, a as $$Icon } from '../../chunks/PageLayout_lQFaGjkI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Assets = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Asset Library | HVL Intern"
  };
  const assets = [
    { id: 1, name: "HVL Logo (Rot)", type: "png", size: "250 KB", icon: "tabler:photo" },
    { id: 2, name: "HVL Logo Vektor", type: "svg", size: "45 KB", icon: "tabler:vector" },
    { id: 3, name: "Briefkopf 2026", type: "pdf", size: "1.2 MB", icon: "tabler:file-text" },
    { id: 4, name: "Sponsoringmappe", type: "pdf", size: "4.8 MB", icon: "tabler:file-description" },
    { id: 5, name: "Sticker Pack 1", type: "zip", size: "12 MB", icon: "tabler:file-zip" },
    { id: 6, name: "Schriftarten (Brand)", type: "zip", size: "2 MB", icon: "tabler:file" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 pt-32 pb-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6"> <div> <div class="flex items-center gap-2 text-primary mb-3"> <a href="/intern/dashboard" class="text-sm font-bold hover:underline">Dashboard</a> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-4 h-4 text-gray-400" })} <span class="text-sm font-bold text-gray-500">Assets</span> </div> <h1 class="text-3xl md:text-4xl font-heading font-black mb-2">Asset Library</h1> <p class="text-gray-600 dark:text-gray-400">Offizielle Logos, Dokumente und Print-Dateien zum Download.</p> </div> </div> </section>  <section class="max-w-7xl mx-auto px-4 sm:px-6 py-12 min-h-[50vh]"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${assets.map((asset) => renderTemplate`<a href="#" class="group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-primary/50 transition-all flex items-start gap-4"> <div class="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 p-3 rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors"> ${renderComponent($$result2, "Icon", $$Icon, { "name": asset.icon, "class": "w-8 h-8" })} </div> <div class="flex-1"> <h3 class="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">${asset.name}</h3> <div class="flex items-center gap-3 text-xs text-gray-500 font-mono"> <span class="uppercase bg-gray-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">${asset.type}</span> <span>${asset.size}</span> </div> </div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:download", "class": "w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all transform translate-x-2 group-hover:translate-x-0" })} </a>`)} </div> </section> ` })}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/intern/assets.astro", void 0);

const $$file = "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/intern/assets.astro";
const $$url = "/intern/assets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Assets,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
