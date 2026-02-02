<script setup>

</script>

<template>
  <div class="flex flex-col pb-10 gap-6">
    <div class="w-full border-b border-gray-200 pb-2">
      <h1 class="text-3xl font-medium">Video Tutorial</h1>
    </div>

    <div
      class="w-full max-w-4xl mx-auto rounded-xl overflow-hidden"
      style="aspect-ratio: 16 / 9;"
    >
      <iframe
        src="https://www.youtube-nocookie.com/embed/wyeIMOCt6mk"
        title="Video Tutorial"
        class="w-full h-full"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
