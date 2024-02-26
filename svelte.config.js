import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            strict: true,
        }),
        alias: {
            '@lib': 'src/lib',
            '@content': 'src/lib/content',
            '@components': 'src/lib/components',
            '@sections': 'src/lib/sections',
            '@stores': 'src/lib/stores',
            '@utils': 'src/lib/utils',
        },
    },
    preprocess: vitePreprocess(),
};

export default config;
