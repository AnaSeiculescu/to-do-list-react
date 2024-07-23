import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function getCurrentDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}_${hours}-${minutes}`;
}

const timestamp = getCurrentDateTime();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].${timestamp}.js`,
                chunkFileNames: `assets/[name].${timestamp}.js`,
                assetFileNames: `assets/[name].${timestamp}.[ext]`,
            },
        },
    },
});
