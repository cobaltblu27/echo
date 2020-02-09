var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    mode: "development",
    // watch: true,
    // change to .tsx if necessary
    entry: __dirname + "/src/index.tsx",
    output: {
      filename: "bundle.js",
      publicPath: "./"
    },
    resolve: {
      extensions: [".wasm", ".ts", ".tsx", ".js", ".json"]
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "babel-loader",
          exclude: /(node_modules)/
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader"
          ]
        }
      ]
    },
    devServer: {
      contentBase: "dist/",
      // contentBase: __dirname + "/public/",
      publicPath: "http://localhost:4201/",
      port: 4200,
      hot: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ],
    devtool: "source-map"
  }
];
