import '../chunks/page-ssr_aPhGMzXi.mjs';
import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment } from '../chunks/astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import { a as $$Icon, b as $$PageLayout } from '../chunks/PageLayout_lQFaGjkI.mjs';
import { $ as $$Stats } from '../chunks/Stats_EsV9vw9r.mjs';
import { f as foerderer, p as partner, h as hauptsponsoren, $ as $$Features2 } from '../chunks/site_DXcibjCv.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_FlMLOc5N.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$SponsorTiers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SponsorTiers;
  const {
    hauptsponsoren = [],
    partner = [],
    foerderer = []
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sponsoren-uebersicht max-w-7xl mx-auto px-4 sm:px-6 py-12"> <!-- Hauptsponsoren (Tier 1) --> ${hauptsponsoren.length > 0 && renderTemplate`<div class="mb-20"> <div class="flex items-center gap-4 mb-8"> <h3 class="text-3xl sm:text-4xl font-heading font-black">Hauptsponsoren</h3> <div class="h-1 flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"> ${hauptsponsoren.map((s) => renderTemplate`<div class="flex flex-col sm:flex-row gap-8 bg-white dark:bg-[#1C1C1C] border border-gray-100 dark:border-[#2A2A2A] rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden"> <!-- Decorative gradient purely for the top-tier sponsors --> <div class="absolute -inset-px bg-gradient-to-r from-primary to-gold opacity-0 group-hover:opacity-20 transition-opacity rounded-3xl -z-10 blur-xl"></div> <div class="w-full sm:w-2/5 flex items-center justify-center bg-gray-50 dark:bg-[#141414] rounded-2xl p-8 relative border border-gray-100 dark:border-[#2A2A2A]"> <img${addAttribute(s.logo, "src")}${addAttribute(s.name, "alt")} class="max-h-24 w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"> </div> <div class="w-full sm:w-3/5 flex flex-col justify-center"> <h4 class="text-3xl font-heading font-black mb-4 group-hover:text-primary transition-colors">${s.name}</h4> ${s.text && renderTemplate`<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">${s.text}</p>`} <div class="flex flex-col gap-3 mt-auto"> ${s.link && renderTemplate`<a${addAttribute(s.link, "href")} target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-2 group-hover:gap-3 transition-all">
Zur Website ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-5 h-5" })} </a>`} ${s.jobLink && renderTemplate`<a${addAttribute(s.jobLink, "href")} target="_blank" rel="noopener noreferrer" class="text-xs font-bold bg-white dark:bg-[#2A2A2A] text-gray-800 dark:text-white px-4 py-2 rounded-full inline-flex items-center gap-2 self-start hover:text-primary transition-colors border border-gray-200 dark:border-[#3A3A3A] shadow-sm"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:briefcase", "class": "w-4 h-4 text-primary" })} Aktuelle Jobangebote
</a>`} </div> </div> </div>`)} </div> </div>`} <!-- Partner (Tier 2) --> ${partner.length > 0 && renderTemplate`<div class="mb-20"> <div class="flex items-center gap-4 mb-8"> <h3 class="text-2xl sm:text-3xl font-heading font-black">Partner</h3> <div class="h-1 w-24 bg-gray-200 dark:bg-[#2A2A2A]"></div> </div> <div class="grid grid-cols-2 lg:grid-cols-4 gap-6"> ${partner.map((s) => renderTemplate`<a${addAttribute(s.link || "#", "href")} target="_blank" rel="noopener noreferrer" class="group bg-white dark:bg-[#1C1C1C] border border-gray-100 dark:border-[#2A2A2A] rounded-2xl p-8 flex flex-col items-center justify-center aspect-square hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"> <img${addAttribute(s.logo, "src")}${addAttribute(s.name, "alt")} class="max-h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 mb-6 group-hover:scale-110"> <h4 class="text-sm font-bold text-center group-hover:text-primary transition-colors">${s.name}</h4> </a>`)} </div> </div>`} <!-- Förderer (Tier 3) --> ${foerderer.length > 0 && renderTemplate`<div> <div class="flex items-center gap-4 mb-8"> <h3 class="text-xl sm:text-2xl font-heading font-black text-gray-500">Förderer</h3> </div> <div class="flex flex-wrap gap-4 items-center"> ${foerderer.map((s) => renderTemplate`<a${addAttribute(s.link || "#", "href")} target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm font-bold uppercase tracking-wide transition-colors bg-gray-50 dark:bg-[#141414] px-5 py-2.5 rounded-full border border-gray-200 dark:border-[#2A2A2A]"> ${s.name} </a>`)} </div> </div>`} </div>`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/components/widgets/SponsorTiers.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Sponsoren | HV L\xFCneburg"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="bg-white dark:bg-[#141414] border-b border-gray-100 dark:border-[#2A2A2A] pt-28 pb-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <span class="heading-eyebrow">Unsere Partner</span> <h1 class="mt-2 font-heading font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight" style="font-size: clamp(2rem, 6vw, 4rem);">
Gemeinsam stark
</h1> <p class="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
Diese Unternehmen machen den Handball beim HV Lüneburg möglich. Wir danken unseren Partnern für ihr Vertrauen und ihre Unterstützung.
</p> </div> </section>  ${renderComponent($$result2, "SponsorTiers", $$SponsorTiers, { "hauptsponsoren": hauptsponsoren, "partner": partner, "foerderer": foerderer })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Ihre Reichweite", "subtitle": "Zahlen, die f\xFCr ein Engagement beim HVL sprechen.", "classes": {
    title: "text-3xl md:text-5xl font-black font-heading tracking-tight uppercase mb-4 text-white",
    subtitle: "text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
  }, "isDark": true, "stats": [
    { title: "Zuschauer/Saison", amount: "12.000+", icon: "tabler:users" },
    { title: "Social Follower", amount: "4.500", icon: "tabler:brand-instagram" },
    { title: "Aktive Mitglieder", amount: "250", icon: "tabler:ball-tennis" },
    { title: "Website-Aufrufe/Monat", amount: "18k", icon: "tabler:mouse" }
  ] })}  <section class="relative bg-white dark:bg-[#141414] py-20 md:py-28 border-t border-gray-100 dark:border-[#2A2A2A]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"> <!-- Text --> <div> <span class="heading-eyebrow">Sponsor werden</span> <h2 class="mt-2 font-heading font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight" style="font-size: clamp(1.8rem, 5vw, 3.5rem);">
Ihre Marke auf unserem Trikot.
</h2> <p class="mt-5 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
Schaffen Sie Sichtbarkeit in einem dynamischen, emotionalen Umfeld. Der HV Lüneburg bietet Zugang zu einer jungen, sportaffinen Zielgruppe in der gesamten Region.
</p> <div class="mt-8 flex flex-col sm:flex-row gap-4"> <a href="/HVL_Sponsoringmappe_26.pdf" class="btn btn--primary btn--pill btn--lg inline-flex items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:file-download", "class": "w-5 h-5" })}
Sponsoring-Mappe
</a> <a href="#kontakt" class="btn btn--outline btn--pill btn--lg">
Beratung vereinbaren
</a> </div> </div> <!-- Visual: jersey mockup --> <div class="relative justify-self-center lg:justify-self-end w-full max-w-sm"> <div class="aspect-[3/4] bg-gray-50 dark:bg-[#1C1C1C] rounded-3xl border border-gray-100 dark:border-[#2A2A2A] p-8 flex flex-col items-center justify-center relative overflow-hidden group shadow-lg"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:shirt-sport", "class": "w-full h-full text-gray-200 dark:text-[#2A2A2A]" })} <div class="absolute inset-0 flex items-center justify-center p-12"> <div class="w-full h-20 bg-white dark:bg-[#2A2A2A] rounded-xl border border-gray-100 dark:border-[#3A3A3A] flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow"> <span class="font-heading font-black uppercase text-gray-500 dark:text-gray-400 tracking-widest text-sm">Ihr Logo hier</span> </div> </div> </div> </div> </div> </section>  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Einstiegsm\xF6glichkeiten", "subtitle": "Welches Paket passt am besten zu Ihren Unternehmenszielen?", "columns": 3, "items": [
    {
      title: "Hauptsponsor",
      description: "Maximale Sichtbarkeit: Brustwerbung, Namensrechte, Top-Platzierung digital und umfangreiche Jobb\xF6rsen-Integration.",
      icon: "tabler:crown"
    },
    {
      title: "Partner",
      description: "Pr\xE4senz auf der Spielfl\xE4che durch Bandenwerbung, starke digitale Platzierung und Social Media Integration.",
      icon: "tabler:heart-handshake"
    },
    {
      title: "F\xF6rderer",
      description: "Der ideale Einstieg zur Unterst\xFCtzung des Breitensports und der Jugend mit Verlinkung auf unserer Website.",
      icon: "tabler:star"
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "id": "kontakt", "actions": [
    { variant: "primary", text: "E-Mail schreiben", href: "mailto:sponsoring@hv-lueneburg.de", icon: "tabler:mail" }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Lassen Sie uns in einem kurzen, unverbindlichen Termin besprechen, welches Potenzial eine Partnerschaft für Ihr Unternehmen bietet.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`Starten wir das Spiel.` })}` })} ` })}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/sponsoring/index.astro", void 0);

const $$file = "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/sponsoring/index.astro";
const $$url = "/sponsoring";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
