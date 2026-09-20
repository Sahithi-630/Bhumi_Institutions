/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B0F19',
          900: '#111827',
          850: '#162032',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        },
        brand: {
          blue: '#2563EB',
          'blue-light': '#3B82F6',
          'blue-muted': '#1D4ED8',
          orange: '#EA580C',
          'orange-subtle': '#C2410C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
