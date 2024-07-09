import { defineConfig } from "astro/config";

// https://astro.build/config
const BASE_PATH = "/ask-multiple-pdfs";

export default defineConfig({
  site: 'https://jalcocert.github.io',
  base: BASE_PATH,
  vite: {
    build: {
      rollupOptions: {
        external: ['fsevents']
      }
    }
  }
});

// export default defineConfig({
//   site: "https://jalcocert.github.io",
//   base: BASE_PATH,
// });

export { BASE_PATH };