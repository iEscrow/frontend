/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  theme:{
    colors: {
      'green': '#39D6C5',
      "light-blue": '#37D2F4',
      'blue': '#063E67',
      'white': '#F4F4F4',
      'gray': '#BFBFBF',
      'dark-gray': '#707070'
    }
  }
}
