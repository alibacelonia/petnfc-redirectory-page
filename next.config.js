/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/:slug',
            destination: 'http://secure-petnfc.info/pet/:slug',
            permanent: true
          },
          {
            source: '/',
            destination: 'http://secure-petnfc.info',
            permanent: true
          }
        ];
      }
}

module.exports = nextConfig
