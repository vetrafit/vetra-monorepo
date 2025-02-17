import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* === Core Background & Foreground === */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        /* === Primary & Secondary Colors === */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        /* === Accent Colors === */
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        /* === Muted (For Less Important Elements) === */
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        /* === Borders, Inputs, Rings === */
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        input: "hsl(var(--input))",

        /* === Popovers (Dropdowns, Modals) === */
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        /* === Cards (Panels, Containers) === */
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* === Destructive (Errors, Warnings) === */
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        /* === Chart Colors (For Future Analytics) === */
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },

      // /* === Border Radius (For Consistency) === */
      // borderRadius: {
      //   xl: "var(--radius)",
      // },

      // /* === Typography (Extend If Needed) === */
      // fontFamily: {
      //   sans: ["Inter", "sans-serif"],
      // },
    },
  },
} satisfies Config;
