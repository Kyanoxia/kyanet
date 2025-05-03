import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://kyanoxia.com',
  siteName: 'The Kyanet',
  output: "server",
  adapter: vercel({
    edgeMiddleware: true,
    isr: {
      // A secret random string that you create.
      bypassToken: "005556d774a8GVEGLKJAEB315017U13TLKSAFDJSHBGLSK",
      // Paths that will always be served fresh.
      exclude: [
        '/.well-known/atproto-did',
      ]
  }
  }),
  integrations: [sitemap({
    filter: (page) => page !== 'https://kyanoxia.com/template/' &&
                      page !== 'https://kyanoxia.com/404/',
  })],
  base: "./",
});
