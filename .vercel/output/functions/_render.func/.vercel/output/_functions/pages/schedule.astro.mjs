import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, d as renderComponent, b as createAstro } from '../chunks/astro/server_DZrFQFCy.mjs';
import 'kleur/colors';
import { $ as $$KFooter } from '../chunks/KFooter_BCJSbcV_.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Schedule = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Schedule;
  const req = Astro2.locals;
  const pageTitle = "Schedule - The Kyanet";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body style="background-color: #1b1b1b;"> <h1>Calendar Info:</h1> <div class="calendar"> <p>Sunday: ${typeof req.schedule["Sunday"]?.categories[0] === "undefined" ? "Resting" : req.schedule["Sunday"]?.categories[0]}</p> <p>Monday: ${typeof req.schedule["Monday"]?.categories[0] === "undefined" ? "Resting" : req.schedule["Monday"]?.categories[0]}</p> <p>Tuesday: ${typeof req.schedule["Tuesday"]?.categories[0] === "undefined" ? "Resting" : req.schedule["Tuesday"]?.categories[0]}</p> <p>Wednesday: ${typeof req.schedule["Wednesday"]?.categories[0] === "undefined" ? "Resting" : req.schedule["Wednesday"]?.categories[0]}</p> <p>Thursday: ${typeof req.schedule["Thursday"]?.categories[0] === "undefined" ? "Resting" : req.schedule["Thursday"]?.categories[0]}</p> <p>Friday: ${typeof req.schedule["Friday"]?.categories[0] === "undefined" ? "Resting" : req.schedule["Friday"]?.categories[0]}</p> <p>Saturday: ${typeof req.schedule["Saturday"]?.categories[0] === "undefined" ? "Resting" : req.schedule["Saturday"]?.categories[0]}</p> </div> <p>If images are not loading, please <a href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=z4pwosn4a3lyqhm139nw1wx6t5ytn2&redirect_uri=http://localhost:4321/schedule&scope=user%3Aread%3Achat">Connect with Twitch.</a> <a href="/support/twitch-connection">Why am I seeing this?</a></p> <footer> ${renderComponent($$result, "KFooter", $$KFooter, {})} </footer> </body></html>`;
}, "C:/Users/Kyanoxia/Documents/Developer/kyanet-astro/src/pages/schedule.astro", void 0);

const $$file = "C:/Users/Kyanoxia/Documents/Developer/kyanet-astro/src/pages/schedule.astro";
const $$url = "/schedule";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Schedule,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
