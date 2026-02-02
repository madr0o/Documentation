<script setup lang="ts">
    import { XMarkIcon } from '@heroicons/vue/24/outline'
    import { useSidebar } from '@/composables/useSidebar'

    const { isMobile, isSidebarOpen, sidebarClasses, closeSidebar } = useSidebar()
</script>

<template>
  <!-- Overlay mobile -->
  <div
    v-if="isMobile && isSidebarOpen"
    class="fixed inset-0 bg-black/30 z-30"
    @click="closeSidebar"
  />

  <aside
    class="fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-72 bg-white border-r border-gray-200 transition-transform duration-200 ease-in-out"
    :class="sidebarClasses"
  >
    <div class="lg:hidden flex items-center justify-end p-3 border-b border-gray-200">
      <button
        class="p-2 rounded hover:bg-gray-100"
        @click="closeSidebar"
        aria-label="Close sidebar"
      >
        <XMarkIcon class="h-6 w-6" />
      </button>
    </div>

    <nav class="p-4 space-y-2">
      <p class="text-xs font-semibold text-gray-400 tracking-widest">GETTING STARTED</p>

      <router-link to="/commerce/guidline-book/introduction" v-slot="{ isExactActive }">
        <div
          class="block rounded-lg px-4 py-3 transition"
          :class="isExactActive
            ? 'bg-[linear-gradient(135deg,#4A8D7C,#19468E)] text-white shadow'
            : 'text-gray-700 hover:bg-gray-100'"
          @click="closeSidebar"
        >
          Introduction
        </div>
      </router-link>

      <router-link to="/commerce/guidline-book/dashboard" v-slot="{ isActive }">
        <div
          class="block rounded-lg px-4 py-3 transition"
          :class="isActive
            ? 'bg-[linear-gradient(135deg,#4A8D7C,#19468E)] text-white shadow'
            : 'text-gray-700 hover:bg-gray-100'"
          @click="closeSidebar"
        >
          Dashboard
        </div>
      </router-link>

      <router-link to="/commerce/guidline-book/product" v-slot="{ isActive }">
        <div
          class="block rounded-lg px-4 py-3 transition"
          :class="isActive
            ? 'bg-[linear-gradient(135deg,#4A8D7C,#19468E)] text-white shadow'
            : 'text-gray-700 hover:bg-gray-100'"
          @click="closeSidebar"
        >
          Inbox
        </div>
      </router-link>

      <router-link to="/commerce/guidline-book/portfolio" v-slot="{ isActive }">
        <div
          class="block rounded-lg px-4 py-3 transition"
          :class="isActive
            ? 'bg-[linear-gradient(135deg,#4A8D7C,#19468E)] text-white shadow'
            : 'text-gray-700 hover:bg-gray-100'"
          @click="closeSidebar"
        >
          Portfolio
        </div>
      </router-link>

      <router-link to="/commerce/guidline-book/order" v-slot="{ isActive }">
        <div
          class="block rounded-lg px-4 py-3 transition"
          :class="isActive
            ? 'bg-[linear-gradient(135deg,#4A8D7C,#19468E)] text-white shadow'
            : 'text-gray-700 hover:bg-gray-100'"
          @click="closeSidebar"
        >
          Team
        </div>
      </router-link>

      <router-link to="/commerce/guidline-book/customer" v-slot="{ isActive }">
        <div
          class="block rounded-lg px-4 py-3 transition"
          :class="isActive
            ? 'bg-[linear-gradient(135deg,#4A8D7C,#19468E)] text-white shadow'
            : 'text-gray-700 hover:bg-gray-100'"
          @click="closeSidebar"
        >
          Education Development
        </div>
      </router-link>

    </nav>
  </aside>
</template>
