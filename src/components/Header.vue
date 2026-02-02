<script setup lang="ts">
    import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
    import { HomeIcon } from '@heroicons/vue/24/solid'
    import { useSidebar } from '@/composables/useSidebar'

    const { toggleSidebar } = useSidebar()
</script>

<template>
  <header
    class="
      fixed top-0 left-0 right-0 z-50
      h-16 flex items-center justify-between
      px-6 border-b border-gray-200 bg-white
    "
  >
    <!-- LEFT -->
    <div class="flex items-center gap-4">
      <button
        type="button"
        class="p-2 rounded hover:bg-gray-100"
        @click="toggleSidebar"
        aria-label="Toggle sidebar"
      >
        <Bars3Icon class="h-6 w-6 text-gray-700" />
      </button>

      <router-link to="/" class="block">
        <HomeIcon class="w-6 h-6"/>
      </router-link>

      <h3 class="text-lg lg:text-xl font-bold text-gray-800">
        Documentation
      </h3>
    </div>

    <!-- RIGHT -->
    <div
      class="
        hidden sm:flex items-center gap-2
        w-80 px-3 py-2
        border border-gray-300 rounded-sm
        text-sm text-gray-400
      "
    >
      <MagnifyingGlassIcon class="h-5 w-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search"
        class="w-full border-0 outline-none text-gray-700 placeholder:text-gray-400"
      />
    </div>
  </header>
</template>
