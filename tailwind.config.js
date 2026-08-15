module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './content/**/*.{mdx,md}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a0f2d',
          dark: '#060920',
          light: '#1a2148',
          mid: '#0d1538',
        },
        royal: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
