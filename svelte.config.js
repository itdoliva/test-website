import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		alias: {
			'@lib': 'src/lib',
			'@components': 'src/lib/components',
			'@stores': 'src/lib/stores'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
