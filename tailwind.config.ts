import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: {
          lightest: '#EBEEF1',
          lighter: colors.gray[400],
          light: colors.gray[500],
          default: colors.gray[600],
          dark: colors.gray[700],
          darker: colors.gray[800],
        },
        primary: {
          lightest: '#cfffc2',
          default: '#4BFB19',
          darker: '#042D2F'
        }
      },
      transitionDuration: {
        default: '250ms',
      }
    },
  },
  plugins: [],
}
export default config
