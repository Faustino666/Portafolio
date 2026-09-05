<script setup lang="ts">
import { ref } from 'vue'

const toggle = ref(true)
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-950 p-8">
    <div class="flex flex-col items-center gap-6">
      <Transition name="fade">
        <div
          v-if="toggle"
          class="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-6 text-white shadow-2xl animate-in fade-in zoom-in duration-500"
        >
          <h1 class="text-2xl font-bold">Vue + Tailwind v4 + tailwind-animate</h1>
          <p class="mt-2 text-sm text-white/80">¡Proyecto listo y animado!</p>
        </div>
      </Transition>
      <button
        class="rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-900 transition hover:scale-105 active:scale-95"
        @click="toggle = !toggle"
      >
        Toggle animación
      </button>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>