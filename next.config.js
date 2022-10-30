/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false
})
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


module.exports = withBundleAnalyzer(nextConfig)
