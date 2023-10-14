import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['aqua', 'dark']
	}
};

export default config;
