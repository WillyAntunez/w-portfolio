import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': '/src/components',
            '@views': '/src/views',
            '@styles': '/src/styles',
            '@utils': '/src/utils',
            '@config': '/src/config',
            '@services': '/src/services',
        },
    },
});
