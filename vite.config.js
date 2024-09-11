import vituum from "vituum";
import twig from "@vituum/vite-plugin-twig";
import tailwindcss from "@vituum/vite-plugin-tailwindcss";
import path from "path";
import { listHtml } from "./src/data/app.config";

export default {
  plugins: [
    vituum({
      pages: {
        dir: "./src/views",
      },
      imports: {
        paths: [],
      },
    }),
    twig({
      root: "./src",
      functions: {
        listHtml: () => listHtml,
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      assets: path.resolve(__dirname, "./src/assets/"),
      scripts: path.resolve(__dirname, "./src/scripts/"),
      styles: path.resolve(__dirname, "./src/styles/"),
    },
  },
  build: {
    manifest: false,
    assetsInlineLimit: 0,
    modulePreload: false,
    rollupOptions: {
      input: ["./src/views/**/*.{twig,html}", "./src/scripts/*.{js}"],
    },
  },
};
