<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const goBack = () => {
    router.back()        
  }
</script>

<template>
  <header
    class="
      fixed top-0 left-0 right-0 z-50
      h-16 flex items-center justify-start
      px-21 border-b border-gray-200 bg-white
    "
  >
    <div class="flex items-center justify-start gap-4">
      <button
        type="button"
        @click="goBack"
        class="flex items-center gap-1 text-[#19468E] hover:text-[#2C5BA3] cursor-pointer"
      >
        < Back
      </button>
      <h3 class="text-lg lg:text-xl font-bold text-gray-800">
        Documentation
      </h3>
    </div>
  </header>
</template>
