import Inspect from "vite-plugin-inspect";

export default {
  plugins: [Inspect()],
  envPrefix: "APP_",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  base: "/",
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
};
