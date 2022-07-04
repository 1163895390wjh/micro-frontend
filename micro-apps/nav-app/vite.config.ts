import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
import { resolve } from "path";

import { name } from "./package.json";
// https://vitejs.dev/config/

const port = 3001;
export default defineConfig({
  plugins: [vue(), qiankun("nav-app", { useDevMode: true })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    port,
    origin: `//localhost:3001`,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // base: "//localhost:3001",
  },
  // build: {
  //   target: "esnext",
  //   lib: {
  //     name: `${name}-[name]`,
  //     entry: resolve(__dirname, "src/main.ts"),
  //     formats: ["umd"],
  //   },
  //   rollupOptions: {
  //     output: {
  //       inlineDynamicImports: true,
  //     },
  //   },
  // },
});
