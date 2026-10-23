/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

// ESM 환경에서 안전하게 __dirname 정의하기
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'), // 👈 이 부분이 있어야 @styles를 인식합니다!
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Sass가 @use '@styles/...'를 만났을 때 src/styles 폴더를 기준으로 찾도록 설정
        additionalData: `
          @use "@styles/variables" as *;
          @use "@styles/mixins" as *;
        `,
      },
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(__dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
        },
      },
    ],
  },
});
