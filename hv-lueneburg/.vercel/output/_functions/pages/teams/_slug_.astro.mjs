import '../../chunks/page-ssr_aPhGMzXi.mjs';
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment, f as renderScript } from '../../chunks/astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import { b as $$PageLayout, a as $$Icon } from '../../chunks/PageLayout_lQFaGjkI.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_FlMLOc5N.mjs';
import { $ as $$WidgetWrapper } from '../../chunks/WidgetWrapper_CEAq88zL.mjs';
import { $ as $$Headline } from '../../chunks/Headline_DEIoZudA.mjs';
import { t as teams } from '../../chunks/teams_BjRO0GFa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const getStaticPaths = async () => {
  try {
    const { fetchMannschaften } = await import('../../chunks/sanity_CNwnMWJn.mjs');
    const mannschaften = await fetchMannschaften();
    if (mannschaften && mannschaften.length > 0) {
      return mannschaften.map((m) => ({
        params: { slug: m.slug.current },
        props: { team: sanityToTeam(m) }
      }));
    }
  } catch {
  }
  return teams.map((team) => ({
    params: { slug: team.slug },
    props: { team }
  }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { team } = Astro2.props;
  const metadata = {
    title: `${team.name} | HV L\xFCneburg`
  };
  const tabelleDivId = `hb-tabelle-${team.slug}`;
  const spielplanDivId = `hb-spielplan-${team.slug}`;
  const hasInfo = team.trainer || team.trainingszeiten?.length || team.halle || team.kontakt;
  const categoryLabel = team.category === "damen" ? "Damen" : team.category === "herren" ? "Herren" : "Jugend";
  const instagramHandle = team.instagram ? team.instagram.replace("https://www.instagram.com/", "@").replace("https://instagram.com/", "@") : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative bg-black text-white overflow-hidden border-b-4 border-primary"> <!-- Background gradient --> <div class="absolute inset-0 bg-gradient-to-br from-black via-black to-primary/20 pointer-events-none"></div> <!-- Decorative jersey number --> <span class="absolute right-0 bottom-0 font-heading font-black text-white/[0.04] pointer-events-none select-none leading-none" style="font-size: clamp(8rem, 25vw, 22rem);"> ${team.category === "damen" ? "D" : team.category === "herren" ? "H" : "J"} </span> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16"> <!-- Breadcrumb --> <nav class="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest mb-6" aria-label="Brotkrümel"> <a href="/" class="hover:text-white transition-colors">HV Lüneburg</a> <span>/</span> <a href="/teams" class="hover:text-white transition-colors">Mannschaften</a> <span>/</span> <span class="text-white/80">${team.name}</span> </nav> <!-- Category eyebrow --> <span class="heading-eyebrow">${categoryLabel}</span> <!-- Team name --> <h1 class="mt-2 font-heading font-black uppercase tracking-tight text-white leading-tight" style="font-size: clamp(2.5rem, 8vw, 6rem);"> ${team.name} </h1> <!-- League badge --> <div class="mt-4 flex items-center gap-3 flex-wrap"> <span class="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:trophy", "class": "w-3.5 h-3.5" })} ${team.league} </span> <span class="text-white/40 text-xs uppercase tracking-widest">Saison 2025/26</span> </div> </div> </section>  <section class="bg-white dark:bg-[#141414] border-b border-gray-100 dark:border-[#2A2A2A]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16"> <!-- Description --> <div class="lg:col-span-2"> <span class="heading-eyebrow">Über die Mannschaft</span> <p class="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">${team.description}</p> </div> <!-- Info card --> ${hasInfo && renderTemplate`<div class="bg-gray-50 dark:bg-[#1C1C1C] rounded-2xl border border-gray-100 dark:border-[#2A2A2A] p-6 h-fit"> <h2 class="font-heading font-black uppercase text-gray-900 dark:text-white text-base tracking-wide mb-5 pb-3 border-b border-gray-100 dark:border-[#2A2A2A]">Infos</h2> <dl class="space-y-4"> ${team.trainer && renderTemplate`<div class="flex items-start gap-3"> <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:user", "class": "w-4 h-4 text-primary" })} </div> <div> <dt class="text-[11px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-0.5">Trainer</dt> <dd class="text-sm font-semibold text-gray-900 dark:text-white">${team.trainer}</dd> </div> </div>`} ${team.halle && renderTemplate`<div class="flex items-start gap-3"> <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:building", "class": "w-4 h-4 text-primary" })} </div> <div> <dt class="text-[11px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-0.5">Halle</dt> <dd class="text-sm font-semibold text-gray-900 dark:text-white">${team.halle}</dd> </div> </div>`} ${team.trainingszeiten && team.trainingszeiten.length > 0 && renderTemplate`<div class="flex items-start gap-3"> <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:clock", "class": "w-4 h-4 text-primary" })} </div> <div> <dt class="text-[11px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">Training</dt> <dd class="space-y-0.5"> ${team.trainingszeiten.map((z) => renderTemplate`<p class="text-sm font-semibold text-gray-900 dark:text-white">${z}</p>`)} </dd> </div> </div>`} ${team.kontakt && renderTemplate`<div class="flex items-start gap-3"> <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:mail", "class": "w-4 h-4 text-primary" })} </div> <div> <dt class="text-[11px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-0.5">Kontakt</dt> <dd> <a${addAttribute(`mailto:${team.kontakt}`, "href")} class="text-sm font-semibold text-primary hover:underline">${team.kontakt}</a> </dd> </div> </div>`} </dl> </div>`} </div> </div> </section>  ${team.instagram && renderTemplate`<section class="bg-gray-50 dark:bg-[#1C1C1C] border-b border-gray-100 dark:border-[#2A2A2A]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10"> <a${addAttribute(team.instagram, "href")} target="_blank" rel="noopener noreferrer" class="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 group"> <!-- Instagram gradient icon --> <div class="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style="background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:brand-instagram", "class": "w-8 h-8 text-white" })} </div> <!-- Text --> <div class="text-center sm:text-left flex-1"> <p class="text-[11px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">Folgt uns auf Instagram</p> <p class="text-2xl font-heading font-black uppercase tracking-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors"> ${instagramHandle} </p> <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Aktuelle Bilder und Neuigkeiten von ${team.name}</p> </div> <!-- Arrow --> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-6 h-6 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all hidden sm:block" })} </a> </div> </section>`} ${renderComponent($$result2, "WidgetWrapper", $$WidgetWrapper, { "id": `tabelle-${team.slug}`, "containerClass": "max-w-6xl mx-auto" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Headline", $$Headline, { "title": "Tabelle", "tagline": team.league })} <div class="handball-wrapper"> <div${addAttribute(tabelleDivId, "id")} class="hb-widget" data-widget="tabelle"${addAttribute(team.handballNetId, "data-token")}></div> </div> ` })}  ${renderComponent($$result2, "WidgetWrapper", $$WidgetWrapper, { "id": `spielplan-${team.slug}`, "containerClass": "max-w-6xl mx-auto", "bg": '<div style="position:absolute;inset:0;background:var(--color-gray-100);"></div>' }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Headline", $$Headline, { "title": "Spielplan", "tagline": "N\xE4chste Spiele" })} <div class="handball-wrapper"> <div${addAttribute(spielplanDivId, "id")} class="hb-widget" data-widget="spielplan"${addAttribute(team.handballNetId, "data-token")}></div> </div> ` })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [{ variant: "primary", text: "Jetzt mitmachen", href: "/contact", icon: "tabler:mail" }] }, { "subtitle": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": async ($$result4) => renderTemplate`
Komm zum Probetraining und lerne unser Team kennen. Alle Infos findest du über unsere Kontaktseite.
` })}`, "title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result4) => renderTemplate`Interesse an ${team.name}?` })}` })}  ${renderScript($$result2, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/teams/[slug].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/teams/[slug].astro", void 0);

const $$file = "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/teams/[slug].astro";
const $$url = "/teams/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
