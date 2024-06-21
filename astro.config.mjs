import { defineConfig, squooshImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default /** @type {import('astro').AstroUserConfig} */defineConfig({
  site: 'https://selectivo-amdi.github.io/amdi.github.io/',
  image: {
    service: squooshImageService()
  },
  integrations: [
    sitemap(),
  ]
});