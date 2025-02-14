import type { Config } from "tailwindcss";
import uiConfig from "../../packages/ui/tailwind.config";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [uiConfig],
} satisfies Config;
