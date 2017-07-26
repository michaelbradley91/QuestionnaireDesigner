const webpack = require('webpack');
const path = require('path');

const devServerPort = 9360;

module.exports = {
    devtool: "eval",
    entry: {
        bundle: [
            `webpack-dev-server/client?http://localhost:${devServerPort}`,
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            "./src/index.tsx"
        ]
    },

    // Despite running electron, for hot module replacement (HMR) to work, you have
    // to target the web
    target: 'electron-renderer',

    output: {
        path: path.join(__dirname, "dist"),
        publicPath: `http://localhost:${devServerPort}/static/`,
        filename: "bundle.js",
    },

    devtool: "source-map",

    devServer: { 
        contentBase: path.join(__dirname, "dist"),
        // A full URL is required to ensure that webpack dev server looks on the correct path
        // when updating modules.
        publicPath: `http://localhost:${devServerPort}/static/`,
        hot: true,
        port: devServerPort
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loaders: ["react-hot-loader/webpack", "awesome-typescript-loader"] },
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};