/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#C4E2FF',
        'secondary': '#24609B',
        'tertiary': '#ECF3F8',
        'text-normal': '#999999',
        'text-logo': '#1F1E31',
        'text-dashboard': '#1F1E31',
      },
    },
  },
  plugins: [],
}

