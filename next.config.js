/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env:{
        BACK_END_URL:'http://localhost:3335'
    },
    async rewrites() {
        return [
          {
            destination: '/profile/Seller',
            source: '/profile/seller'
          },
          {
            destination: '/profile/Customer',
            source: '/profile/customer'
          }
        ]
      },
};



module.exports = nextConfig;
