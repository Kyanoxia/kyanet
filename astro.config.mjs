import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://kyanoxia.com',
  output: "hybrid",
  adapter: vercel(),
  integrations: [sitemap({
    filter: (page) => page !== 'https://kyanoxia.com/template/',
  })]
});
