import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1280px',
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'grey': {
        '1': '#111111',
        '2': '#222222',
        '3': '#333333',
        '4': '#444444',
        '5': '#555555',
        '6': '#666666',
        '7': '#777777',
        '8': '#888888',
        '9': '#999999',
        '12': '#121212',
        '15': '#151515',
        'b': '#bbbbbb',
        'd': '#dddddd',
        'ea': '#eaeaea',
      },
      'blue': {
        '100': '#3592FF',
        '200': '#0070F3',
        '300': '#0061D2',
        'd-100': '#3C96ff',
        'd-200': '#3291ff',
        'd-300': '#187ff6',
      },
      'framwork': {
        'redux': '#7D47C3',
        'mongodb': '#00B425',
        'react': '#00DDFF',
        'react-dark': '#0093AA',
        'firebase': 'FFA000',
        'typescript': '#007ACC',
        'javascript': '#FCDE00',
        'javascript-dark': '#EBAD0E',
        'html': '#FF5800',
        'css': '#0067FA',
        'scss': '#DC5F9B',
      }
    },
    extend: {
      fontFamily: {
        visby: ['var(--font-visby)'],
        lato: ['var(--font-lato)'],
      }
    },
  },
  plugins: [],
}
export default config
