/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-11 16:31:45
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-11 17:53:16
 * @FilePath: \temperature_trolley\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true,           // 是否自动打开项目
    host: '0.0.0.0',      // 制定域名
    port: 8089,           // 端口号
    hot: true,       // 热更新
    proxy:{
      '/api':{
          target:'http://localhost:8080',//跨域请求的公共地址
          ws:false, //也可以忽略不写，不写不会影响跨域
          changeOrigin:true, //是否开启跨域，值为 true 就是开启， false 不开启
          pathRewrite:{
              '^/api':''//注册全局路径， 但是在你请求的时候前面需要加上 /api  
            }
        }
    }
  }
})
