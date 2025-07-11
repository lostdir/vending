import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Removed custom assetFileNames logic as manifest is now in public dir
      },
    },
  },
});