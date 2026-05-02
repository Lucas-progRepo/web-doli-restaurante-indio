/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1a0f0a',
        surface: '#241610',
        ink: '#f5ebe0',
        'ink-soft': 'rgba(245, 235, 224, 0.65)',
        accent: '#d97642',
        'accent-soft': 'rgba(217, 118, 66, 0.12)',
        line: 'rgba(245, 235, 224, 0.1)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      letterSpacing: {
        widest2: '0.2em'
      }
    }
  },
  plugins: []
};
