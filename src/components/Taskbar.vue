<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppIcon from './xp/AppIcon.vue'

interface TaskbarWindow {
  id: string
  title: string
  icon: string
  minimized: boolean
  active: boolean
}

defineProps<{ windows: TaskbarWindow[] }>()
const emit = defineEmits<{ 'task-click': [id: string] }>()

const now = ref(new Date())

let timer: ReturnType<typeof setInterval> | undefined

function tick() {
  now.value = new Date()
}

onMounted(() => {
  tick()
  timer = setInterval(tick, 1000)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <div class="xp-taskbar">
    <button class="xp-start" type="button">
      <img class="xp-start-logo" src="/icons/windows-xp-logo.png" alt="Windows XP" />
      <span>Inicio</span>
    </button>

    <div class="xp-separator" aria-hidden="true" />

    <div class="xp-separator" aria-hidden="true" />

    <div class="xp-taskbuttons">
      <button
        v-for="win in windows"
        :key="win.id"
        type="button"
        class="xp-task-btn"
        :class="{ 'is-active': win.active, 'is-minimized': win.minimized }"
        :title="win.title"
        @click="emit('task-click', win.id)"
      >
        <AppIcon :name="win.icon" />
        <span>{{ win.title }}</span>
      </button>
    </div>

    <div class="xp-tray">
      <svg class="xp-tray-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 9a8 8 0 0 1 16 0M6.5 9A5.5 5.5 0 0 1 17.5 9" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" />
        <rect x="9.5" y="9.5" width="5" height="10" rx="1" fill="#CEE3F8" stroke="#fff" stroke-width="0.8" />
        <circle cx="12" cy="15" r="1" fill="#fff" />
      </svg>
      <span class="xp-clock">{{ now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }) }}</span>
    </div>
  </div>
</template>

<style scoped>
.xp-taskbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30px;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, #3c92f0 0%, #1747a4 10%, #245edb 40%, #2561d2 100%);
  border-top: 1px solid #2a6fd6;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
  z-index: 50;
}

.xp-start {
  display: flex;
  align-items: center;
  gap: 5px;
  height: 100%;
  padding: 0 18px 0 14px;
  margin-left: 2px;
  border: none;
  border-radius: 0 12px 12px 0;
  background: linear-gradient(to bottom, #389238, #3cb83c 30%, #2b9033 60%, #276f2f 100%);
  border-right: 1px solid #1a5d22;
  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.35);
  color: #fff;
  font-family: var(--xp-font);
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.xp-start:hover {
  background: linear-gradient(to bottom, #3da43d, #45c545 30%, #31a137 60%, #2b7a34 100%);
}

.xp-start:active {
  background: linear-gradient(to bottom, #276f2f, #2b9033 40%, #3cb83c 70%, #389238 100%);
}

.xp-start-logo {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.xp-separator {
  width: 2px;
  height: 20px;
  margin-left: 6px;
  flex-shrink: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.35));
}

.xp-taskbuttons {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
  margin-left: 2px;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
}

.xp-task-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 48px;
  max-width: 170px;
  height: 24px;
  padding: 0 8px;
  margin: 2px 0;
  border: 1px solid #0a3d92;
  border-radius: 3px;
  background: linear-gradient(to bottom, #3f8edb, #2a6ac3 45%, #245fa0 100%);
  color: #fff;
  font-family: var(--xp-font);
  font-size: 12px;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
  cursor: pointer;
  flex-shrink: 0;
}

.xp-task-btn > .xp-appicon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.xp-task-btn span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.xp-task-btn:hover {
  background: linear-gradient(to bottom, #5aa0e8, #3574c9 45%, #2d6ab0 100%);
}

.xp-task-btn.is-active {
  background: linear-gradient(to bottom, #1d55b0, #1c4fa3 50%, #163f86 100%);
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.4);
}

.xp-task-btn.is-minimized:not(.is-active) {
  filter: saturate(0.85) brightness(0.95);
}

.xp-tray {
  margin-left: auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  background: linear-gradient(to bottom, #1387e4, #0d55b0);
  border-left: 1px solid #0755a8;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
  color: #fff;
  flex-shrink: 0;
}

.xp-tray-icon {
  width: 18px;
  height: 18px;
}

.xp-clock {
  font-family: var(--xp-font);
  font-size: 12px;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
}
</style>