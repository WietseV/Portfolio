/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        slideBig: {
          '0%': { 
            transform: 'translateX(calc(100vw))',
            transfrom: 'skewx(20deg)',
          },
          '100%': {
            transform: 'translateX(-900px)',
            transfrom: 'skewx(20deg)', 
        }
        },
        slideSmall: {
          '0%': { transform: 'translateX(calc(100vw))' },
          '100%': {transform: 'translateX(-500px)'}
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        pulse: {
          '0%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(0, 0)' },
          '100%': { transform: 'scale(1, 1)' },
        },
        scroll: {
          '0%': { 'background-position': '0 0' },
          '100%': {  'background-position': '0 -100%' },
        }
      },
      animation: {
        slideBig: 'slideBig 16s ease-in infinite',
        slideSmall: 'slideSmall 16s ease-in infinite',
        rotate: 'rotate 16s infinite',
        pulse: 'pulse 4s ease-in-out infinite',
        scroll: 'scroll 32s infinite',
      },
      fontFamily: {
        audiowide: "var(--audiowide)",
        sulphur: "var(--sulphurPoint)",
      },
      backgroundImage: {
        points: "radial-gradient(circle, #A8A8A8 1px, rgba(0, 0, 0, 0) 1px)",
        buttons: "linear-gradient(to bottom right, transparent 0% 33%, #EDEDED 33% 100% )",
        projectButtons: "linear-gradient(to bottom right, transparent 0% 33%, #1D1D1D 33% 100% )",
        lines: "linear-gradient(to bottom, transparent 0px 7px, rgba(193,129,203,0.5) 7px 9px )",
      },
      backgroundSize: {
        points: "20px 20px",
        buttons: "300% 300%",
        projectButtons: "300% 300%",
        lines: "100% 9px",
      },
      backgroundPosition: {
        scrollstart: "0% 0%",
        scrollstop: "0% -100%",
      },
      colors: {
        primary__white: "#EDEDED",
        primary__gray: "#1D1D1D",
        primary__pink: "#C181CB",
      },
    },
  },
  plugins: [],
}
