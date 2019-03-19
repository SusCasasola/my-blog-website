const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  exportPathMap: async function () {
    return {
      '/': { page: '/home' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
    }
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    return config
  }
}