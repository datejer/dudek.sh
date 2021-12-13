module.exports = {
	async redirects() {
		return [
			{
				source: '/linkedin',
				destination: 'https://www.linkedin.com/in/artur-dudek/',
				permanent: true,
			},
		];
	},
};
