const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://120.24.64.5:8088/mall-admin',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // server: {
  //   // 跨域的写法
  //   proxy: {
  //     '/api': {
  //       target: 'http://120.24.64.5:8088/mall-admin', // 实际请求地址
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  // 不跨域的写法
  /*   server: {
      host: '192.168.1.195'
      // 0.0.0.0
    }, */
})