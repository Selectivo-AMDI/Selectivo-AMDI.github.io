import { defineConfig, squooshImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
/*import vercel from "@astrojs/vercel/serverless";*/
import react from "@astrojs/react";
import compressor from "astro-compressor";
export default /** @type {import('astro').AstroUserConfig} */defineConfig({
  site: 'https://selectivo-amdi.github.io/amdi.github.io/',
  image: {
    service: squooshImageService()
  },
  integrations: [sitemap(), react(), compressor({ gzip: false, brotli: true })],
  prefetch: true
  /*  output: "server",*/
  /*  adapter: vercel() */
});