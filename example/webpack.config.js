const path = require("path");
const ExtractPathsPlugin = require("../src/extract_paths_plugin")

module.exports = {
    entry: {
        one: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractPathsPlugin.loader
            }
        ]
    },
    plugins: [
        new ExtractPathsPlugin({
            transform: (path) => `@import "${path}";`,
            filename: (entryName) => `${entryName}.sass-imports.scss`
        })
    ]
};
