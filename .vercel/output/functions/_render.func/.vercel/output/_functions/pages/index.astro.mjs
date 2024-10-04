import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, d as renderComponent, b as createAstro } from '../chunks/astro/server_DZrFQFCy.mjs';
import 'kleur/colors';
import { $ as $$KFooter } from '../chunks/KFooter_BCJSbcV_.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "The Kyanet";
  const identity = {
    name: "Kyanoxia Rivera",
    country: "United States",
    nickname: "Kya",
    pronouns: "she/her",
    race: "Human Fox Hybrid",
    discord: "DVvGFXqpqH",
    occupation: "Graphic Designer"
  };
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body style="background-color: #1b1b1b;"> <div class="content" style="display: flex; justify-content: center; align-items: center;"> <h1 class="grotesk-head-2" style="line-height: 1; font-size: 2.5em; margin-bottom: 0;">${identity.name}</h1> <h1 class="grotesk-head" style="font-size: 5em; line-height: 0.75;">${pageTitle}</h1> </div> <a href="/card" class="dm-foot">COMING SOON</a> <footer> ${renderComponent($$result, "KFooter", $$KFooter, {})} </footer> </body></html>`;
}, "C:/Users/Kyanoxia/Documents/Developer/kyanet-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Kyanoxia/Documents/Developer/kyanet-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
