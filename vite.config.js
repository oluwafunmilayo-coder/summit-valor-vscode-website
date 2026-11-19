import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Local contact form submissions use the live API and send real messages.
    proxy: {
      "/api": {
        target: "https://www.summitvalor.com.ng",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react";
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("react-icons")) return "icons";
          }
        },
      },
    },
  },
});