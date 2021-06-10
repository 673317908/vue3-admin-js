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
        proxy: {
            "/api": {
                target: "http://account.web-jshtml.cn/api/v1",
                changeOrigin: true
            }
        }
    }
}