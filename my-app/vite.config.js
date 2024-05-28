import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
export default defineConfig({
  base: "/",
  plugins: [sveltekit()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
});
