import { resolve } from 'path'
import { defineUserConfig, viteBundler } from 'vuepress'

const mainPath = resolve(__dirname, '../.vuepress/') + '/'

export default defineUserConfig({
  title: 'VuePress Tailwind Starter',

  theme: {
    name: 'vivo',
    layouts: {
      Layout: `${mainPath}theme/layouts/Layout.vue`,
    },
  },

  alias: {
    '@/': mainPath,
  },
  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    },
  }),

  define: {},
})
