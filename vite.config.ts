import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { traeBadgePlugin } from 'vite-plugin-trae-solo-badge';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '', // 空字符串确保路由正确
  build: {
    sourcemap: 'hidden',
    assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.pdf'],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    traeBadgePlugin({
      variant: 'dark',
      position: 'bottom-right',
      prodOnly: true,
      clickable: true,
      clickUrl: 'https://www.trae.ai/solo?showJoin=1',
      autoTheme: true,
      autoThemeTarget: '#root'
    }), 
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'data',
          dest: '.',
        },
      ],
    }),
  ],
})