import { transform } from 'next/dist/build/swc'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        newpulse: {
          '100%': {   transform: 'opacity: 1'},
          '0%': {   transform: 'opacity: 1'},
          '50%': { transform: 'opacity: 0.7' },
        }
      },
      backgroundImage: {
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
