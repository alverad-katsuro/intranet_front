/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/anexo',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
