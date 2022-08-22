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
                destination: '/profile/seller',
                source: '/profile/seller'
            },
            {
                destination: '/profile/customer',
                source: '/profile/customer'
            },
            {
                destination: '/profile/add-product',
                source: '/profile/add-product'
            }
        ];
    },
    images: {
        domains:[
            'res.cloudinary.com'
        ]
    }
};



module.exports = nextConfig;
