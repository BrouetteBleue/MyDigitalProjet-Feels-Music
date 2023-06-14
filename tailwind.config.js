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
            fontFamily: {
                sans: ['Helvetica', 'Arial', 'sans-serif'],
            },            
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
              lg: '1024px',
              xl: '1280px',
              '2xl': '1536px',
            },
          },
        
    },
    plugins: [],
    
  }