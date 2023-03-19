/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		STORE_APP_URL: process.env.NEXT_STORE_APP_URL,
		APP_URL: process.env.NEXT_BASE_URL,

	},
	images: {
		domains: ['fakestoreapi.com'],
	},
};

module.exports = nextConfig;
