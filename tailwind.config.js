/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "Primary" : "#424874",
      "Sub-Primary" : "#A6B1E1",
      "main" : "#DCD6F7",
      "Sub-main" : "#F4EEFF",
      "bg-main" : "#1D232A",
     
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

