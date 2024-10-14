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
            source: '/(.*)', // Atur path yang perlu diizinkan CORS
            headers: [
              { key: 'Access-Control-Allow-Credentials', value: 'true' },
              { key: 'Access-Control-Allow-Origin', value: '*' }, // Ganti '*' dengan domain yang diizinkan
              { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,POST' },
              { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With, Content-Type, Accept' },
            ],
          },
        ];
      },
};

export default nextConfig;
