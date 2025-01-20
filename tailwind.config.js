/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-text': 'var(--primary-text)',
        secondary: 'var(--secondary)',
        'secondary-text': 'var(--secondary-text)',
        accent: 'var(--accent)',
        'accent-text': 'var(--accent-text)',
        border: 'var(--border)',
        muted: 'var(--muted)',
      },
    },
  },
  plugins: [],
};
