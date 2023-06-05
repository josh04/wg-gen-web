const webpack = require("webpack");

module.exports = {
  publicPath: '/wg/',
  devServer: {
    port: 8081,
    disableHostCheck: true,
  },
  transpileDependencies: [
    "vuetify"
  ],
  pwa: {
    name: 'Wg Gen Web',
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  }
};
