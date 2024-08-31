/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],

  theme: {
    colors: {
     
      'primaryPurple': '#646ff0',
      'black-1': '#646681',
      'black-2': '#585858',
      'bg-1': '#f8f8ff',
      'bg-2': '#ecedf6',
      'bg-3': '#cccdde',
      'gray-1': '#eee',
      'gray-2': '#dedfe1',
      'black': '#000',
      'white': '#fff',

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

