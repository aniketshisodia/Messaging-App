// Import DaisyUI plugin
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scans for Tailwind classes in src
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Add DaisyUI plugin
};

export default config;
