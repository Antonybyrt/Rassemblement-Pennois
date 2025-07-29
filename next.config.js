/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rassemblementpennois.com',
          },
        ],
        destination: 'https://www.rassemblementpennois.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 