import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, b as createAstro } from '../chunks/astro/server_DZrFQFCy.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Join = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Join;
  const req = Astro2.locals;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta property="og:site_name" content="VainDiscord by Kyanoxia"><meta property="og:title"${addAttribute(`${req.dscName}`, "content")}><meta property="og:description"${addAttribute(`${req.dscDesc}`, "content")}><meta property="og:image"${addAttribute(`${req.dscImg}`, "content")}><meta name="theme-color" content="#D4CBE5"><title>Join Us</title>${renderHead()}</head> <body> <h1>Redirecting...</h1> <p>If you're seeing this, the site is most likely broken! Please contact Kyanoxia to fix it!</p>
- </body></html>`;
}, "C:/Users/Kyanoxia/Documents/Developer/kyanet-astro/src/pages/join.astro", void 0);

const $$file = "C:/Users/Kyanoxia/Documents/Developer/kyanet-astro/src/pages/join.astro";
const $$url = "/join";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Join,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
