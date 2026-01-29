<script setup lang="ts">
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  title?: string
}>()

const emit = defineEmits<{
  (e: 'toggle-sidebar'): void
}>()
</script>

<template>
    <header
        class="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 border-b border-gray-200 bg-white"
    >
        <div class="flex items-center gap-4">
        <button
            type="button"
            class="p-2 rounded hover:bg-gray-100"
            @click="emit('toggle-sidebar')"
            aria-label="Toggle sidebar"
        >
            <Bars3Icon class="h-6 w-6" />
        </button>

        <h1 class="text-xl font-bold">{{ props.title ?? 'Documentation' }}</h1>
        </div>

        <div class="hidden sm:flex border rounded-sm px-3 py-2 items-center gap-2 w-80 border-gray-300 text-sm text-gray-400 m-2">
        <MagnifyingGlassIcon class="h-5 w-5 text-gray-500" />
        <input
            type="text"
            placeholder="Search"
            class="w-full outline-none border-0 text-gray-700 placeholder:text-gray-400"
        />
        </div>
    </header>
</template>
