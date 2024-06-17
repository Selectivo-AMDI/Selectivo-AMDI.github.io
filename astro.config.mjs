import { defineConfig, squooshImageService } from 'astro/config';

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