/** @type {import('tailwindcss').Config} */

import {heroui} from "@heroui/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(input-otp|form).js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      "primary-purple": "#32205f",
      "primary-green": "#9fd28c",
      "secondary-pink": "#cbc3e1",
      "secondary-purple": "#6750A4",
      "secondary-typo": "#222222",
      "secondary-typo-grey": "#959595",
      "secondary-blue": "#3973e1",
      "white-transparent": "#fafafae3",
      "red-error": "#D32F2F",
    },

    fontFamily: {
      DM: ["DM Sans", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [heroui()],
};
