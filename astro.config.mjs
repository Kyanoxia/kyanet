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
  }),
  integrations: [sitemap({
    filter: (page) => page !== 'https://kyanoxia.com/template/' &&
                      page !== 'https://kyanoxia.com/404/',
  })],
  base: "./",
});
