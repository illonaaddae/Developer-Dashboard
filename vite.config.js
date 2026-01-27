import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Base public path when served in development or production
  base: './',

  // Server configuration
  server: {
    port: 3000,
    open: true, // Automatically open browser on server start
    host: true, // Listen on all addresses
  },

  // Build configuration
  build: {
    // Output directory for production build
    outDir: 'dist',

    // Generate source maps for debugging
    sourcemap: true,

    // Minification settings
    minify: 'esbuild',

    // Chunk size warning limit (in KB)
    chunkSizeWarningLimit: 500,

    // Rollup options
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Separate vendor chunks if needed in the future
        },
      },
    },
  },

  // Preview server configuration (for testing production build)
  preview: {
    port: 4173,
    open: true,
  },

  // CSS configuration
  css: {
    devSourcemap: true,
  },
});
