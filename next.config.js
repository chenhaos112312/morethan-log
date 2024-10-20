module.exports = {
  images: {
    domains: ['www.notion.so', 'lh5.googleusercontent.com', 's3-us-west-2.amazonaws.com'],
  },
  output: process.env.EXPORT ? 'export' : undefined
}
module.exports = withBundleAnalyzer(nextConfig)
