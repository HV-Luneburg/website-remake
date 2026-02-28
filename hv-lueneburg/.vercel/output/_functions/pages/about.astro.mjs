import '../chunks/page-ssr_aPhGMzXi.mjs';
import { d as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, r as renderComponent, F as Fragment, a as renderTemplate, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import { $ as $$Image } from '../chunks/Image_ByNUY0Mf.mjs';
import { $ as $$Button, a as $$Icon, b as $$PageLayout } from '../chunks/PageLayout_lQFaGjkI.mjs';
import { $ as $$Stats } from '../chunks/Stats_EsV9vw9r.mjs';
import { $ as $$WidgetWrapper } from '../chunks/WidgetWrapper_CEAq88zL.mjs';
import { $ as $$Headline } from '../chunks/Headline_DEIoZudA.mjs';
import { s as sanityClient } from '../chunks/_sanity_client_D5Y93ZeM.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://astrowind.vercel.app");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image"),
    id,
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="not-prose" style="
    position: relative;
    background: linear-gradient(135deg, var(--color-black, #0c0c0c) 60%, var(--color-primary-dark, #B5000F) 100%);
    color: #fff;
    padding: clamp(4rem, 12vw, 8rem) var(--container-pad, clamp(1.5rem, 5vw, 4rem));
    overflow: hidden;
  "${spreadAttributes(id ? { id } : {})}> <!-- Optional bg slot --> ${bg && renderTemplate`<div style="position:absolute;inset:0;z-index:0;pointer-events:none;" aria-hidden="true"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(bg)}` })} </div>`} <!-- Jersey-number decoration --> <span aria-hidden="true" style="
      position: absolute;
      right: -0.05em;
      bottom: -0.1em;
      font-family: var(--font-display, 'Barlow Condensed');
      font-size: clamp(8rem, 25vw, 22rem);
      font-weight: 900;
      line-height: 1;
      letter-spacing: -0.02em;
      color: rgba(255,255,255,0.04);
      pointer-events: none;
      z-index: 1;
      user-select: none;
      text-transform: uppercase;
    ">HVL</span> <div class="intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade" style="position:relative;z-index:2;max-width:var(--container-xl,1280px);margin:0 auto;text-align:center;"> ${tagline && renderTemplate`<span class="heading-eyebrow">${tagline}</span>`} ${title && renderTemplate`<h1 style="
          font-family: var(--font-display, 'Barlow Condensed');
          font-size: clamp(2.5rem, 7vw, 5rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 20px rgba(0,0,0,.5);
        ">${unescapeHTML(title)}</h1>`} ${subtitle && renderTemplate`<p style="
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 1.4;
          color: rgba(255,255,255,.85);
          margin-bottom: 2rem;
          max-width: 55ch;
          margin-left: auto;
          margin-right: auto;
        ">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;margin-top:0.5rem;"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": action.variant === "primary" ? "btn btn--primary btn--lg" : "btn btn--outline-white btn--lg" })}`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> ${image && renderTemplate`<div style="margin-top:3rem;position:relative;z-index:2;max-width:64rem;margin-left:auto;margin-right:auto;"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 1024, "height": 576, ...image })}`} </div>`} </section>`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/components/widgets/Hero.astro", void 0);

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Steps2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Steps2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    callToAction = await Astro2.slots.render("callToAction"),
    items = [],
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`flex flex-col gap-8 md:gap-12 md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}`, "class")}> <div${addAttribute(`w-full lg:w-1/2 gap-8 md:gap-12 ${isReversed ? "lg:ml-16 md:ml-8 ml-0" : "lg:mr-16 md:mr-8 mr-0"}`, "class")}> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-center md:text-left rtl:md:text-right mb-4 md:mb-8",
    title: "mb-4 text-3xl lg:text-4xl font-bold font-heading",
    subtitle: "mb-8 text-xl text-muted dark:text-slate-400"
    // ...((classes?.headline as {}) ?? {}),
  } })} <div class="w-full text-center md:text-left rtl:md:text-right"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.text && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "primary", ...callToAction, "class": "mb-12 w-auto" })}`} </div> </div> <div class="w-full lg:w-1/2 px-0"> <ul class="space-y-10"> ${items && items.length ? items.map(({ title: title2, description, icon }, index) => renderTemplate`<li class="flex md:-mx-4"> <div class="pr-4 sm:pl-4 rtl:pr-0 rtl:pl-4 rtl:sm:pl-0 rtl:sm:pr-4"> <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-100 text-primary"> ${icon ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-6 h-6 icon-bold" })}` : index + 1} </span> </div> <div class="pl-4 rtl:pl-0 rtl:pr-4"> <h3 class="mb-4 text-xl font-semibold font-heading">${unescapeHTML(title2)}</h3> <p class="text-muted dark:text-gray-400">${unescapeHTML(description)}</p> </div> </li>`) : ""} </ul> </div> </div> ` })}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/components/widgets/Steps2.astro", void 0);

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const sanityAboutPage = await sanityClient.fetch(`*[_type == "aboutPage"][0]{
  ...,
  "heroImage": hero.image.asset->url
}`);
  const about = sanityAboutPage || {};
  const heroData = about.hero || {
    tagline: "\xDCber uns",
    title: '\xDCber den <span class="text-accent dark:text-white">HV L\xFCneburg</span>',
    subtitle: "Der Handballverein L\xFCneburg steht f\xFCr Handball mit Leidenschaft. Seit unserer Gr\xFCndung f\xF6rdern wir den Handballsport in L\xFCneburg und Umgebung \u2014 vom Nachwuchs bis zu den Aktiven."
  };
  const statsData = about.statsText || {
    title: "Unser Verein in Zahlen",
    stats: [
      { title: "Gr\xFCndungsjahr", amount: "1946" },
      { title: "Teams", amount: "17" },
      { title: "Mitglieder", amount: "250+" }
    ]
  };
  const valuesData = about.valuesSection || {
    title: "Unsere Werte",
    subtitle: "Was uns als Verein antreibt und zusammenh\xE4lt.",
    items: [
      {
        title: "Teamgeist",
        description: "Gemeinsam sind wir stark \u2014 auf und neben dem Spielfeld. Bei uns z\xE4hlt das Miteinander."
      },
      {
        title: "Fairplay",
        description: "Respekt gegen\xFCber Mitspielern, Gegnern und Schiedsrichtern ist f\xFCr uns selbstverst\xE4ndlich."
      },
      {
        title: "Jugendf\xF6rderung",
        description: "Wir investieren in die Zukunft des Handballs und bieten jungen Spielerinnen und Spielern die beste Ausbildung."
      }
    ]
  };
  const heroImageUrl = about.heroImage || "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  const metadata = {
    title: "\xDCber uns | HV L\xFCneburg"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": heroData.tagline, "image": {
    src: heroImageUrl,
    alt: "HV L\xFCneburg"
  } }, { "subtitle": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": async ($$result4) => renderTemplate`${unescapeHTML(heroData.subtitle)}` })}`, "title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result4) => renderTemplate`${unescapeHTML(heroData.title)}` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": statsData.title, "stats": statsData.stats.map((s) => ({ title: s.title, amount: s.amount })) })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": valuesData.title, "subtitle": valuesData.subtitle, "items": valuesData.items.map((i) => ({ title: i.title, description: i.description })) })} ` })}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/about.astro", void 0);

const $$file = "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
