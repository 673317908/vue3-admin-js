module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 构建项目生成的目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
  // 关闭语法自动检测
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";`
      },
    }
  },
  devServer: {
    open: true, // 编译完成是否打开网页
    host: "0.0.0.0", // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: null, // 设置代理
    overlay: {
      // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true
    },
    before: app => { },
    proxy: {
      "/api": {
        target: "http://www.web-jshtml.cn/api/vue3", // 你请求的第三方接口
        changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          // 路径重写，
          "^/api": "" // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
        }
      }
    }
  },
}