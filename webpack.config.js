const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true}
                    }
                ]
            }
        ],
        rules: [
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
          ],
    },
    devServer: {
        static: './dist',
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
    ]
};