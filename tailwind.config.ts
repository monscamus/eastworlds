import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['roboto'],
      'serif': ['var(--font-orbitron)'],
    },
    extend: {
      fontFamily: {
        'sans': ['var(--font-oswald)'],
        'serif': ['var(--font-orbitron)'],
      },
      backgroundImage: {
        'sam-editor': "url('/background.jpg')"
      },
    },
  },
  plugins: [],
}
export default config
