import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, u as unescapeHTML } from './astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import { $ as $$WidgetWrapper } from './WidgetWrapper_CEAq88zL.mjs';
import { $ as $$Headline } from './Headline_DEIoZudA.mjs';
import { a as $$Icon, $ as $$Button } from './PageLayout_lQFaGjkI.mjs';
import { twMerge } from 'tailwind-merge';

const $$Astro$1 = createAstro("https://astrowind.vercel.app");
const $$ItemGrid2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ItemGrid2;
  const { items = [], columns, defaultIcon = "", classes = {} } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = ""
  } = classes;
  return renderTemplate`${items && items.length > 0 && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid gap-6 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2" : ""}`,
    containerClass
  ), "class")}>${items.map(({ title, description, icon, callToAction, classes: itemClasses = {} }) => renderTemplate`<div${addAttribute(twMerge(
    "card intersect-once intersect-quarter intersect-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade",
    panelClass,
    itemClasses?.panel
  ), "class")}><div class="card__body">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-10 h-10 mb-4", defaultIconClass, itemClasses?.icon), "style": "color: var(--color-primary, #E30613);" })}`}${title && renderTemplate`<div${addAttribute(twMerge("card__title", titleClass, itemClasses?.title), "class")}>${title}</div>`}${description && renderTemplate`<p${addAttribute(twMerge("card__excerpt", descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div class="mt-4">${renderComponent($$result, "Button", $$Button, { ...callToAction, "variant": "tertiary" })}</div>`}</div></div>`)}</div>`}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/components/ui/ItemGrid2.astro", void 0);

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Features2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Features2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 3,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "ItemGrid2", $$ItemGrid2, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "gap-4 md:gap-6",
    panel: "rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6",
    // panel:
    //   "text-center bg-page items-center md:text-left rtl:md:text-right md:items-start p-6 p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-800",
    icon: "w-12 h-12 mb-6 text-primary",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/components/widgets/Features2.astro", void 0);

const handballNetSettings = {
  clubId: "nuliga.hvn.681",
  organizationId: "",
  tournamentIdHerren: "nuliga.hvn.1662205",
  tournamentIdDamen: "nuliga.hvn.1660608",
  // Placeholder, will be replaced with real ID
  teamIdHerren: "",
  teamIdDamen: ""
};
const nextMatch = {
  /** League / competition */
  league: "Oberliga HH/SH",
  /** ISO-8601 date/time string */
  date: "2026-03-15T19:30:00",
  /** Link to full schedule */
  scheduleUrl: "/teams/herren-1"};
const sponsorStrip = [
  { mark: "S", name: "Sparkasse", src: null, href: "#" },
  { mark: "VR", name: "VR Bank", src: null, href: "#" },
  { mark: "SW", name: "Stadtwerke", src: null, href: "#" },
  { mark: "AR", name: "Autohaus Rosier", src: null, href: "#" },
  { mark: "R", name: "REWE", src: null, href: "#" },
  { mark: "HB", name: "Bergström", src: null, href: "#" },
  { mark: "SL", name: "Salü", src: null, href: "#" },
  { mark: "LS", name: "Lbg. Sport", src: null, href: "#" }
];
const hauptsponsoren = [
  {
    id: "s1",
    name: "Sparkasse Lüneburg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sparkasse_Logo.svg",
    text: "Gemeinsam für die Region. Die Sparkasse Lüneburg unterstützt den Leistungssport und die Jugendförderung des HVL seit über 10 Jahren als fester Partner.",
    link: "https://sparkasse-lueneburg.de",
    jobLink: "https://sparkasse-lueneburg.de/karriere"
  },
  {
    id: "s2",
    name: "Stadtwerke Lüneburg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Stadtwerke_Lueneburg_logo.svg",
    text: "Volle Energie für den Handball. Als regionaler Versorger sorgen die Stadtwerke nicht nur für Strom, sondern auch für die Energie auf dem Spielfeld.",
    link: "https://stadtwerke-lueneburg.de",
    jobLink: null
  }
];
const partner = [
  { id: "p1", name: "VR Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Volksbanken_Raiffeisenbanken_Logo.svg" },
  { id: "p2", name: "Autohaus Rosier", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mercedes-Benz_Star_2022.svg" },
  { id: "p3", name: "REWE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/REWE-Logo.svg" },
  { id: "p4", name: "Salü", logo: null }
];
const foerderer = [
  { id: "f1", name: "Cafe Klatsch" },
  { id: "f2", name: "Ratsapotheke" },
  { id: "f3", name: "Bäckerei Meyer" },
  { id: "f4", name: "SportShop Lüneburg" },
  { id: "f5", name: "PhysioFit" }
];

export { $$Features2 as $, handballNetSettings as a, foerderer as f, hauptsponsoren as h, nextMatch as n, partner as p, sponsorStrip as s };
