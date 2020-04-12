module.export = {
    configureWebpack:{
        reserve:{
            exceptions:['css', 'js', 'vue'],
            alias: {
                '@': 'src',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }



}