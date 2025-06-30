import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// import autoprefixer from 'autoprefixer';
export default defineConfig({
    plugins: [
        laravel({
            input:  'resources/js/app.jsx',
            refresh: true,
        }),
        
        tailwindcss(),
        //autoprefixer(),
        react(),
    ],
    resolve:{
        alias:{
            '@':'/resources/js',
        },
    },
});
