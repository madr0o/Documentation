<script setup lang="ts">
import Header from '@/components/Header.vue'
import { useSidebar } from '@/composables/useSidebar'
import SidebarSecond from './SidebarSecond.vue';

const { isMobile, isSidebarOpen } = useSidebar()
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- fixed header -->
    <Header />

    <!-- content area MUST offset header height -->
    <div class="pt-16">
      <SidebarSecond />

      <!-- main offset sidebar width (desktop only) -->
      <main
        class="min-h-[calc(100vh-4rem)] px-6 py-6 transition-all duration-200"
        :class="!isMobile && isSidebarOpen ? 'lg:ml-72' : 'lg:ml-0'"
      >
        <slot />
      </main>
    </div>
  </div>
</template>
