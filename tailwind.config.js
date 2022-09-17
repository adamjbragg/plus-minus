/* eslint-disable global-require */
module.exports = {
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'space-sans': ['Space Grotesk', 'sans-serif'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
	],
};
