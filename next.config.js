/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env:{
        BACK_END_URL:'http://localhost:3335'
    },
};



module.exports = nextConfig;
