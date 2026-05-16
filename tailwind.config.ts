import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // Forest green primary
        moss: {
          50: "#f3f7f1",
          100: "#e2ecdd",
          200: "#c4d9bb",
          300: "#9dbf90",
          400: "#74a263",
          500: "#558745",
          600: "#3f6b34",
          700: "#33552c",
          800: "#2a4326",
          900: "#1f3220",
          950: "#0f1e10"
        },
        // Warm cream/sand
        sand: {
          50: "#fbf8f1",
          100: "#f5efe0",
          200: "#ecdfbf",
          300: "#dec88d",
          400: "#cfae5b",
          500: "#c2953b",
          600: "#a8782f",
          700: "#86592a",
          800: "#6e4828",
          900: "#5b3c25",
          950: "#321f12"
        },
        clay: {
          500: "#b75c3a",
          600: "#a14a2d",
          700: "#823a23"
        }
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(31, 50, 32, 0.25)",
        lift: "0 25px 60px -25px rgba(31, 50, 32, 0.45)"
      },
      backgroundImage: {
        "leaf-noise":
          "radial-gradient(circle at 20% 30%, rgba(85,135,69,0.06) 0, transparent 30%), radial-gradient(circle at 80% 60%, rgba(63,107,52,0.05) 0, transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
