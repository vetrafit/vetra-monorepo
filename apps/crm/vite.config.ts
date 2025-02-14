import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@vetra/ui": resolve(__dirname, "../../packages/ui/src"),
    },
  },
  server: {
    host: "crm.vetra.local",
    port: 3002,
  },
});
