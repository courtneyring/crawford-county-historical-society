import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import mdPlugin from 'vite-plugin-md';


export default defineConfig({
    root: './',
    base: '/',
    plugins: [react(), mdPlugin({ mode: ['react', 'toc', 'html'] })],
    assetsDir: '/assets',
    // assetsInclude: ['**/*.md'],
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