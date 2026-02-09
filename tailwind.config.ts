import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
      colors: {
        sage: {
          50: '#f7f9f7',
          100: '#f0f4f0',
          200: '#dde8dd',
          300: '#c7d6c7',
          400: '#a8c0a8',
          500: '#8ba88b',
          600: '#6f8e6f',
          700: '#5a725a',
          800: '#4a5d4a',
          900: '#3e4e3e',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
    },
  },
  plugins: [],
}

export default config