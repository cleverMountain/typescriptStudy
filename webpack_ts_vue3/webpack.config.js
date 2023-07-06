const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const vueLoader = require('vue-loader')

module.exports = {
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    path: path.resolve(__dirname, './dist')
  },
  // 可以引入ts模块
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx', '.mjs'],
    alias: {
      '@src': path.resolve(__dirname, './src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
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
                  }
                ],
                // [
                //   "@babel/preset-typescript",
                //   {
                //     allExtensions: true, // 支持所有文件扩展名，否则在vue文件中使用ts会报错
                //   },
                // ]
              ]
            }
          },
          {
            loader: 'ts-loader',
            options: {
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, './tsconfig.json'),
              // 对应文件添加个.ts或.tsx后缀
              appendTsSuffixTo: [/\.vue$/],
              // transpileOnly: true // 关闭类型检测，即值进行转译
            },
          }
        ],
        exclude: '/node_modules/',
        
      },
    ]
  },
  plugins: [
    
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new vueLoader.VueLoaderPlugin(),
  ],
  devtool: 'eval-cheap-source-map',
  devServer: {
    open: true,
    hot: true,
    port: 8080
  },
  mode: 'development'
}