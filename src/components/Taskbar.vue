<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

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
      <svg class="xp-start-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M2 5c4.5 0 4.5-1 8.5-1 3.5 0 4 1 8 1 .8 0 1.5-.2 2-.5v1.6c0 .6-.8 1-1.8 1H20c-4.5 0-4.5 1-8.5 1-3.5 0-4-1-8.5-1-1 0-1.8.4-2 .6V5Z"
          fill="#8FD14F"
        />
        <path
          d="M2 9c4.5 0 4.5-1 8.5-1 3.5 0 4 1 8 1 .8 0 1.5-.2 2-.5v1.6c0 .6-.8 1-1.8 1H20c-4.5 0-4.5 1-8.5 1-3.5 0-4-1-8.5-1-1 0-1.8.4-2 .6V9Z"
          fill="#52BE38"
        />
        <path
          d="M2 13c4.5 0 4.5-1 8.5-1 3.5 0 4 1 8 1 .8 0 1.5-.2 2-.5v1.6c0 .6-.8 1-1.8 1H20c-4.5 0-4.5 1-8.5 1-3.5 0-4-1-8.5-1-1 0-1.8.4-2 .6V13Z"
          fill="#52BE38"
        />
        <path
          d="M2 17c4.5 0 4.5-1 8.5-1 3.5 0 4 1 8 1 .8 0 1.5-.2 2-.5v1.6c0 .6-.8 1-1.8 1H20c-4.5 0-4.5 1-8.5 1-3.5 0-4-1-8.5-1-1 0-1.8.4-2 .6V17Z"
          fill="#52BE38"
        />
        <circle cx="6.5" cy="6.5" r="2.5" fill="#F7D117" />
      </svg>
      <span>Inicio</span>
    </button>

    <div class="xp-separator" aria-hidden="true" />

    <div class="xp-quicklaunch">
      <button type="button" class="xp-ql-btn" title="Explorador de Internet" aria-label="Explorador de Internet">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="#E8F1FB" stroke="#3B6EA5" stroke-width="1.5" />
          <path d="M12 2c-3 3.2-4.2 6.6-4.2 10s1.2 6.8 4.2 10c3-3.2 4.2-6.6 4.2-10S15 5.2 12 2Z" fill="#4A8AD4" />
          <path d="M2.5 10h19M2.5 14h19" stroke="#3B6EA5" stroke-width="1" />
        </svg>
      </button>
      <button type="button" class="xp-ql-btn" title="Mi PC" aria-label="Mi PC">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="3" width="18" height="13" rx="1.5" fill="#3A6EA5" stroke="#1B3D6B" />
          <rect x="5.5" y="5.5" width="13" height="7" fill="#E8F1FB" />
          <circle cx="10" cy="14.5" r="1.6" fill="#8BC34A" stroke="#4A7A2B" stroke-width="0.5" />
          <path d="M9 16.5h6" stroke="#1B3D6B" stroke-width="1.2" />
          <path d="M12 16.5V20M8 20h8" stroke="#1B3D6B" stroke-width="1.2" fill="none" />
        </svg>
      </button>
      <button type="button" class="xp-ql-btn" title="Carpetas" aria-label="Carpetas">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M2.5 5.5h6l2 2.5h11v9.5a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2V5.5Z" fill="#FCD54B" stroke="#C9971C" stroke-width="1.3" />
          <path d="M2.5 8.5h19" stroke="#EAF2FB" stroke-width="1.6" opacity="0.9" />
        </svg>
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
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.35));
}

.xp-quicklaunch {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
  padding: 0 10px;
}

.xp-ql-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 24px;
  padding: 2px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.xp-ql-btn:hover {
  background: rgba(255, 255, 255, 0.18);
  border-radius: 3px;
  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.4);
}

.xp-ql-btn svg {
  width: 100%;
  height: 100%;
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