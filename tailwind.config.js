/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./src/templates/**/*.{twig,html}",
    "./src/views/**/*.{twig,html}",
    "./src/scripts/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        aileron: ["Aileron", "sans-serif"],
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        19: '4.75rem',
      },
      colors: {
        pizazz: "#ff8c00",
        "flush-orange": "#ff7901",
        scarlet: "#ff3915",
        "mango-tango": "#d97801",
        clementine: "#e36a00",
        "tia-maria": "#d92e0f",
        brown: "#8e4f02",
        "chelsea-gem": "#a44d01",
        "totem-pole": "#881e0b",
        geyser: "#dae0e6",
        christine: "#ec550d",
        "red-orange": "#ff3434",
        "electric-pricing": "#A305B7",
        "purple-heart": "#8e2de2",
        "electric-violet": "#4a00e0",
        zeus: "#1c1613",
        oil: "#16110d",
        "cod-gray": "#1a1a1a",
        scorpion: "#606060"
      },
      backgroundImage: {
        main: 'url("assets/images/main-bg.svg")',
        auth: 'url("assets/images/auth-bg.svg")',
        editor: 'url("assets/images/editor-bg.svg")',
      },
      keyframes: {
        "reveal-pulse": {
          "0%, 100%": { opacity: "100%" },
          "50%": { opacity: "0%" },
        },
        reveal: {
          "0%, 100%": { "clip-path": "inset(0px 0px 0px 100%)" },
          "50%": { "clip-path": "inset(0px 0px 0px 0%)" },
        },
        "reveal-separator": {
          "0%, 100%": { left: "calc(100% - 0.125rem)" },
          "50%": { left: "calc(0% - 0.125rem)" },
        },
        "processing-stars": {
          "12.5%" : { opacity: "100%" },
          "0%, 25%, 100%" : { opacity: "0%" }
        }
      },
      letterSpacing: {
        "1%": "0.01em",
        "3%": "0.03em",
      },
    },
  },
  plugins: [],
};
