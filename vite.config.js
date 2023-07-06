import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue2'

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /@jiaminghi\/.+/, replacement: path => {
          path = path.replace('lib', 'src')
          if (/^[^/]+$/.test(path))
            path = `${path}/src`
          else if (/\.css$/.test(path))
            path = path.replace('src/components', 'lib/components')
          return path
        }
      },
    ]
  },
  plugins: [vue()],
});
