import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      brand: "#F62F63",
      darkest: "#070616",
      dark: "#333",
      gray: "#D9D9D9",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
