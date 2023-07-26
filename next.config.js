/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/:slug',
            destination: 'http://petnfc.com.au/pet/:slug',
            permanent: true
          },
          {
            source: '/',
            destination: 'http://petnfc.com.au',
            permanent: true
          }
        ];
      }
}

module.exports = nextConfig
