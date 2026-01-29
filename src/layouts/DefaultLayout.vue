<script setup lang="ts">
import Header from '@components/Header.vue'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const isSidebarOpen = ref(true)
const isMobile = ref(false)

const updateIsMobile = () => {
  isMobile.value = window.matchMedia('(max-width: 1024px)').matches // lg breakpoint
  if (isMobile.value) isSidebarOpen.value = false
  else isSidebarOpen.value = true
}
onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile)
})
const sidebarClasses = computed(() => {
  if (isMobile.value) {
    return isSidebarOpen.value ? 'translate-x-0' : '-translate-x-full'
  }

  return isSidebarOpen.value ? 'translate-x-0' : '-translate-x-full'
})
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
const closeSidebar = () => {
  if (isMobile.value) isSidebarOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Topbar -->
    <Header title="Documentation" @toggle-sidebar=toggleSidebar />

    <div class="pt-16">
      <div class="flex">
        <!-- Overlay (mobile only) -->
        <div
          v-if="isMobile && isSidebarOpen"
          class="fixed inset-0 bg-black/30 z-30"
          @click="closeSidebar"
        />

        <!-- Sidebar -->
        <aside
          class="fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-72 bg-white border-r border-gray-200 transition-transform duration-200 ease-in-out"
          :class="sidebarClasses"
        >
          <!-- Mobile close button -->
          <div class="lg:hidden flex items-center justify-end p-3 border-b border-gray-200">
            <button class="p-2 rounded hover:bg-gray-100" @click="closeSidebar" aria-label="Close sidebar">
              <XMarkIcon class="h-6 w-6" />
            </button>
          </div>

          <!-- Sidebar content -->
          <nav class="p-4 space-y-2">
            <p class="text-xs font-semibold text-gray-400 tracking-widest">GETTING STARTED</p>

            <router-link to="/" v-slot="{ isExactActive }">
              <div class="menu-item" :class="isExactActive ? 'menu-active' : ''" @click="closeSidebar">
                Introduction
              </div>
            </router-link>

            <router-link to="/dashboard" v-slot="{ isActive }">
              <div class="menu-item" :class="isActive ? 'menu-active' : ''" @click="closeSidebar">
                Dashboard
              </div>
            </router-link>

            <router-link to="/product" v-slot="{ isActive }">
              <div class="menu-item" :class="isActive ? 'menu-active' : ''" @click="closeSidebar">
                Products
              </div>
            </router-link>

            <router-link to="/portfolio" v-slot="{ isActive }">
              <div class="menu-item" :class="isActive ? 'menu-active' : ''" @click="closeSidebar">
                Portfolio
              </div>
            </router-link>

            <router-link to="/order" v-slot="{ isActive }">
              <div class="menu-item" :class="isActive ? 'menu-active' : ''" @click="closeSidebar">
                Orders
              </div>
            </router-link>

            <router-link to="/customer" v-slot="{ isActive }">
              <div class="menu-item" :class="isActive ? 'menu-active' : ''" @click="closeSidebar">
                Customers
              </div>
            </router-link>

            <router-link to="/voucher" v-slot="{ isActive }">
              <div class="menu-item" :class="isActive ? 'menu-active' : ''" @click="closeSidebar">
                Vouchers
              </div>
            </router-link>

            <router-link to="/setting" v-slot="{ isActive }">
              <div class="menu-item" :class="isActive ? 'menu-active' : ''" @click="closeSidebar">
                Settings
              </div>
            </router-link>

            <router-link to="/faq" v-slot="{ isActive }">
              <div class="menu-item" :class="isActive ? 'menu-active' : ''" @click="closeSidebar">
                FAQ
              </div>
            </router-link>

            <a
              href="https://youtu.be/wyeIMOCt6mk?si=U5HGs8a-ms1LVxNM"
              target="_blank"
              rel="noopener noreferrer"
              class="cursor-pointer ml-4"
            >
              Youtube
            </a>
          </nav>

        </aside>
        <!-- Main content -->
        <main
          class="flex-1 pt-6 px-6 transition-all duration-200"
          :class="!isMobile && isSidebarOpen ? 'lg:ml-72' : 'lg:ml-0'"
        >
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
