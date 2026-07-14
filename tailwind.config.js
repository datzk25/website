/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
      },
      colors: {
        // Có thể thêm màu tùy chỉnh
      },
      backgroundImage: {
        'gradient-main': 'radial-gradient(ellipse at 20% 10%, #130b2a, #07070f 70%, #00101f)',
      },
    },
  },
  plugins: [],
};
