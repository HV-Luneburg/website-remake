import { d as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, a as renderTemplate, u as unescapeHTML, r as renderComponent, F as Fragment } from './astro/server_DIIrBVhZ.mjs';
import { $ as $$Button } from './PageLayout_lQFaGjkI.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    actions = await Astro2.slots.render("actions"),
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="not-prose section--accented intersect-once intersect-quarter intersect-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade" style="
    background: linear-gradient(135deg, var(--color-black, #0c0c0c) 0%, var(--color-secondary-dark, #0E2560) 100%);
    padding: var(--space-20, 5rem) var(--container-pad, clamp(1.5rem, 5vw, 4rem));
    text-align: center;
    color: #fff;
    position: relative;
    overflow: hidden;
  "${spreadAttributes(id ? { id } : {})}> <!-- Jersey-number background decoration --> <span aria-hidden="true" style="
      position: absolute;
      right: -0.05em;
      bottom: -0.15em;
      font-family: var(--font-display, 'Barlow Condensed');
      font-size: clamp(8rem, 22vw, 20rem);
      font-weight: 900;
      line-height: 1;
      letter-spacing: -0.02em;
      color: rgba(255,255,255,0.04);
      pointer-events: none;
      user-select: none;
    ">HVL</span> <div style="position:relative;z-index:2;max-width:var(--container-md,768px);margin:0 auto;"> ${tagline && renderTemplate`<span class="heading-eyebrow">${tagline}</span>`} ${title && renderTemplate`<h2 style="
          font-family: var(--font-display, 'Barlow Condensed');
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 1.25rem;
        ">${unescapeHTML(title)}</h2>`} ${subtitle && renderTemplate`<p style="
          font-size: 1.125rem;
          line-height: 1.55;
          color: rgba(255,255,255,0.8);
          margin-bottom: 2.5rem;
          max-width: 52ch;
          margin-left: auto;
          margin-right: auto;
        ">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": action.variant === "primary" ? "btn btn--primary btn--lg btn--pill" : "btn btn--outline-white btn--lg btn--pill" })}`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> </section>`;
}, "/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg/src/components/widgets/CallToAction.astro", void 0);

export { $$CallToAction as $ };
