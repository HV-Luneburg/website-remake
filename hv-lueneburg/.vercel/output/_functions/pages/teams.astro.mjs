import '../chunks/page-ssr_aPhGMzXi.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import { b as $$PageLayout, a as $$Icon } from '../chunks/PageLayout_lQFaGjkI.mjs';
import { t as teams } from '../chunks/teams_BjRO0GFa.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Teams | HV L\xFCneburg"
  };
  const activeTeams = teams.filter(
    (t) => ["herren-1", "herren-2", "damen-1", "damen-2", "maennliche-jugend-a"].includes(t.slug)
  );
  const damenTeams = activeTeams.filter((t) => t.category === "damen");
  const herrenTeams = activeTeams.filter((t) => t.category === "herren");
  const jugendTeams = activeTeams.filter((t) => t.category === "jugend");
  const categoryGroups = [
    { label: "Herren", teams: herrenTeams },
    { label: "Damen", teams: damenTeams },
    { label: "Jugend", teams: jugendTeams }
  ].filter((g) => g.teams.length > 0);
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative bg-black text-white pt-28 pb-16 overflow-hidden border-b-4 border-primary"> <!-- Large decorative text --> <span class="absolute right-0 bottom-0 font-heading font-black text-white/[0.03] pointer-events-none select-none leading-none" style="font-size: clamp(6rem, 20vw, 16rem);">TEAMS</span> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"> <span class="heading-eyebrow">HV Lüneburg</span> <h1 class="mt-2 font-heading font-black uppercase tracking-tight text-white leading-tight" style="font-size: clamp(2.5rem, 7vw, 5rem);">
Teams
</h1> <p class="mt-4 text-gray-400 text-lg max-w-2xl leading-relaxed">
Alle Teams des HV Lüneburg im Überblick. Klicke auf eine Mannschaft, um den Spielplan und alle Infos einzusehen.
</p> </div> </section>  <main class="bg-white dark:bg-[#141414] py-16 md:py-24"> <div class="max-w-7xl mx-auto px-4 sm:px-6 space-y-20"> ${categoryGroups.map(({ label, teams: groupTeams }) => renderTemplate`<section> <!-- Category header --> <div class="flex items-center gap-4 mb-8 md:mb-10"> <span class="heading-eyebrow text-base">${label}</span> <div class="h-px flex-1 bg-gray-100 dark:bg-[#2A2A2A]"></div> </div> <!-- Team cards --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"> ${groupTeams.map((team) => renderTemplate`<a${addAttribute(`/teams/${team.slug}`, "href")} class="group flex flex-col bg-white dark:bg-[#1C1C1C] rounded-2xl border border-gray-100 dark:border-[#2A2A2A] shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"> <!-- Visual header --> <div class="relative h-28 bg-gray-50 dark:bg-[#242424] flex items-center justify-center overflow-hidden"> <!-- Jersey number decoration --> <span class="absolute font-heading font-black text-gray-100 dark:text-[#2A2A2A] pointer-events-none select-none leading-none transition-colors group-hover:text-primary/10" style="font-size: 7rem; line-height: 1;"> ${label === "Herren" ? "H" : label === "Damen" ? "D" : "J"} </span> <!-- Jersey icon --> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:shirt-sport", "class": "relative z-10 w-14 h-14 text-gray-200 dark:text-[#3A3A3A] group-hover:text-primary/30 transition-colors" })} <!-- Red accent line on hover --> <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> </div> <!-- Content --> <div class="p-5 flex flex-col flex-1"> <span class="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-1">${team.league}</span> <h2 class="text-xl font-heading font-black uppercase tracking-tight text-gray-900 dark:text-white mb-2 leading-tight">${team.name}</h2> <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">${team.description}</p> <div class="mt-4 flex items-center text-sm font-bold text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors"> <span>Zum Teamprofil</span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" })} </div> </div> </a>`)} </div> </section>`)} <!-- Coming soon notice --> <section class="rounded-2xl bg-gray-50 dark:bg-[#1C1C1C] border border-gray-100 dark:border-[#2A2A2A] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6"> <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:users", "class": "w-6 h-6 text-primary" })} </div> <div> <h3 class="text-lg font-heading font-black uppercase text-gray-900 dark:text-white mb-1">Alle 17 Teams</h3> <p class="text-gray-500 dark:text-gray-400 text-sm">Weitere Teams werden demnächst hinzugefügt. Schau regelmäßig vorbei!</p> </div> <a href="/contact" class="btn btn--outline btn--pill ml-auto flex-shrink-0">Kontakt</a> </section> </div> </main> ` })}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/teams/index.astro", void 0);

const $$file = "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/teams/index.astro";
const $$url = "/teams";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
