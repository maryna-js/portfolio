const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
            {
                loader: 'html-loader',
                options: {minimize: false},
              }
          ]
      },
      {
        test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },           
      {
        test:/\.(s*)css$/,
        use: ExtractTextPlugin.extract({ 
          fallback:'style-loader',
          use:['css-loader','sass-loader'],
      })
      },
      {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ["babel-loader", "eslint-loader"]
          }
        ]
      },
      {
          test: /\.(png|jp(e*)g|svg)$/,  
          use: [{
              loader: 'url-loader',
              options: { 
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: 'images/[hash]-[name].[ext]',
                  outputPath: 'assets/img/'
              } 
          }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }
        ]
      },
     
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'src/img'),
        to: path.resolve(__dirname, 'assets/img')
    }]),
    new ExtractTextPlugin({filename:'app.bundle.css'})
    
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
};
