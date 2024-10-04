import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: false
    }
  },
  output: "hybrid",
  adapter: vercel()
});
