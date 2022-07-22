import { defineClientConfig } from '@vuepress/client'

import '@/styles/index.scss'

export default defineClientConfig({
  enhance: ({ app }) => {
    // app.component('Home', HomeShell)
  },
})
