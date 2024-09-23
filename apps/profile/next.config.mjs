import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		domains: ['localhost'],
	},
};

export default withNextIntl(nextConfig);
