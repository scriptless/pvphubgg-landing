module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
        'image': "url('../public/bg-image.png')"
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
