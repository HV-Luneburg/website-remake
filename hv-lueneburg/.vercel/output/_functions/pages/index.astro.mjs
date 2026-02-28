import '../chunks/page-ssr_aPhGMzXi.mjs';
import { d as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML, g as renderSlot, h as defineScriptVars } from '../chunks/astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import { $ as $$Button, a as $$Icon, b as $$PageLayout } from '../chunks/PageLayout_lQFaGjkI.mjs';
import { $ as $$Image } from '../chunks/Image_ByNUY0Mf.mjs';
import 'clsx';
import { $ as $$Stats } from '../chunks/Stats_EsV9vw9r.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_FlMLOc5N.mjs';
import { n as nextMatch, a as handballNetSettings, $ as $$Features2, s as sponsorStrip } from '../chunks/site_DXcibjCv.mjs';
import { s as sanityClient } from '../chunks/_sanity_client_D5Y93ZeM.mjs';
import { $ as $$WidgetWrapper } from '../chunks/WidgetWrapper_CEAq88zL.mjs';
import { $ as $$Headline } from '../chunks/Headline_DEIoZudA.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$2 = createAstro("https://astrowind.vercel.app");
const $$Hero2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image"),
    slides,
    id,
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const hasFixture = Astro2.slots.has("fixture");
  const useSlides = slides && slides.length > 0;
  const marqueeText = "HV\xA0L\xDCNEBURG\xA0\xB7\xA0SEIT\xA01946\xA0\xB7\xA0HANDBALL\xA0\xB7\xA0";
  const marqueeContent = marqueeText.repeat(8);
  return renderTemplate`${maybeRenderHead()}<section class="hero not-prose"${spreadAttributes(id ? { id } : {})}> <!-- Background media: slideshow or single image --> ${useSlides ? renderTemplate`<div class="hero__slideshow" aria-hidden="true"> ${slides.map((slide, i) => renderTemplate`<div class="hero__slide"${addAttribute(i === 0 ? "true" : "false", "data-active")}> <img${addAttribute(slide.src, "src")}${addAttribute(slide.alt, "alt")} class="w-full h-full object-cover object-center"${addAttribute(i === 0 ? "eager" : "lazy", "loading")}> </div>`)} </div>` : image ? renderTemplate`<div class="hero__media" aria-hidden="true"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image.src, "alt": image.alt || "", "widths": [768, 1280, 1920], "sizes": "100vw", "loading": "eager", "width": 1920, "height": 1080, "class": "w-full h-full object-cover object-center" })}`} </div>` : null} <!-- Optional custom background slot --> ${bg && !image && !useSlides && renderTemplate`<div class="hero__media" aria-hidden="true"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(bg)}` })} </div>`} <!-- Animated marquee background text (Tornados-pattern) --> <div class="hero__marquee" aria-hidden="true"> <div class="hero__marquee-track">${marqueeContent}${marqueeContent}</div> </div> <!-- Jersey-number decoration with entrance animation --> <span class="hero__number hero__number--reveal" aria-hidden="true">HVL</span> <!-- Content --> <div class="hero__content"> <div style="max-width: 780px;"> ${tagline && renderTemplate`<span class="heading-eyebrow">${tagline}</span>`} ${title && renderTemplate`<h1 class="hero__title hero__title--reveal">${unescapeHTML(title)}</h1>`} ${subtitle && renderTemplate`<p class="hero__subtitle hero__subtitle--reveal">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="hero__actions hero__actions--reveal"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": action.variant === "primary" ? "btn btn--primary btn--lg btn--pill" : "btn btn--outline-white btn--lg btn--pill" })}`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> </div> <!-- Optional next-match fixture card --> ${hasFixture && renderTemplate`<div class="hero__fixture relative z-20 mt-8 lg:mt-0 lg:absolute lg:bottom-12 lg:right-12 w-full lg:w-auto px-4 lg:px-0"> ${renderSlot($$result, $$slots["fixture"])} </div>`} </section> ${useSlides && slides.length > 1 && renderTemplate(_a$2 || (_a$2 = __template$2(["<script>\n    (function () {\n      var slides = document.querySelectorAll('.hero__slide');\n      if (!slides || slides.length <= 1) return;\n      var current = 0;\n      setInterval(function () {\n        slides[current].dataset.active = 'false';\n        current = (current + 1) % slides.length;\n        slides[current].dataset.active = 'true';\n      }, 10000);\n    })();\n  <\/script>"])))}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/components/widgets/Hero2.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://astrowind.vercel.app");
const $$StickyScorebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StickyScorebar;
  const { games = [
    {
      homeTeam: "HV L\xFCneburg",
      awayTeam: "VfL Fredenbeck",
      homeScore: 24,
      awayScore: 22,
      time: "58:12",
      isLive: true,
      league: "Herren 1"
    },
    {
      homeTeam: "HVL Damen",
      awayTeam: "TSV Handorf",
      homeScore: 18,
      awayScore: 15,
      time: "45:30",
      isLive: true,
      league: "Damen 1"
    }
  ] } = Astro2.props;
  return renderTemplate`<!-- z-index 150: below navbar (300) and mobile menu (295) -->${maybeRenderHead()}<div id="scorebar" class="w-full bg-primary text-white font-heading font-bold uppercase tracking-wide overflow-hidden" style="z-index: 150; position: relative;"> <!-- ── DESKTOP: all games side by side ──────────────────────────────── --> <div class="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 divide-x divide-white/20"> ${games.map((game) => renderTemplate`<div class="flex-1 flex items-center justify-center gap-3 py-2 px-3 min-w-0"> ${game.isLive ? renderTemplate`<span class="flex h-2 w-2 relative flex-shrink-0"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span> </span>` : null} ${game.league && renderTemplate`<span class="text-white/60 font-mono text-xs flex-shrink-0">${game.league}</span>`} <span class="truncate text-sm">${game.homeTeam}</span> <div class="bg-black/25 px-2.5 py-0.5 rounded font-mono text-base tabular-nums whitespace-nowrap flex-shrink-0"> ${game.homeScore} : ${game.awayScore} </div> <span class="truncate text-sm">${game.awayTeam}</span> ${game.time && game.isLive && renderTemplate`<span class="text-white/60 font-mono text-xs flex-shrink-0">${game.time}</span>`} </div>`)} </div> <!-- ── MOBILE: one game at a time, auto-rotates every 20 s ─────────── --> <div class="md:hidden px-3 py-2"> ${games.map((game, i) => renderTemplate`<div class="scorebar-slide flex items-center gap-2 w-full justify-between"${addAttribute(i, "data-slide")}${addAttribute(i !== 0 ? "true" : "false", "aria-hidden")}${addAttribute(i !== 0 ? "display:none;" : "", "style")}> <!-- Left: live dot + league --> <div class="flex items-center gap-1.5 flex-shrink-0"> ${game.isLive ? renderTemplate`<span class="flex h-1.5 w-1.5 relative"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span> <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span> </span>` : null} ${game.league && renderTemplate`<span class="text-white/70 font-mono text-[10px] hidden xs:inline">${game.league}</span>`} </div> <!-- Center: teams + score --> <div class="flex items-center gap-1.5 text-xs min-w-0 flex-1 justify-center"> <span class="truncate max-w-[70px]">${game.homeTeam}</span> <div class="bg-black/25 px-2 py-0.5 rounded font-mono text-sm tabular-nums whitespace-nowrap flex-shrink-0"> ${game.homeScore} : ${game.awayScore} </div> <span class="truncate max-w-[70px]">${game.awayTeam}</span> </div> <!-- Right: time + slide indicator --> <div class="flex items-center gap-1.5 flex-shrink-0"> ${game.time && renderTemplate`<span class="font-mono text-[10px] text-white/70">${game.time}</span>`} ${games.length > 1 && renderTemplate`<span class="text-white/50 font-mono text-[10px]">${i + 1}/${games.length}</span>`} </div> </div>`)} </div> </div> ${games.length > 1 && renderTemplate(_a$1 || (_a$1 = __template$1(["<script>\n    (function () {\n      var slides = document.querySelectorAll('.scorebar-slide');\n      if (!slides || slides.length <= 1) return;\n      var current = 0;\n      setInterval(function () {\n        slides[current].style.display = 'none';\n        slides[current].setAttribute('aria-hidden', 'true');\n        current = (current + 1) % slides.length;\n        slides[current].style.display = '';\n        slides[current].setAttribute('aria-hidden', 'false');\n      }, 20000);\n    })();\n  <\/script>"])))}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/components/widgets/StickyScorebar.astro", void 0);

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$DynamicContentFeed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DynamicContentFeed;
  const { posts = [], title = "Aktuelles", tagline = "Neuigkeiten" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 md:py-24 bg-white dark:bg-[#141414]"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <!-- Section header --> <div class="section-header mb-10 md:mb-14"> <span class="heading-eyebrow">${tagline}</span> <h2 class="section-title">${title}</h2> </div> <!-- Posts grid: mobile stacks, desktop varies --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> ${posts.map((post, index) => {
    if (post.type === "spielbericht") return renderTemplate`<article${addAttribute([
      "group relative flex flex-col bg-white dark:bg-[#1C1C1C] rounded-2xl overflow-hidden border border-gray-100 dark:border-[#2A2A2A]",
      "shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
      index === 0 ? "md:col-span-2 lg:col-span-2" : ""
    ], "class:list")}> <!-- Image --> ${post.imageUrl && renderTemplate`<div${addAttribute(["relative overflow-hidden", index === 0 ? "h-56 md:h-72" : "h-48"], "class:list")}> <img${addAttribute(post.imageUrl, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy"> <!-- Gradient overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div> <!-- Score badge (if available) --> ${post.score && renderTemplate`<div class="absolute bottom-4 right-4 bg-primary text-white font-mono font-black text-lg px-3 py-1 rounded-lg shadow-lg"> ${post.score} </div>`} <!-- Type badge --> <span class="absolute top-4 left-4 bg-primary text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-md">
Spielbericht
</span> </div>`} <!-- Content --> <div class="p-6 flex flex-col flex-1"> ${post.team && renderTemplate`<span class="text-xs font-black uppercase tracking-widest text-primary mb-2">${post.team}</span>`} <h3${addAttribute([
      "font-heading font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight mb-3",
      "group-hover:text-primary transition-colors duration-200",
      index === 0 ? "text-2xl md:text-3xl" : "text-xl"
    ], "class:list")}> <a${addAttribute(post.link, "href")} class="hover:underline underline-offset-2">${post.title}</a> </h3> ${post.excerpt && renderTemplate`<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">${post.excerpt}</p>`} <div class="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-[#2A2A2A] pt-4"> <span class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:calendar", "class": "w-3.5 h-3.5" })} ${post.date} </span> ${post.author && renderTemplate`<span class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:user", "class": "w-3.5 h-3.5" })} ${post.author} </span>`} <a${addAttribute(post.link, "href")} class="ml-auto text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all text-xs uppercase tracking-wider">
Lesen ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-3.5 h-3.5" })} </a> </div> </div> <a${addAttribute(post.link, "href")} class="absolute inset-0 z-10" aria-hidden="true"><span class="sr-only">Artikel lesen</span></a> </article>`;
    if (post.type === "ank\xFCndigung") return renderTemplate`<article class="group relative flex flex-col bg-white dark:bg-[#1C1C1C] rounded-2xl overflow-hidden border border-gray-100 dark:border-[#2A2A2A] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"> <!-- Red accent top bar --> <div class="h-1 bg-primary flex-shrink-0"></div> <div class="p-6 flex flex-col flex-1"> <div class="flex items-center gap-2 mb-4"> <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:bell", "class": "w-4 h-4 text-primary" })} </div> <span class="text-xs font-black uppercase tracking-widest text-primary">Ankündigung</span> </div> <h3 class="text-xl font-heading font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight mb-3 group-hover:text-primary transition-colors flex-1"> <a${addAttribute(post.link, "href")} class="hover:underline underline-offset-2">${post.title}</a> </h3> ${post.excerpt && renderTemplate`<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">${post.excerpt}</p>`} <div class="flex items-center justify-between border-t border-gray-100 dark:border-[#2A2A2A] pt-4 mt-auto"> <span class="text-xs text-gray-400 dark:text-gray-500">${post.date}</span> <a${addAttribute(post.link, "href")} class="text-xs font-black uppercase tracking-wider text-primary flex items-center gap-1 hover:gap-2 transition-all">
Lesen ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-3.5 h-3.5" })} </a> </div> </div> <a${addAttribute(post.link, "href")} class="absolute inset-0 z-10" aria-hidden="true"><span class="sr-only">Ankündigung lesen</span></a> </article>`;
  })} </div> <!-- View all link --> <div class="mt-10 md:mt-14 flex justify-center"> <a href="/news" class="btn btn--outline btn--pill btn--lg">
Alle Neuigkeiten
${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-5 h-5" })} </a> </div> </div> </section>`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/components/widgets/DynamicContentFeed.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const sanityHomePage = await sanityClient.fetch(`*[_type == "homePage"][0]{
  ...,
  "heroImages": heroSlides[].asset->url,
  "galleryImages": gallery[].asset->url,
  "aboutImage": aboutSection.image.asset->url
}`);
  const hp = sanityHomePage || {};
  const heroText = hp.heroText || { tagline: "Seit 1946", title: 'Dein Verein f\xFCr <br class="hidden sm:block" /><em class="not-italic text-primary">Handball</em> in L\xFCneburg', subtitle: "Von der Jugend bis zu den Aktiven \u2014 Teamgeist, Fairplay und Leidenschaft f\xFCr den Handballsport." };
  const spielplanText = hp.spielplanSection || { title: "N\xE4chste Spiele", tagline: "Spielplan", subtitle: "Alle Heimspiele und Ausw\xE4rtstermine des HV L\xFCneburg." };
  const statsSection = hp.statsText || { title: "HV L\xFCneburg", tagline: "In Zahlen", subtitle: "Seit 1946 fester Bestandteil des L\xFCneburger Sports." };
  const teamsText = hp.teamsSection || { title: "Unsere Teams", tagline: "Teams", subtitle: "Von den Aktiven bis zur Jugend." };
  const tabellenText = hp.tabellenSection || { title: "Aktuelle Tabellen", tagline: "Tabelle", subtitle: "Die Tabellen von 1. Herren und 1. Damen im \xDCberblick." };
  const ctaText = hp.ctaSection || { title: "Lust auf Handball?", subtitle: "Schau bei einem Probetraining vorbei und lerne uns kennen. Wir freuen uns auf dich!" };
  const aboutContent = hp.aboutSection || {
    eyebrow: "Seit 1946 in L\xFCneburg",
    title: 'Handball, der <span class="text-primary">verbindet.</span>',
    text: "Seit 1946 steht der HV L\xFCneburg f\xFCr attraktiven Handball in Stadt und Landkreis.",
    buttonText: "Mehr \xFCber den Verein erfahren",
    bullets: [
      { icon: "tabler:heart-handshake", text: "Starker Teamgeist auf und neben dem Feld" },
      { icon: "tabler:shield-check", text: "Gelebtes Fairplay in allen Ligen" },
      { icon: "tabler:star", text: "Aktive Jugendf\xF6rderung" }
    ]
  };
  const clubStatsData = hp.clubStats || [
    { title: "Mitglieder", amount: "250+", icon: "tabler:users" },
    { title: "Teams", amount: "17", icon: "tabler:ball-tennis" },
    { title: "Jahre", amount: "79+", icon: "tabler:calendar" },
    { title: "Spiele / Saison", amount: "100+", icon: "tabler:trophy" }
  ];
  const galleryArray = hp.galleryImages || [
    "https://images.unsplash.com/photo-1548689816-c399f954f3dd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574629810360-7efbb6b69281?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=800&auto=format&fit=crop"
  ];
  const heroSlidesArray = hp.heroImages && hp.heroImages.length > 0 ? hp.heroImages.map((url) => ({ src: url, alt: "Hero Image" })) : [
    { src: "https://images.unsplash.com/photo-1550572017-55de7e1e9c63?q=80&w=1920&auto=format&fit=crop", alt: "HV L\xFCneburg \u2013 Heimspiel" }
  ];
  const sanityTeams = await sanityClient.fetch(`*[_type == "mannschaft"] | order(reihenfolge asc)`);
  const widgetTeams = sanityTeams.length > 0 ? sanityTeams.slice(0, 6) : [];
  const settings = await sanityClient.fetch(`*[_type == "siteSettings"][0]{handballNetSettings}`);
  settings?.handballNetSettings || {};
  const hbConfig = handballNetSettings;
  const matchDate = new Date(nextMatch.date);
  matchDate.toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }) + " \xB7 " + matchDate.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit"
  }) + " Uhr";
  const metadata = {
    title: "HV L\xFCneburg \u2014 Dein Handballverein in L\xFCneburg",
    ignoreTitleTemplate: true
  };
  const bgGray = '<div style="position:absolute;inset:0;background:var(--color-gray-100);"></div>';
  const mockPosts = [
    {
      id: "1",
      type: "spielbericht",
      title: "Derbysieg in letzter Sekunde!",
      date: "12. Nov 2026",
      author: "Redaktion",
      imageUrl: "https://images.unsplash.com/photo-1548689816-c399f954f3dd?q=80&w=1000&auto=format&fit=crop",
      excerpt: "In einem unfassbaren Spiel dreht die 1. Herren einen 4-Tore-R\xFCckstand in den letzten 5 Minuten und sichert sich den Derbysieg.",
      team: "1. Herren",
      score: "28 : 27",
      link: "/blog/derbysieg"
    },
    {
      id: "2",
      type: "ank\xFCndigung",
      title: "Neue Trainingszeiten f\xFCr die E-Jugend",
      date: "10. Nov 2026",
      excerpt: "Bitte beachtet die Hallen\xE4nderung ab kommender Woche Montag.",
      link: "/blog/trainingszeiten"
    },
    {
      id: "3",
      type: "gallery",
      title: "Saisonauftakt 2026",
      date: "01. Sep 2026",
      galleryImages: [
        "https://images.unsplash.com/photo-1574629810360-7efbb6b69281?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1000&auto=format&fit=crop"
      ],
      link: "/blog/galerie-auftakt"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", "  ", '  <div class="sponsor-logo-strip" role="region" aria-label="Unsere Partner"> <span class="sponsor-logo-strip__label">Partner</span> <div class="sponsor-logo-strip__logos"> <!-- Two copies of the track for seamless infinite scroll --> <div class="sponsor-logo-strip__track" aria-hidden="true"> ', ' </div> <div class="sponsor-logo-strip__track" aria-hidden="true"> ', " </div> </div> </div>  ", "  ", '  <section class="home-gallery"> <div class="home-gallery__grid"> ', " </div> </section>  ", "  ", "  ", '  <section id="about" class="relative bg-white dark:bg-[#141414] py-20 md:py-28 border-t border-gray-100 dark:border-[#2A2A2A] overflow-hidden"> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"> <!-- Text Content --> <div class="space-y-8 order-2 lg:order-1"> <div> <span class="heading-eyebrow">', '</span> <h2 class="section-title mt-2">', '</h2> </div> <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">', '</p> <ul class="space-y-4"> ', ' </ul> <div class="pt-4"> <a href="/about" class="btn btn--primary btn--lg btn--pill">', '</a> </div> </div> <!-- Image --> <div class="relative order-1 lg:order-2"> <div class="absolute -inset-4 bg-primary/5 rounded-3xl -z-10"></div> <div class="absolute -top-2 -right-2 w-24 h-24 border-4 border-primary/20 rounded-2xl -z-10"></div> <img', ' alt="\xDCber uns Bild" class="w-full rounded-2xl shadow-xl border border-gray-100 dark:border-[#2A2A2A] object-cover aspect-[4/3]"> </div> </div> </div> </section>  ', "  <script>(function(){", `
    (function(e,t,n,r,i,s,o){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},
    e[i].l=1*new Date;s=t.createElement(n),o=t.getElementsByTagName(n)[0];s.async=1;
    s.src=r;o.parentNode.insertBefore(s,o)})(window,document,"script",
    'https://www.handball.net/widgets/embed/v1.js',"_hb");

    // Startseite Spielplan (alles)
    var spielplanOptions = { widget: 'spielplan', container: 'hb-vereins-spielplan' };
    if (hbConfig.clubId) spielplanOptions.clubId = hbConfig.clubId;
    if (hbConfig.organizationId) spielplanOptions.organizationId = hbConfig.organizationId;
    _hb(spielplanOptions);

    // Tabelle 1. Herren
    var tabelleHerrenOptions = { widget: 'tabelle', container: 'hb-tabelle-herren1' };
    if (hbConfig.clubId) tabelleHerrenOptions.clubId = hbConfig.clubId;
    if (hbConfig.tournamentIdHerren) tabelleHerrenOptions.tournamentId = hbConfig.tournamentIdHerren;
    if (hbConfig.teamIdHerren) tabelleHerrenOptions.teamId = hbConfig.teamIdHerren;
    _hb(tabelleHerrenOptions);

    // Tabelle 1. Damen
    if (hbConfig.tournamentIdDamen || hbConfig.teamIdDamen) {
      var tabelleDamenOptions = { widget: 'tabelle', container: 'hb-tabelle-damen1' };
      if (hbConfig.clubId) tabelleDamenOptions.clubId = hbConfig.clubId;
      if (hbConfig.tournamentIdDamen) tabelleDamenOptions.tournamentId = hbConfig.tournamentIdDamen;
      if (hbConfig.teamIdDamen) tabelleDamenOptions.teamId = hbConfig.teamIdDamen;
      _hb(tabelleDamenOptions);
    }
  })();<\/script>  <script>
    (function () {
      var el = document.getElementById('hero-countdown');
      if (!el) return;
      var target = new Date(el.dataset.target).getTime();
      if (isNaN(target)) return;
      function update() {
        var diff = target - Date.now();
        if (diff <= 0) { el.textContent = 'Heute!'; return; }
        var d = Math.floor(diff / 86400000);
        var h = Math.floor((diff % 86400000) / 3600000);
        var m = Math.floor((diff % 3600000) / 60000);
        el.textContent = 'Noch\\u00A0' + d + 'T\\u00A0' + h + 'h\\u00A0' + m + 'm';
      }
      update();
      setInterval(update, 60000);
    })();
  <\/script>  <script>
    (function () {
      var CONTAINER = document.getElementById('hb-vereins-spielplan');
      if (!CONTAINER) return;

      function tryUpdate() {
        // Find the first game group/row
        var firstGroup = CONTAINER.querySelector('.hb-embed__schedule-list-grouped-item') || CONTAINER.querySelector('.hb-embed__schedule-entry');
        if (!firstGroup) return false;

        // --- 1. Extract Teams (Home & Guest) ---
        var teamEls = firstGroup.querySelectorAll('.hb-embed__schedule-list-item-team-name, .hb-embed__schedule-team, .hb-embed__team-name');
        if (teamEls.length >= 2) {
          var homeName = teamEls[0].textContent.trim().replace('Handballverein', 'HV');
          var guestName = teamEls[teamEls.length - 1].textContent.trim().replace('Handballverein', 'HV');
          
          var uiTeams = document.querySelectorAll('.fixture-card__teams .fixture-card__team');
          if (uiTeams.length >= 2) {
            uiTeams[0].textContent = homeName;
            uiTeams[1].textContent = guestName;
          }
        } else if (teamEls.length === 1) {
          var guestEl = teamEls[0];
          var opponentEl = document.querySelector('.fixture-card__teams .fixture-card__team:last-child');
          if (opponentEl) opponentEl.textContent = guestEl.textContent.trim().replace('Handballverein', 'HV');
        }

        // --- 2. Extract Date & Time ---
        var dateEl = firstGroup.querySelector('.hb-embed__schedule-list-item-date, .hb-embed__schedule-date, .date, .hb-embed__date');
        var timeEl = firstGroup.querySelector('.hb-embed__schedule-list-item-starts-at-time, .hb-embed__schedule-time, time, .hb-embed__time');
        
        var dateText = dateEl ? dateEl.textContent.trim() : null;
        var timeText = timeEl ? timeEl.textContent.trim() : null;

        // If we didn't find specific elements, try extracting from the entire block text
        if (!dateText && firstGroup.textContent) {
           var fullText = firstGroup.textContent;
           var dateMatchFallback = fullText.match(/(\\d{1,2}\\.\\d{1,2}\\.(\\d{2}|\\d{4}))/);
           if (dateMatchFallback) dateText = dateMatchFallback[1];
           
           var timeMatchFallback = fullText.match(/(\\d{1,2}:\\d{2})/);
           if (timeMatchFallback) timeText = timeMatchFallback[1];
        }

        if (dateText) {
          var dateDisplay = document.querySelector('.fixture-card__date');
          
          // Clean texts for UI
          var cleanDateUI = dateText;
          if (timeText) {
             cleanDateUI += ' \xB7 ' + timeText;
          }
          if (dateDisplay) dateDisplay.textContent = cleanDateUI;

          // Compute ISO string for countdown
          // Extract matching parts from "Samstag, 28.2.2026" or "28.02.26"
          var dateMatch = dateText.match(/(\\d{1,2})\\.(\\d{1,2})\\.(\\d{2,4})/);
          if (dateMatch) {
            var d = dateMatch[1].padStart(2, '0');
            var m = dateMatch[2].padStart(2, '0');
            var y = dateMatch[3].length === 2 ? '20' + dateMatch[3] : dateMatch[3];
            
            var t = '00:00';
            if (timeText) {
               var timeMatch = timeText.match(/(\\d{1,2}:\\d{2})/);
               if (timeMatch) t = timeMatch[1].padStart(5, '0');
            }
            
            var isoString = y + '-' + m + '-' + d + 'T' + t + ':00';
            var parsed = Date.parse(isoString);
            
            if (!isNaN(parsed)) {
              var countdown = document.getElementById('hero-countdown');
              if (countdown) countdown.dataset.target = new Date(parsed).toISOString();
            }
          }
        }

        return true;
      }

      // Watch for the widget to inject its HTML
      var observer = new MutationObserver(function (_, obs) {
        if (tryUpdate()) obs.disconnect();
      });
      observer.observe(CONTAINER, { childList: true, subtree: true });

      // Also try immediately in case it already rendered
      tryUpdate();

      // Disconnect after 15 s regardless to avoid memory leaks
      setTimeout(function () { observer.disconnect(); }, 15000);
    })();
  <\/script> `], [" ", "  ", '  <div class="sponsor-logo-strip" role="region" aria-label="Unsere Partner"> <span class="sponsor-logo-strip__label">Partner</span> <div class="sponsor-logo-strip__logos"> <!-- Two copies of the track for seamless infinite scroll --> <div class="sponsor-logo-strip__track" aria-hidden="true"> ', ' </div> <div class="sponsor-logo-strip__track" aria-hidden="true"> ', " </div> </div> </div>  ", "  ", '  <section class="home-gallery"> <div class="home-gallery__grid"> ', " </div> </section>  ", "  ", "  ", '  <section id="about" class="relative bg-white dark:bg-[#141414] py-20 md:py-28 border-t border-gray-100 dark:border-[#2A2A2A] overflow-hidden"> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"> <!-- Text Content --> <div class="space-y-8 order-2 lg:order-1"> <div> <span class="heading-eyebrow">', '</span> <h2 class="section-title mt-2">', '</h2> </div> <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">', '</p> <ul class="space-y-4"> ', ' </ul> <div class="pt-4"> <a href="/about" class="btn btn--primary btn--lg btn--pill">', '</a> </div> </div> <!-- Image --> <div class="relative order-1 lg:order-2"> <div class="absolute -inset-4 bg-primary/5 rounded-3xl -z-10"></div> <div class="absolute -top-2 -right-2 w-24 h-24 border-4 border-primary/20 rounded-2xl -z-10"></div> <img', ' alt="\xDCber uns Bild" class="w-full rounded-2xl shadow-xl border border-gray-100 dark:border-[#2A2A2A] object-cover aspect-[4/3]"> </div> </div> </div> </section>  ', "  <script>(function(){", `
    (function(e,t,n,r,i,s,o){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},
    e[i].l=1*new Date;s=t.createElement(n),o=t.getElementsByTagName(n)[0];s.async=1;
    s.src=r;o.parentNode.insertBefore(s,o)})(window,document,"script",
    'https://www.handball.net/widgets/embed/v1.js',"_hb");

    // Startseite Spielplan (alles)
    var spielplanOptions = { widget: 'spielplan', container: 'hb-vereins-spielplan' };
    if (hbConfig.clubId) spielplanOptions.clubId = hbConfig.clubId;
    if (hbConfig.organizationId) spielplanOptions.organizationId = hbConfig.organizationId;
    _hb(spielplanOptions);

    // Tabelle 1. Herren
    var tabelleHerrenOptions = { widget: 'tabelle', container: 'hb-tabelle-herren1' };
    if (hbConfig.clubId) tabelleHerrenOptions.clubId = hbConfig.clubId;
    if (hbConfig.tournamentIdHerren) tabelleHerrenOptions.tournamentId = hbConfig.tournamentIdHerren;
    if (hbConfig.teamIdHerren) tabelleHerrenOptions.teamId = hbConfig.teamIdHerren;
    _hb(tabelleHerrenOptions);

    // Tabelle 1. Damen
    if (hbConfig.tournamentIdDamen || hbConfig.teamIdDamen) {
      var tabelleDamenOptions = { widget: 'tabelle', container: 'hb-tabelle-damen1' };
      if (hbConfig.clubId) tabelleDamenOptions.clubId = hbConfig.clubId;
      if (hbConfig.tournamentIdDamen) tabelleDamenOptions.tournamentId = hbConfig.tournamentIdDamen;
      if (hbConfig.teamIdDamen) tabelleDamenOptions.teamId = hbConfig.teamIdDamen;
      _hb(tabelleDamenOptions);
    }
  })();<\/script>  <script>
    (function () {
      var el = document.getElementById('hero-countdown');
      if (!el) return;
      var target = new Date(el.dataset.target).getTime();
      if (isNaN(target)) return;
      function update() {
        var diff = target - Date.now();
        if (diff <= 0) { el.textContent = 'Heute!'; return; }
        var d = Math.floor(diff / 86400000);
        var h = Math.floor((diff % 86400000) / 3600000);
        var m = Math.floor((diff % 3600000) / 60000);
        el.textContent = 'Noch\\\\u00A0' + d + 'T\\\\u00A0' + h + 'h\\\\u00A0' + m + 'm';
      }
      update();
      setInterval(update, 60000);
    })();
  <\/script>  <script>
    (function () {
      var CONTAINER = document.getElementById('hb-vereins-spielplan');
      if (!CONTAINER) return;

      function tryUpdate() {
        // Find the first game group/row
        var firstGroup = CONTAINER.querySelector('.hb-embed__schedule-list-grouped-item') || CONTAINER.querySelector('.hb-embed__schedule-entry');
        if (!firstGroup) return false;

        // --- 1. Extract Teams (Home & Guest) ---
        var teamEls = firstGroup.querySelectorAll('.hb-embed__schedule-list-item-team-name, .hb-embed__schedule-team, .hb-embed__team-name');
        if (teamEls.length >= 2) {
          var homeName = teamEls[0].textContent.trim().replace('Handballverein', 'HV');
          var guestName = teamEls[teamEls.length - 1].textContent.trim().replace('Handballverein', 'HV');
          
          var uiTeams = document.querySelectorAll('.fixture-card__teams .fixture-card__team');
          if (uiTeams.length >= 2) {
            uiTeams[0].textContent = homeName;
            uiTeams[1].textContent = guestName;
          }
        } else if (teamEls.length === 1) {
          var guestEl = teamEls[0];
          var opponentEl = document.querySelector('.fixture-card__teams .fixture-card__team:last-child');
          if (opponentEl) opponentEl.textContent = guestEl.textContent.trim().replace('Handballverein', 'HV');
        }

        // --- 2. Extract Date & Time ---
        var dateEl = firstGroup.querySelector('.hb-embed__schedule-list-item-date, .hb-embed__schedule-date, .date, .hb-embed__date');
        var timeEl = firstGroup.querySelector('.hb-embed__schedule-list-item-starts-at-time, .hb-embed__schedule-time, time, .hb-embed__time');
        
        var dateText = dateEl ? dateEl.textContent.trim() : null;
        var timeText = timeEl ? timeEl.textContent.trim() : null;

        // If we didn't find specific elements, try extracting from the entire block text
        if (!dateText && firstGroup.textContent) {
           var fullText = firstGroup.textContent;
           var dateMatchFallback = fullText.match(/(\\\\d{1,2}\\\\.\\\\d{1,2}\\\\.(\\\\d{2}|\\\\d{4}))/);
           if (dateMatchFallback) dateText = dateMatchFallback[1];
           
           var timeMatchFallback = fullText.match(/(\\\\d{1,2}:\\\\d{2})/);
           if (timeMatchFallback) timeText = timeMatchFallback[1];
        }

        if (dateText) {
          var dateDisplay = document.querySelector('.fixture-card__date');
          
          // Clean texts for UI
          var cleanDateUI = dateText;
          if (timeText) {
             cleanDateUI += ' \xB7 ' + timeText;
          }
          if (dateDisplay) dateDisplay.textContent = cleanDateUI;

          // Compute ISO string for countdown
          // Extract matching parts from "Samstag, 28.2.2026" or "28.02.26"
          var dateMatch = dateText.match(/(\\\\d{1,2})\\\\.(\\\\d{1,2})\\\\.(\\\\d{2,4})/);
          if (dateMatch) {
            var d = dateMatch[1].padStart(2, '0');
            var m = dateMatch[2].padStart(2, '0');
            var y = dateMatch[3].length === 2 ? '20' + dateMatch[3] : dateMatch[3];
            
            var t = '00:00';
            if (timeText) {
               var timeMatch = timeText.match(/(\\\\d{1,2}:\\\\d{2})/);
               if (timeMatch) t = timeMatch[1].padStart(5, '0');
            }
            
            var isoString = y + '-' + m + '-' + d + 'T' + t + ':00';
            var parsed = Date.parse(isoString);
            
            if (!isNaN(parsed)) {
              var countdown = document.getElementById('hero-countdown');
              if (countdown) countdown.dataset.target = new Date(parsed).toISOString();
            }
          }
        }

        return true;
      }

      // Watch for the widget to inject its HTML
      var observer = new MutationObserver(function (_, obs) {
        if (tryUpdate()) obs.disconnect();
      });
      observer.observe(CONTAINER, { childList: true, subtree: true });

      // Also try immediately in case it already rendered
      tryUpdate();

      // Disconnect after 15 s regardless to avoid memory leaks
      setTimeout(function () { observer.disconnect(); }, 15000);
    })();
  <\/script> `])), renderComponent($$result2, "StickyScorebar", $$StickyScorebar, {}), renderComponent($$result2, "Hero2", $$Hero2, { "tagline": heroText.tagline, "actions": [
    { variant: "primary", text: "Mehr erfahren", href: "/about", icon: "tabler:arrow-right" },
    { text: "Probetraining", href: "/contact", icon: "tabler:ball-tennis" }
  ], "slides": heroSlidesArray }, { "fixture": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "fixture" }, { "default": async ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="fixture-card"> <div class="fixture-card__eyebrow"> <span class="badge badge--primary">Nächstes Spiel</span> <span class="fixture-card__league">${nextMatch.league}</span> </div> <div class="fixture-card__teams"> <span class="fixture-card__team">...</span> <span class="fixture-card__vs">VS</span> <span class="fixture-card__team">...</span> </div> <div class="fixture-card__meta"> <span class="fixture-card__date">Lade Spieldaten...</span> <span class="fixture-card__venue"></span> </div> <div class="fixture-card__countdown" id="hero-countdown" data-target="" aria-live="polite"></div> <a${addAttribute(nextMatch.scheduleUrl, "href")} class="fixture-card__link">Spielplan ansehen →</a> </div> ` })}`, "subtitle": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": async ($$result4) => renderTemplate`${unescapeHTML(heroText.subtitle)}` })}`, "title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result4) => renderTemplate`${unescapeHTML(heroText.title)}` })}` }), sponsorStrip.map((s) => renderTemplate`<a class="sponsor-logo-strip__item"${addAttribute(s.href, "href")}${addAttribute(s.name, "aria-label")}> ${s.src ? renderTemplate`<img${addAttribute(s.src, "src")}${addAttribute(s.name, "alt")} class="h-6 w-auto object-contain">` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span class="sponsor-logo-strip__mark">${s.mark}</span> <span class="sponsor-logo-strip__name">${s.name}</span> ` })}`} </a>`), sponsorStrip.map((s) => renderTemplate`<a class="sponsor-logo-strip__item"${addAttribute(s.href, "href")}${addAttribute(s.name, "aria-label")} tabindex="-1"> ${s.src ? renderTemplate`<img${addAttribute(s.src, "src")}${addAttribute(s.name, "alt")} class="h-6 w-auto object-contain">` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span class="sponsor-logo-strip__mark">${s.mark}</span> <span class="sponsor-logo-strip__name">${s.name}</span> ` })}`} </a>`), renderComponent($$result2, "WidgetWrapper", $$WidgetWrapper, { "id": "spielplan", "containerClass": "max-w-6xl mx-auto" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Headline", $$Headline, { "title": spielplanText.title, "tagline": spielplanText.tagline, "subtitle": spielplanText.subtitle })} <div class="handball-wrapper"> <div id="hb-vereins-spielplan"></div> </div> ` }), renderComponent($$result2, "DynamicContentFeed", $$DynamicContentFeed, { "posts": mockPosts }), galleryArray.map((img, i) => renderTemplate`<div class="home-gallery__item"> <img${addAttribute(img, "src")}${addAttribute(`Galerie Bild ${i + 1}`, "alt")} loading="lazy"> </div>`), renderComponent($$result2, "Stats", $$Stats, { "isDark": true, "tagline": statsSection.tagline, "title": statsSection.title, "subtitle": statsSection.subtitle, "stats": clubStatsData }), renderComponent($$result2, "Features2", $$Features2, { "id": "teams", "tagline": teamsText.tagline, "title": teamsText.title, "subtitle": teamsText.subtitle, "columns": 3, "bg": bgGray, "items": widgetTeams.map((team) => ({
    title: team.name,
    description: `${team.beschreibung || ""}`,
    icon: "tabler:shirt-sport",
    callToAction: { text: "Mehr erfahren", href: `/teams/${team.slug?.current || team.slug}` }
  })) }), renderComponent($$result2, "WidgetWrapper", $$WidgetWrapper, { "id": "tabellen", "containerClass": "max-w-7xl mx-auto px-0 sm:px-4" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Headline", $$Headline, { "title": tabellenText.title, "tagline": tabellenText.tagline, "subtitle": tabellenText.subtitle })} <div class="tables-view"> <div class="tables-view__track"> <div class="tables-view__item"> <div class="handball-wrapper"> <div class="handball-wrapper__label">1. Herren</div> <div id="hb-tabelle-herren1"></div> </div> </div> <div class="tables-view__item"> <div class="handball-wrapper"> <div class="handball-wrapper__label">1. Damen</div> <div id="hb-tabelle-damen1"></div> </div> </div> </div> </div> ` }), aboutContent.eyebrow, unescapeHTML(aboutContent.title), unescapeHTML(aboutContent.text), (aboutContent.bullets || []).map(({ icon, text }) => renderTemplate`<li class="flex items-center gap-4"> <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon || "tabler:check", "class": "w-5 h-5" })} </div> <span class="font-heading font-bold uppercase text-sm text-gray-900 dark:text-white">${text}</span> </li>`), aboutContent.buttonText || "Mehr erfahren", addAttribute(hp.aboutImage || "https://images.unsplash.com/photo-1548689816-c399f954f3dd?q=80&w=800&auto=format&fit=crop", "src"), renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    { variant: "primary", text: "Kontakt aufnehmen", href: "/contact", icon: "tabler:mail" }
  ] }, { "subtitle": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": async ($$result4) => renderTemplate`${unescapeHTML(ctaText.subtitle)}` })}`, "title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result4) => renderTemplate`${unescapeHTML(ctaText.title)}` })}` }), defineScriptVars({ hbConfig })) })}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/index.astro", void 0);

const $$file = "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
