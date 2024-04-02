import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import autoPreprocess from 'svelte-preprocess';

export default defineConfig({
	plugins: [
        sveltekit({
            preprocess: autoPreprocess()
        })
    ],
    resolve: {
        alias: [
            { find: '@scss', replacement: '/src/assets/scss' },
            { find: '@js', replacement: '/src/assets/js' },
            { find: '@images', replacement: '/src/assets/images' },
            { find: '@comp', replacement: '/src/components' },
            { find: '@lib', replacement: '/src/lib' }
        ]
    },
    server: {
        fs: {
            allow: ['..']
        }
    }
});
