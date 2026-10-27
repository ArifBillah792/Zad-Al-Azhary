import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Change to your real domain when you deploy
  site: "https://zad-azhari.example.com",
  redirects: {
    "/": "/ar/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
