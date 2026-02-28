import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_DIIrBVhZ.mjs';
import 'piccolore';
import { $ as $$WidgetWrapper } from './WidgetWrapper_CEAq88zL.mjs';
import { $ as $$Headline } from './Headline_DEIoZudA.mjs';
import { a as $$Icon } from './PageLayout_lQFaGjkI.mjs';
/* empty css                         */

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stats;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    stats = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg, "data-astro-cid-jmv2s4fh": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-12" data-astro-cid-jmv2s4fh> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    title: "text-3xl md:text-5xl font-black font-heading tracking-tight uppercase mb-4 text-white",
    subtitle: "text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
  }, "data-astro-cid-jmv2s4fh": true })} </div> <div class="stats-grid" data-astro-cid-jmv2s4fh> ${stats.map(({ amount, title: statTitle, icon }) => renderTemplate`<div class="card card--stat stats-grid__item" data-astro-cid-jmv2s4fh> ${icon && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-10 h-10 mb-4 mx-auto", "style": "color: rgba(255,255,255,0.6);", "data-astro-cid-jmv2s4fh": true })}`} ${amount && renderTemplate`<div class="stat-number" data-astro-cid-jmv2s4fh>${amount}</div>`} ${statTitle && renderTemplate`<div class="stat-label" data-astro-cid-jmv2s4fh>${statTitle}</div>`} </div>`)} </div> ` })} `;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/components/widgets/Stats.astro", void 0);

export { $$Stats as $ };
