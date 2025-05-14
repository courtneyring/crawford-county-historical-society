import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import markdown from 'vite-plugin-markdown';



export default defineConfig({
    root: './',
    base: '/',
    plugins: [react(), markdown({ mode: ['html', 'toc', 'meta', 'react'] })],
    assetsInclude: ['**/*.md'],
    assetsDir: '/assets',
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
        preprocessorOptions: {
            scss: {
            },
        },
      },
    build: {
        outDir: '../public/admin',
        emptyOutDir: false,
        cssCodeSplit: true,
        rollupOptions: {
            input: './preview.jsx',
            output: {
                entryFileNames: 'preview.js',
                assetFileNames: 'preview.css'
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
});