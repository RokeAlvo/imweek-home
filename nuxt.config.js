export default {
  // mode: 'spa',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '~/plugins/vue-lazy-load',
    '~/plugins/vue-lazysizes.client.js',
    '~/plugins/vue-js-modal',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
    // '@bazzite/nuxt-optimized-images'
  ],
  styleResources: {
    sass: ['./assets/css/main.sass'],
  },
  // optimizedImages: {
  //   optimizedImages: {
  //     inlineImageLimit: 1000,
  //     imagesName: ({ isDev }) =>
  //       isDev
  //         ? '[path][name][hash:optimized].[ext]'
  //         : 'img/[contenthash:7].[ext]',
  //     responsiveImagesName: ({ isDev }) =>
  //       isDev
  //         ? '[path][name]--[width][hash:optimized].[ext]'
  //         : 'img/[contenthash:7]-[width].[ext]',
  //     handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  //     optimizeImages: true,
  //     optimizeImagesInDev: true,
  //     defaultImageLoader: 'img-loader',
  //     mozjpeg: {
  //       quality: 80
  //     },
  //     optipng: {
  //       optimizationLevel: 3
  //     },
  //     pngquant: false,
  //     gifsicle: {
  //       interlaced: true,
  //       optimizationLevel: 3
  //     },
  //     svgo: {
  //       // enable/disable svgo plugins here
  //     },
  //     webp: {
  //       preset: 'default',
  //       quality: 75
  //     },
  //     sqip: {
  //       options: {
  //         numberOfPrimitives: 20
  //       }
  //     }
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
  },
  generate: {
    extend(config, { isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
  },
  // }
}
