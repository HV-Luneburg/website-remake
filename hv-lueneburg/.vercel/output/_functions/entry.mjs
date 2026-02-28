import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Bq9p_f9d.mjs';
import { manifest } from './manifest_Cgz3Tj5G.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin/_---params_.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/einblicke.astro.mjs');
const _page6 = () => import('./pages/intern/assets.astro.mjs');
const _page7 = () => import('./pages/intern/dashboard.astro.mjs');
const _page8 = () => import('./pages/intern.astro.mjs');
const _page9 = () => import('./pages/privacy.astro.mjs');
const _page10 = () => import('./pages/rss.xml.astro.mjs');
const _page11 = () => import('./pages/sponsoring.astro.mjs');
const _page12 = () => import('./pages/teams/_slug_.astro.mjs');
const _page13 = () => import('./pages/teams.astro.mjs');
const _page14 = () => import('./pages/terms.astro.mjs');
const _page15 = () => import('./pages/_---blog_/_category_/_---page_.astro.mjs');
const _page16 = () => import('./pages/_---blog_/_tag_/_---page_.astro.mjs');
const _page17 = () => import('./pages/_---blog_/_---page_.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const _page19 = () => import('./pages/_---blog_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/einblicke.astro", _page5],
    ["src/pages/intern/assets.astro", _page6],
    ["src/pages/intern/dashboard.astro", _page7],
    ["src/pages/intern/index.astro", _page8],
    ["src/pages/privacy.md", _page9],
    ["src/pages/rss.xml.ts", _page10],
    ["src/pages/sponsoring/index.astro", _page11],
    ["src/pages/teams/[slug].astro", _page12],
    ["src/pages/teams/index.astro", _page13],
    ["src/pages/terms.md", _page14],
    ["src/pages/[...blog]/[category]/[...page].astro", _page15],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page16],
    ["src/pages/[...blog]/[...page].astro", _page17],
    ["src/pages/index.astro", _page18],
    ["src/pages/[...blog]/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "af77fcc8-227f-4dfa-a9fe-ca212076c6a3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
