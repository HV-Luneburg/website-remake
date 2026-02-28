import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, a as renderTemplate } from './astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import 'clsx';
import { twMerge } from 'tailwind-merge';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Headline;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "",
    title: titleClass = "",
    subtitle: subtitleClass = ""
  } = classes;
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge("section-header section-header--center mb-8 md:mb-12", containerClass), "class")}>${tagline && renderTemplate`<span class="heading-eyebrow">${unescapeHTML(tagline)}</span>`}${title && renderTemplate`<h2${addAttribute(twMerge("section-title intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade", titleClass), "class")}>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("subheading mt-4 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade", subtitleClass), "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/components/ui/Headline.astro", void 0);

export { $$Headline as $ };
