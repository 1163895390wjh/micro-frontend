import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun("footer-app", {
      useDevMode: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3002,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
