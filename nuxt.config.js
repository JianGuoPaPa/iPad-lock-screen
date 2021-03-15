const path = require('path')

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'ios-blog',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
            {src: 'js/rem.js', type: 'text/javascript', charset: 'utf-8'}
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'element-ui/lib/theme-chalk/index.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/element-ui',
        {src: '@/plugins/icons', ssr: true},
        {src: '@/plugins/swiper', ssr: true},
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [/^element-ui/],
        extend(config, ctx) {
            // ...
            const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
            svgRule.exclude = [path.resolve(__dirname, 'assets/svg')]
            // Includes /icons/svg for svg-sprite-loader
            config.module.rules.push({
                test: /\.svg$/,
                include: [path.resolve(__dirname, 'assets/svg')],
                loader: 'svg-sprite-loader',
                options: {
                    symbolId: 'icon-[name]'
                }
            })
        }
    }
}
