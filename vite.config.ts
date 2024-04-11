import path from "path";
import { defineConfig } from "vite";

import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./lib"),
    },
  },
  plugins: [
    react(),
    dts({
      include: ["lib"],
      exclude: ["**/*.stories.tsx"],
      insertTypesEntry: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    copyPublicDir: false,
    lib: {
      name: "ContraReact",
      formats: ["es", "umd"],
      entry: path.resolve(__dirname, "./lib/index.ts"),
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
