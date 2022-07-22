<template>
  <div>
    <Header />
    layout
    <div class="text-red-100 text-3xl">12313</div>
    <div class="flex justify-between">
      <div>23</div>
      <div>21</div>
    </div>
    <component :is="layout" />
    <Content />

    <Footer />
  </div>
</template>

<script>
import Header from '@/theme/components/Header.vue'
import Footer from '@/theme/components/Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
  },
  provide() {
    return {
      rootLayout: this,
    }
  },
  computed: {
    layout({ $page, $frontmatter }) {
      if ($page.path) {
        if ($frontmatter.layout) {
          return $frontmatter.layout
        }
        if ($page.path === '/') return 'MobileLayout'
        return 'PcLayout'
      }
      return 'NotFound'
    },
    posts({ $site }) {
      const posts = $site.pages
        .filter((page) => page.path.startsWith('/posts/') && page.path !== '/posts/')
        .sort((prev, next) => {
          return new Date(next.frontmatter.published_at) - new Date(prev.frontmatter.published_at)
        })
      return posts
    },
  },
}
</script>
