const debug = true;

const path = require('path');
const webpack = require('webpack');

const StringReplacePlugin = require("string-replace-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const RemoveWebpackPlugin = require('remove-webpack-plugin');
const WebpackOnBuildPlugin = require('on-build-webpack');
const replace = require("replace");

const args = process.argv.slice(2);

const SUPPORT = {
    IE10: "ie10",
    IE11: "ie11",
    ES5: "es5",
    ES6: "es6",
};

const getConfig = (support, isProd) => {
    let filename = "app";
    let acaVersion = support;
    switch (support) {
        case SUPPORT.ES6:
            filename += ".es6";
            break;
        case SUPPORT.ES5:
            filename += ".es5";
            break;
        case SUPPORT.IE11:
            filename += ".ie11";
            break;
        case SUPPORT.IE10:
            filename += ".ie10";
            acaVersion = 'ie9';
            break;
    }

    if (isProd) {
        filename += ".min";
    }

    const babelLoader = {
        test: /\.js?$/,
        // exclude: /(node_modules(?!(\/|\\)adsum-web-map(\/|\\)build(\/|\\)adsum-web-map\.es6)|bower_components)/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
            presets: [],
            cacheDirectory: true,
            plugins: [
                "transform-es2015-modules-commonjs",
                "transform-class-properties",
                "transform-decorators-legacy",
                "transform-object-rest-spread"
            ]
        }
    };

    switch (support) {
        case SUPPORT.ES5:
            babelLoader.query.presets.push(["es2015", { loose: true }]);
            babelLoader.query.plugins.push(["transform-runtime"]);
            break;
        case SUPPORT.IE11:
            babelLoader.query.presets.push(
                [
                    "env",
                    {
                        targets: {
                            uglify: true,
                            browsers: ["ie 11"]
                        }
                    }
                ]
            );
            break;
        case SUPPORT.IE10:
            babelLoader.query.presets.push(
                [
                    "env",
                    {
                        targets: {
                            uglify: true,
                            browsers: ["ie >= 10"],
                            useBuiltIn: true
                        }
                    }
                ]
            );
            break;
    }
    // const easelLoader = { test: /node_modules\/easel-js\/.*\.js$/, use: 'imports?this=>window!export'};
    const jsonLoader = { test: /\.json$/, use: "json-loader" };
    const cssLoader = { test: /\.css$/, use: "style-loader!css-loader" };
    const lessLoader = { test: /\.less$/, use: "style!css!autoprefixer!less" };

    const fontLoader = { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: 'file-loader' };

    const copyIndexLoader = { test: /\.html$/, use: "file?name=[name].[ext]" }; // copies the files over
    const stringIndexReplaceLoader = {
        test: /index.html$/,
        use: StringReplacePlugin.replace({
            replacements: [
                {
                    pattern: /scriptSrc = 'https:\/\/localhost:8080\//ig,
                    replacement: function (match, p1, offset, string) {
                        return 'scriptSrc = \'';
                    }
                }
            ]
        })
    };

    var entry = {
        app: []
    };

    // if (!debug) {
    //     entry.index = "./public/index.html";
    // }

    if ([SUPPORT.IE10, SUPPORT.IE11].includes(support)) {
        entry.app.push("babel-polyfill");
    }
    entry.app.push("./src/app.js");

    const config = {
        mode: 'development',
        entry: entry,
        node:{
            fs: "empty"
        },
        resolve: {
            modules: ["web_modules", "node_modules", "bower_components"]
        },
        output: debug ? {
            path: __dirname + "/public/",
            filename: `${filename}.js`,
        } : {
            filename: `${filename}.js`,
            path: __dirname + "/dist",
            publicPath: "./"
        },
        module: {
            rules: [
                babelLoader,
                lessLoader,
                cssLoader,
                fontLoader,
                jsonLoader,
                copyIndexLoader,
                stringIndexReplaceLoader
            ]
        },
        stats: {
            colors: true
        },
        devtool: false,
        plugins: debug ? [
            new StringReplacePlugin(),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        ] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new StringReplacePlugin(),
            new CopyWebpackPlugin([
                { from: './package.json', to: 'package.json' },
                { from: './public/assets', to: 'assets' },
                { from: './public/index.html', to: 'index.html' }
            ]),
            new WebpackOnBuildPlugin(function (stats) {
                // new RemoveWebpackPlugin(['./dist/index.min.js']);

                replace({
                    regex: "path: './public/'",
                    replacement: "path: './'",
                    paths: ['./dist/server/options.prod.js']
                });

            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        ],
        devServer: {
            disableHostCheck: true,
            contentBase: './public',
        }
    };

    if (isProd) {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            })
        );
        config.plugins.push({
            optimization: {
                minimize: true,
        }});
    }

    return config;
};
const configs =[];
if(process.env.NODE_ENV === 'production'){
    configs.push(getConfig(SUPPORT.ES5, true));
    configs.push(getConfig(SUPPORT.IE11, true));
    configs.push(getConfig(SUPPORT.IE10, true));
}else{
    configs.push(getConfig(SUPPORT.ES5, false));
}
module.exports = configs;
//
// module.exports = {
//     entry: "./src/index.js",
//     output: debug ? {
//     path: __dirname + "/../public/",
//             filename: `${filename}.js`,
//     } : {
//         filename: `${filename}.js`,
//         path: __dirname + "/../dist",
//         publicPath: "./"
//     },
// };
