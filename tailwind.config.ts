/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        token: {
          facebook: '#3b5998',
          google: '#db3236',
          primary: '#624BFF',
          secondary: '#868E96',
          success: '#28A745',
          danger: '#DC3545',
          warning: '#FFC107',
          info: '#0DCAF0',
          light: '#F9FAFB',
          dark: '#161C24',
          gray: {
            100: '#F9FAFB',
            200: '#E6EBF0',
            300: '#DFE3E8',
            400: '#C4CDD5',
            500: '#919EAB',
            600: '#637381',
            700: '#454F5B',
            800: '#212B36',
            900: '#161C24'
          },
          black: '#161C24',
          white: '#FFFFFF'
        }
      }
    }
  },
  plugins: []
}
