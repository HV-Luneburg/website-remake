import '../chunks/page-ssr_aPhGMzXi.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import { b as $$PageLayout } from '../chunks/PageLayout_lQFaGjkI.mjs';
export { renderers } from '../renderers.mjs';

const $$Einblicke = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Einblicke & Galerien | HV L\xFCneburg"
  };
  const galleries = [
    {
      title: "Saisonauftakt 2026",
      date: "01. September 2026",
      images: [
        "https://images.unsplash.com/photo-1548689816-c399f954f3dd?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574629810360-7efbb6b69281?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "Derbysieg gegen MTV",
      date: "12. November 2026",
      images: [
        "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1548689816-c399f954f3dd?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574629810360-7efbb6b69281?q=80&w=800&auto=format&fit=crop"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 pt-32 pb-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <h1 class="text-4xl md:text-5xl font-heading font-black mb-4 uppercase tracking-tight">Einblicke</h1> <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">Emotionen, Spieltage und Momente abseits des Feldes. Bildergalerien aus unserem Vereinsleben.</p> </div> </section> <main class="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-24"> ${galleries.map((gallery) => renderTemplate`<div class="gallery-section"> <div class="mb-8"> <h2 class="text-3xl font-heading font-black uppercase text-gray-900 dark:text-white mb-2 tracking-tight">${gallery.title}</h2> <span class="text-sm font-bold text-primary tracking-widest uppercase">${gallery.date}</span> </div> <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"> ${gallery.images.map((src, idx) => renderTemplate`<div${addAttribute(`relative overflow-hidden rounded-2xl bg-gray-200 dark:bg-slate-800 group hover:shadow-xl transition-all duration-300 ${idx === 0 ? "col-span-2 row-span-2" : ""}`, "class")}> <img${addAttribute(src, "src")}${addAttribute(`${gallery.title} Foto ${idx + 1}`, "alt")} class="w-full h-full object-cover aspect-square sm:aspect-auto group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-luminosity group-hover:mix-blend-normal"${addAttribute(idx < 4 ? "eager" : "lazy", "loading")}> </div>`)} </div> </div>`)} </main> ` })}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/einblicke.astro", void 0);

const $$file = "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/einblicke.astro";
const $$url = "/einblicke";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Einblicke,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
