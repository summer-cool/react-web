const path = require('path')
const webpack = require('webpack')
// const { GenerateSW } = require('workbox-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const APP_PATH = path.resolve(__dirname, '../')
const APP_SRC = path.join(APP_PATH, '/src')
const APP_DIST = path.join(APP_PATH, '/dist')

const POSTCSS_LOADER = {
    loader: 'postcss-loader',
    options: {
        config: {
            path: path.join(APP_SRC, 'postcss.config.js'),
        },
    },
}

const WEBPACK_CONFIG = {
    mode: 'none',
    entry: {
        app: [path.join(APP_SRC, '/main.js')],
    },
    output: {
        path: APP_DIST,
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js',
        publicPath: './',
    },
    resolve: {
        alias: {
            '@': APP_SRC,
            '@utils': path.join(APP_SRC, '/utils'),
            '@pages': path.join(APP_SRC, '/pages'),
            '@models':path.join(APP_SRC, '/models'),
            '@assets':path.join(APP_SRC, '/assets'),
            '@components': path.join(APP_SRC, '/components'),
        },
        extensions: ['.js', '.json', '.css', 'jsx', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    // babelrc: true,
                    cacheDirectory: true,
                },
                include: APP_SRC,
                // exclude: /^node_modules$/,
            },
            {
                test: /\.(sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    POSTCSS_LOADER,
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 500,
                    name: 'img/[name].[hash].[ext]',
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 500,
                    name: 'fonts/[name].[hash].[ext]',
                },
            },
        ],
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|zh-cn|zh-tw/),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[id].[contenthash:8].css',
            ignoreOrder: true,
        }),
        new webpack.DefinePlugin({
            __ASSETS_VERSION__: + new Date(),
            __ENV__: JSON.stringify(process.env.NODE_ENV),
        }),
        new htmlWebpackPlugin({
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                minifyJS: true,
                minifyCSS: true,
            },
            // favicon: path.join(APP_SRC, '/assets/images/ico.ico'),
            template: path.join(APP_SRC, '/template/index.html'),
        }),
    ],
}

// if(JSON.stringify(process.env.NODE_ENV) !== 'development'){ //非本地开发环境
//     WEBPACK_CONFIG.plugins.push(
//         new GenerateSW ({
//             clientsClaim: true,
//             skipWaiting: true,
//             offlineGoogleAnalytics: false,
//             maximumFileSizeToCacheInBytes: 5242880,
//             runtimeCaching: [
//                 {
//                     urlPattern: new RegExp('^https://'),
//                     handler: 'StaleWhileRevalidate',
//                     options: {
//                         cacheName: 'Yzone-portal',
//                         expiration: {
//                             maxAgeSeconds: 3600 * 24, //缓存时间1天
//                         },
//                         cacheableResponse: {
//                             statuses: [0, 200],
//                         },
//                     },
//                 },
//             ],
//         }),
//     )
// }

module.exports = WEBPACK_CONFIG