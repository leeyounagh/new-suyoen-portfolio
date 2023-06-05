import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-router-dom"],
    },
  },
  resolve: {
    alias: {
      "@react-icons/all-files/si/SiNotion":
        "@react-icons/all-files/es/si/SiNotion.js",
    },
  },
});
