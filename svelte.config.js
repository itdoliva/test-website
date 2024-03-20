import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            strict: false,
        }),
        alias: {
            '@src': 'src',
            '@lib': 'src/lib',
            '@components': 'src/lib/components',
            '@content': 'src/lib/content',
            '@sections': 'src/lib/sections',
            '@slices': 'src/lib/slices',
            '@stores': 'src/lib/stores',
            '@utils': 'src/lib/utils',
        },
    },
    preprocess: vitePreprocess(),
};

export default config;
