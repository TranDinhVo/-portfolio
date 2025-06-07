import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { visualizer } from "rollup-plugin-visualizer";

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  base: "/cv/",
  plugins: [react(), tsconfigPaths(), visualizer() as PluginOption],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      // public: `${path.resolve(__dirname, "./public/")}`,
      // pages: path.resolve(__dirname, "./src/pages"),
      // types: `${path.resolve(__dirname, "./src/@types")}`,
    },
  },
});
