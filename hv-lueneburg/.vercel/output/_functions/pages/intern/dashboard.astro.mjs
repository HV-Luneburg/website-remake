import '../../chunks/page-ssr_aPhGMzXi.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import { b as $$PageLayout, a as $$Icon } from '../../chunks/PageLayout_lQFaGjkI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Dashboard | HVL Intern"
  };
  const userName = "Lukas";
  const teamName = "1. Herren";
  const nextTraining = "Dienstag, 19:30 - Oedemer Halle";
  const announcements = [
    { id: 1, title: "Hallenreinigung", date: "Heute", content: "Bitte denkt daran, dass wir nach dem Training heute die Halle fegen m\xFCssen." },
    { id: 2, title: "Weihnachtsfeier", date: "12. Nov", content: "Die Anmeldung f\xFCr die vereinsinterne Weihnachtsfeier ist jetzt offen. Bitte bis zum 01.12. eintragen." }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 pt-32 pb-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6"> <div> <h1 class="text-3xl md:text-4xl font-heading font-black mb-2">Hallo ${userName}!</h1> <p class="text-gray-600 dark:text-gray-400">Willkommen im internen Bereich (${teamName}).</p> </div> <div class="flex gap-3"> <a href="/intern/assets" class="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:folder", "class": "w-4 h-4 text-primary" })} Assets
</a> <a href="/intern" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
Logout
</a> </div> </div> </section>  <section class="max-w-7xl mx-auto px-4 sm:px-6 py-12"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Left Column: Primary Info --> <div class="lg:col-span-2 space-y-8"> <!-- Announcements --> <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6 sm:p-8"> <div class="flex items-center gap-3 mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:bell-ringing", "class": "w-6 h-6 text-primary" })} <h2 class="text-2xl font-heading font-bold">Interne News</h2> </div> <div class="space-y-4"> ${announcements.map((a) => renderTemplate`<div class="border-l-4 border-primary bg-gray-50 dark:bg-slate-800/50 p-4 rounded-r-lg"> <div class="flex justify-between items-start mb-2"> <h3 class="font-bold text-gray-900 dark:text-white">${a.title}</h3> <span class="text-xs text-gray-500 bg-white dark:bg-slate-800 px-2 py-1 rounded">${a.date}</span> </div> <p class="text-sm text-gray-600 dark:text-gray-400">${a.content}</p> </div>`)} </div> </div> <!-- Quick Links / Forms --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <a href="#" class="group bg-primary text-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden relative"> <div class="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:shirt-sport", "class": "w-32 h-32" })} </div> <h3 class="text-xl font-heading font-bold mb-2 relative z-10">Trikotaktion</h3> <p class="text-sm text-white/80 relative z-10 mb-4">Neues Equipment oder Trikots für die Saison bestellen.</p> <span class="inline-flex items-center gap-1 text-sm font-bold bg-white/20 px-3 py-1 rounded-full relative z-10">
Zum Formular ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-4 h-4" })} </span> </a> <a href="#" class="group bg-slate-900 dark:bg-slate-800 text-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden relative"> <div class="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform text-accent"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:calendar-star", "class": "w-32 h-32" })} </div> <h3 class="text-xl font-heading font-bold mb-2 relative z-10">Dienste</h3> <p class="text-sm text-gray-400 relative z-10 mb-4">Kampfgericht und Verkaufsschichten eintragen.</p> <span class="inline-flex items-center gap-1 text-sm font-bold bg-white/10 px-3 py-1 rounded-full relative z-10 text-accent">
Schichtenplan ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-4 h-4" })} </span> </a> </div> </div> <!-- Right Column: Personal & Team Info --> <div class="space-y-8"> <!-- Next Training --> <div class="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-sm"> <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Nächstes Training</h3> <div class="flex items-center gap-4"> <div class="bg-primary/10 text-primary p-3 rounded-xl"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:clock-play", "class": "w-8 h-8" })} </div> <div> <p class="font-bold text-gray-900 dark:text-white leading-snug">${nextTraining.split(" - ")[0]}</p> <p class="text-sm text-gray-500">${nextTraining.split(" - ")[1]}</p> </div> </div> </div> <!-- Team WhatsApp QR --> <div class="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center"> <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Team WhatsApp</h3> <p class="text-xs text-gray-400 mb-6">Scanne den Code, um der info-Gruppe beizutreten.</p> <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-inner mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:qrcode", "class": "w-32 h-32 text-gray-900" })} </div> <a href="#" class="text-sm font-semibold text-[#25D366] hover:text-[#1FAF53] flex items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:brand-whatsapp", "class": "w-5 h-5" })} Beitreten
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/intern/dashboard.astro", void 0);

const $$file = "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/intern/dashboard.astro";
const $$url = "/intern/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
