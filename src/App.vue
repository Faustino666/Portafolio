<script setup lang="ts">
import Taskbar from './components/Taskbar.vue'
</script>

<template>
  <div class="relative h-screen w-screen select-none overflow-hidden bg-cover bg-center" style="background-image: url('/wallpaper-bliss.jpg')">
    <main class="h-full pb-[30px]">
      <div class="grid h-full grid-cols-6 content-start justify-items-start gap-2 p-3">
        <slot />
      </div>
    </main>
    <Taskbar />
  </div>
</template>