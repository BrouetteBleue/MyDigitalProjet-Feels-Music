module.exports = {
    content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './app.vue',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#404040',
                'secondary': '#1A1A1A',
            },            
        },
    },
    plugins: [],
  }