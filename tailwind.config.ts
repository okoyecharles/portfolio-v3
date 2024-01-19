import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  /*
  * Include class utilities for tailwind > theme > colors > tag
  * to enable dynamic generation without purging them
  */
  safelist: [
    { pattern: /(bg|text)-tag-.(dark)?/, variants: ['dark'] }
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'semi-lg': '1024px',
      'lg': '1280px',
      'xl': '1440px',
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
      'tag': {
        'redux': '#7D47C3',
        'redux-dark': '#B079F7',
        'mongodb': '#009C20',
        'mongodb-dark': '#00B425',
        'react': '#0093AA',
        'react-dark': '#00DDFF',
        'firebase': '#DC8B02',
        'firebase-dark': '#FFA000',
        'typescript': '#007ACC',
        'typescript-dark': '#0189E5',
        'javascript': '#FCDE00',
        'javascript-dark': '#EBAD0E',
        'html': '#FF5800',
        'css': '#0067FA',
        'scss': '#DC5F9B',
        'node-js': '#3C823B',
        'node-js-dark': '#4A9F49',
        'next-js': '#666666',
        'next-js-dark': '#bbbbbb',
      }
    },
    extend: {
      fontFamily: {
        visby: ['var(--font-visby)'],
        lato: ['var(--font-lato)'],
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        'auto': 'auto 1fr'
      }
    },
  },
  plugins: [],
}
export default config
