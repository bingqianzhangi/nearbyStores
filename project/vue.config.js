module.exports = {
  outputDir: "dists",
  configureWebpack: {
    externals: {
      AMap: "AMap", //高德
      AMapUI: "AMapUI" //高德ui
    }
  },
  devServer: {
    open: true,
    proxy: {
      '/*': {
        target: 'http://47.104.76.199:8080',
        changeOrigin: true,
        secure: false,
        pathRewrite: {'^/': ''}
      }
    }
  }
};
