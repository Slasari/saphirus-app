import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#0ac5b2',
      },
    },
  },
  plugins: [],
};

export default config;