/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#101426',
        cobalt: { DEFAULT: '#2340D9', deep: '#1A30A8', soft: '#9DADFF' },
        marker: '#FFE04A',
        coral: '#FF6B4A',
        pine: '#0E7C6B',
        mist: '#F2F4FB',
        line: '#D5DBEC',
        muted: '#515A75',
        danger: { DEFAULT: '#C22B1D', soft: '#FF9486' },
        night: {
          DEFAULT: '#0C1024',
          raised: '#151A36',
          line: '#2C3464',
          text: '#E9ECFA',
          muted: '#A6AECD',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
