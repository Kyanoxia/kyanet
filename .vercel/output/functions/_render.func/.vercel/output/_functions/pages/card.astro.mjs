import { c as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, a as addAttribute, b as createAstro } from '../chunks/astro/server_DZrFQFCy.mjs';
import 'kleur/colors';
/* empty css                                */
import { $ as $$KFooter } from '../chunks/KFooter_BCJSbcV_.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const pageTitle = "Kyanoxias Socials";
  const identity = {
    name: "Kyanoxia",
    country: "United States",
    nickname: "Kya",
    pronouns: "she/her",
    race: "Human Fox Hybrid",
    discord: "DVvGFXqpqH",
    occupation: "Graphic Designer"
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", '</title><meta property="og:site_name" content="The Kyanet"><meta property="og:title"', '><meta property="og:description"', '><meta name="theme-color" content="#A37C44"><script src="https://kit.fontawesome.com/6a9ec12e2e.js" crossorigin="anonymous"><\/script>', `</head> <body> <div class="content"> <div class="social-con"> <img width="100%" class="banner" src="Kyanoxia-elegance-logo.png" alt="Elegant Black Gold Kyanoxia Banner"> <div class="socials"> <div class="social-card" onclick="location.href='https://kyanoxia.com/join';"> <div class="sc-head"> <p class="multiplexed">DISCORD</p> <i class="fa-brands fa-discord fa-lg"></i> </div> </div> <div class="social-card" onclick="location.href='https://youtube.com/@kyanoxia';"> <div class="sc-head"> <p class="multiplexed">YOUTUBE</p> <i class="fa-brands fa-youtube fa-lg"></i> </div> </div> <div class="social-card" onclick="location.href='https://twitch.tv/kyanoxia';"> <div class="sc-head"> <p class="multiplexed">TWITCH</p> <i class="fa-brands fa-twitch fa-lg"></i> </div> </div> <div class="social-card" onclick="location.href='https://x.com/kyanoxia';"> <div class="sc-head"> <p class="multiplexed">XITTER</p> <i class="fa-brands fa-x-twitter fa-lg"></i> </div> </div> <div class="social-card" onclick="location.href='https://instagram.com/kyanoxia';"> <div class="sc-head"> <p class="multiplexed">INSTAGRAM</p> <i class="fa-brands fa-instagram fa-lg"></i> </div> </div> <div class="social-card" onclick="location.href='https://reddit.com/user/kyanoxia';"> <div class="sc-head"> <p class="multiplexed">REDDIT</p> <i class="fa-brands fa-reddit fa-lg"></i> </div> </div> </div> </div> </div> <footer> `, " </footer> </body></html>"])), addAttribute(Astro2.generator, "content"), pageTitle, addAttribute(`${identity.name}'s Socials`, "content"), addAttribute(`Want to know where ${identity.name} is?`, "content"), renderHead(), renderComponent($$result, "KFooter", $$KFooter, {}));
}, "C:/Users/Kyanoxia/Documents/Developer/kyanet-astro/src/pages/card.astro", void 0);

const $$file = "C:/Users/Kyanoxia/Documents/Developer/kyanet-astro/src/pages/card.astro";
const $$url = "/card";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Card,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
