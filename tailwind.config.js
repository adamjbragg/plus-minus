/* eslint-disable global-require */
module.exports = {
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'space-sans': ['Space Grotesk', 'sans-serif'],
		},
		extend: {
			maxWidth: {
				screen: '90%',
			},
			colors: {
				'pm-green': '#00FFB2',
				'pm-purple': '#340B8A',
				'pm-black': 'rgb(17, 17, 17)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
