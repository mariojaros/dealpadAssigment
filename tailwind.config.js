module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../common/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      serif: ["Manrope", "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      "3xs": ".5rem",
      "2xs": ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        "dp-slate": {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          400: "#94a3b8",
        },
        "dp-blue": {
          100: "#dbeafe",
          200: "#b6d3ff",
          300: "#6fa7ff",
          500: "#3b82f6",
          600: "#2563eb",
        },
        "dp-gray": {
          50: "#f9fafb",
          300: "#d1d5db",
          500: "#6b7280",
          700: "#374151",
        },
        "dp-lime": {
          400: "#a3e635",
          500: "#84cc16",
        },
        "dp-red": {
          50: "#fef2f2",
          400: "#f87171",
          500: "#ef4444",
        },
        "dp-amber": {
          400: "#ffa100",
          500: "#f59e0b",
        },
        "dp-violet": {
          500: "#8b5cf6",
        },
        "dp-main": {
          50: "#f9fbff",
        },
      },

      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
