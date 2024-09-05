/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,svg}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      // resolve to : `grid [grid-template-areas:_"stack"] *:[grid-area:_stack]`
      const stackableGridArea = {
        '.grid-area-stack' : {
          display: 'grid',
          gridTemplateAreas: '"stack"',
          '>*' : {
            'grid-area': 'stack',
          }          
        }
      }
      addUtilities(stackableGridArea);
    }),
  ],
}

