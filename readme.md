# Extract Paths Webpack Plugin
Excludes modules from a webpack build and generates a separate file listing the relative paths to those modules.
# Usage
In the webpack config:
```
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
```