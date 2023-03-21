/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cBackground: '#ffffff', // white
        cPrimary: '#2dd4be', // teal 400
        cText: '#64748b', // slate 500
        cTitle: '#0f172a', // slate 900
        cSmTitle: '#334155', // slate 700
        cBorder: '#cbd5e1', // slate 300

        cDarkBackground: '#0f172a', // slate 900
        cDarkPrimary: '#2dd4be', // teal 400
        cDarkText: '#94a3b8', // slate 400
        cDarkTitle: '#ffffff', // white
        cDarkSmTitle: '#e2e8f0', // slate 200
        cDarkBorder: '#334155' // slate 700
      },
    },
  },
  plugins: [],
}
