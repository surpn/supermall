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
    }



}
