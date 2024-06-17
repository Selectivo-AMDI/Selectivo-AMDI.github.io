import { defineConfig, squooshImageService } from 'astro/config';
import db from "@astrojs/db";
import webVitals from "@astrojs/web-vitals";
import node from "@astrojs/node";
export default /** @type {import('astro').AstroUserConfig} */defineConfig({
  site: 'https://selectivo-amdi.github.io/amdi.github.io/',
  image: {
    service: squooshImageService()
  },
  integrations: [db(), webVitals()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});