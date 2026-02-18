import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: '#__next_root',
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#1976d2',
          dark: '#1565c0',
          light: '#42a5f5',
        },
      },
    },
  },
  plugins: [],
};
export default config;
