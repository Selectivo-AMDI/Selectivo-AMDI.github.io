import { defineConfig, squooshImageService } from 'astro/config';

// https://astro.build/config
export default /** @type {import('astro').AstroUserConfig} */ defineConfig({
    site: 'https://selectivo-amdi.github.io/amdi.github.io/',
    image: {
        service: squooshImageService(),
      },
});
