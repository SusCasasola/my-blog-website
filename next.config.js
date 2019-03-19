module.exports = {
  exportPathMap: async function () {
    return {
      '/': { page: '/home' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
    }
  }
}