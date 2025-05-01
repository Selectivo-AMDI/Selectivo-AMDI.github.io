import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel/serverless";
import compressor from "astro-compressor";
import storyblok from "@storyblok/astro";
import basicSsl from '@vitejs/plugin-basic-ssl';
import "dotenv/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
export default /** @type {import('astro').AstroUserConfig} */defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  experimental: {
    contentIntellisense: true
  },
  /*site: 'https://selectivo-amdi.github.io/',*/
  site: 'https://amdi-three.vercel.app/',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false
      }
    }
  },
  integrations: [sitemap(), compressor({
    gzip: false,
    brotli: true
  }), storyblok({
    accessToken: process.env.STORYBLOK_PREVIEW_ACCESS_TOKEN,
    apiOptions: {
      region: 'us'
    },
    livePreview: true,
    components: {
      Patrocinador: "storyblok/Patrocinador",
      Autor: "storyblok/Autor",
      Noticia: "storyblok/Noticia",
    }
  }), tailwind(), react()],
  prefetch: true,
  output: "server",
  adapter: vercel()
});