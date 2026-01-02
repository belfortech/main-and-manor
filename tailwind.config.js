
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Main & Manor Color Palette
        manorIvory: "#F4EFEA",
        warmSandstone: "#D9CBBE",
        urbanTaupe: "#B7A89A",
        deepManorSlate: "#6E635A",
        charcoalNoir: "#4d4b47",

        // Legacy colors (keeping for backward compatibility)
        ebony: "#0b0b0f",
        charcoal: "#121218",
        onyx: "#1b1b25",
        sand: "#f3ede4",
        ivory: "#f8f5ef",
        gold: "#d8b56a",
        goldDeep: "#b8903d",
        slate: "#2b2c34",
        cloud: "#d7d9df",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        cormorant: ["Cormorant", "serif"],
        spectral: ["Spectral", "serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 50px rgba(0,0,0,0.35)",
        gold: "0 10px 40px rgba(216,181,106,0.25)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20% 20%, rgba(216,181,106,0.08), transparent 25%), radial-gradient(circle at 80% 0%, rgba(216,181,106,0.08), transparent 20%), linear-gradient(135deg, #0b0b0f 0%, #1b1b25 50%, #0b0b0f 100%)",
        "gold-sheen": "linear-gradient(135deg, #d8b56a 0%, #b8903d 100%)",
      },
      keyframes: {
        bounceGlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeInOut: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideLeft: {
          "0%": { transform: "translateX(-40px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(40px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        bounceGlow: "bounceGlow 1.2s infinite ease-in-out",
        fadeInOut: "fadeInOut 2s infinite ease-in-out",
        fadeIn: "fadeIn 1.2s ease forwards",
        fadeOut: "fadeOut 1.2s ease forwards",
        slideLeft: "slideLeft 1.2s ease forwards",
        slideRight: "slideRight 1.2s ease forwards",
      },
    },
  },
  plugins: [],
};
