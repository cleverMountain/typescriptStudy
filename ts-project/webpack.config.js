const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:8].js',
    environment: {
      arrowFunction: false, // 不使用箭头函数
      const: false // 不使用const
    }
  },
  // 可以引入ts模块
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.ts$/,
        use: [
          {
            // 加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 环境插件
              presets: [
                ['@babel/preset-env',
                  {
                    "useBuiltIns": "usage", // 按需引入 corejs 中的模块 
                    "corejs": 3, // 核心 js 版本
                    "targets": "> 0.25%, not dead" // 浏览器支持范围
                  }]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ],
  mode: 'development',
  devServer: {
    port: 8000,
    open: true
  }
}