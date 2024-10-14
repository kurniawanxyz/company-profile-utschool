/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                  {
                    key: 'Access-Control-Allow-Origin',
                    value: 'https://admin.utschoolhub.com', // Origin yang diperbolehkan
                  },
                  {
                    key: 'Access-Control-Allow-Methods',
                    value: 'GET,POST,OPTIONS',
                  },
                ],
                    }
        ]
        
    }
};

export default nextConfig;
