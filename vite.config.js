import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'site.webmanifest.json') {
            return 'site.webmanifest.json';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});