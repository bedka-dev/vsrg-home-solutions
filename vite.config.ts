import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0", // More standard for Docker port mapping
    port: 8080,
    strictPort: true, // Prevents Vite from trying a different port if 8080 is busy
    watch: {
      usePolling: true, // Necessary if you are on Windows/macOS and want Hot Module Replacement to work in Docker
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
