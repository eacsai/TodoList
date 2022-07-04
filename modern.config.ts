import { defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/docs/apis/config/overview
export default defineConfig({
  output: {
    path: 'docs',
    title: 'TodoList',
    favicon: './src/assets/favicon.ico',
  },
});
