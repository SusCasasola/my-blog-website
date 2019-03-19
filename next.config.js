module.exports = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
    }
  }
}