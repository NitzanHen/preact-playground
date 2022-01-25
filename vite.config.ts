import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { basename, resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'pcake',
      fileName: format => `pcake.${format}.js`
    }
  },
  css: {
    modules: {
      generateScopedName: (name, filePath) => {
        const matches = basename(filePath).match(/^([a-z-]+)(.module)?.s?css/);
        if (!matches) {
          throw new Error();
        }
        const baseFilename = matches[1];
        return `pcake-${baseFilename}-${name}`;
      },
      localsConvention: 'camelCaseOnly'
    }
  }
})
