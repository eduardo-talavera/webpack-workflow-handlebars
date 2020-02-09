const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        // contentBase: path.resolve(__dirname,'../dist'),
        port: 3000,
        // open: 'firefox',
        open: 'Chrome',
        // watchContentBase:true
    },
    module: {
        rules: [
            {
                //js
                test: /\.m?js$/,   //busca todods los archivos js
                use : {
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test: require.resolve('jquery'), // para cargar jquery en todos los modulos que lo requieran
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                 },{
                    loader: 'expose-loader',
                    options: '$'
                 }]
            },   
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                  ]
            },
            {
                test: /\.handlebars/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.(jpg|png|svg|gif)/,
                use: [
                   {
                        loader : 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/img/',
                            useRelativePath: true
                        }
                   }
                ]
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      // optipng.enabled: false will disable optipng
                      optipng: {
                        enabled: true,
                      },
                      pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      // the webp option will enable WEBP
                      webp: {
                        quality: 75
                      }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.handlebars',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-styles.css',
        })
    ]
}