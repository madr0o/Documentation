<script>
import { ChevronUpIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'ScrollToTop',
  components: { ChevronUpIcon },
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.isVisible = window.pageYOffset > 300
    },
    scrollToTop() {
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: isSafari ? 'auto' : 'smooth'
      })
    }
  }
}
</script>

<template>
  <button
    @click="scrollToTop"
    aria-label="Scroll to top"
    class="
      fixed right-6 bottom-6 z-[9999]
      w-11 h-11 rounded-full
      flex items-center justify-center
      bg-indigo-500 text-white
      cursor-pointer
      transition-all duration-300 ease-in-out
      hover:bg-indigo-500
    "
    :class="isVisible
      ? 'opacity-100 visible translate-y-0'
      : 'opacity-0 invisible translate-y-2'"
  >
    <ChevronUpIcon class="w-5 h-5 stroke-[3]" />
  </button>
</template>
