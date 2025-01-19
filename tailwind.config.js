/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-smoke': '#F5F5F5',
        'slate-gray': '#6B7280',
        'dun': '#D8C4A0',
        'burnt-orange': '#BA5624',
        'dark-purple': '#381D2A',
      },
    },
  },
  plugins: [],
}

