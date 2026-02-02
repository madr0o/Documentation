import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const isSidebarOpen = ref(true)
const isMobile = ref(false)

const updateIsMobile = () => {
  isMobile.value = window.matchMedia('(max-width: 1024px)').matches
  if (isMobile.value) isSidebarOpen.value = false
  else isSidebarOpen.value = true
}

export function useSidebar() {
  onMounted(() => {
    updateIsMobile()
    window.addEventListener('resize', updateIsMobile)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateIsMobile)
  })

  const sidebarClasses = computed(() => {
    return isSidebarOpen.value ? 'translate-x-0' : '-translate-x-full'
  })

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  const closeSidebar = () => {
    if (isMobile.value) isSidebarOpen.value = false
  }

  return { isSidebarOpen, isMobile, sidebarClasses, toggleSidebar, closeSidebar }
}
