import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://moscrop-vex.github.io",
  base: "/",
  output: "static",
  integrations: [sitemap()],
  build: {
    assets: "assets",
  },

});
