/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Menjadikan Gibson sebagai font sans-serif default
        sans: ['Gibson', 'system-ui', 'sans-serif'],
        serif: ['Goudy', 'serif'],
        'bd-sans': ['BDSans', 'sans-serif'],
        'script': ['BDScript', 'cursive'],
      },
    },
  },
  plugins: [],
}

