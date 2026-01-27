<script setup>
    import { Bars3Icon } from '@heroicons/vue/24/outline'
    import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
</script>

<template>
    <div class="h-full flex justify-between gap-2 items-center px-6 py-4 border-b-1 border-gray-200 sticky">
        <div class="flex justify-between gap-4 items-center">
            <Bars3Icon class="h-6 w-6"/>
            <h1 class="text-xl font-bold">Documentation</h1>
        </div>
        <div class="flex border rounded-sm px-3 py-2 items-center gap-2 justify-start w-80 border-gray-300 text-sm text-gray-400">
            <MagnifyingGlassIcon class="h-6 w-6 text-gray-500" />
            <input type="text" placeholder="Search" class="border-none">
        </div>
    </div>
</template>