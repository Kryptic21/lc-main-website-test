/** @type {import('next').NextConfig} */
// next.config.js
const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
	reactStrictMode: true,
	// experimental: {
	//   serverComponents: true,
	// },
	modifyVars: { '@primary-color': 'red' }, // optional

	// for Next.js ONLY
	nextjs: {
		localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
	},

	// Other Config Here...
	images: {
		loader: 'custom',
		path: '/',
	},

	async headers() {
		return [
			{
				source: '/apple-app-site-association',
				headers: [
					{
						key: 'Content-Type',
						value: 'binary/octet-stream',
					},
				],
			},
		]
	},

	webpack(config) {
		return config
	},
})
