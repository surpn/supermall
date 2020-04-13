module.exports = {
  devServer:{
      disableHostCheck: true,
  },
  configureWebpack:{
      resolve:{
          alias: {
              '@': 'src',
              'common': '@/common',
              'components': '@/components',
              'network': '@/network',
              'views': '@/views'
          }
      }
  },
  pwa: {
    iconPaths: {
      favicon32: '@/assets/favicon.ico',
      favicon16: 'f@/assets/favicon.ico',
      appleTouchIcon: '@/assets/favicon.ico',
      maskIcon: '@/assets/favicon.ico',
      msTileImage: '@/assets/favicon.ico'
    }
  }
}
