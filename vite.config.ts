import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Use "/askography/" as the base in production mode
  base: mode === "production" ? "/askography/" : "/",
  build: {
    outDir: "dist", // Output directory for the build
    assetsDir: "assets", // Directory for static assets
    rollupOptions: {
      output: {
        manualChunks: undefined, // Avoid splitting files unnecessarily
      },
    },
  },
  publicDir: "public", // Directory for static assets like images
}));
