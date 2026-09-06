<script setup lang="ts">
import { ref } from 'vue'
import AppIcon from './xp/AppIcon.vue'

defineProps<{ label: string; icon: string }>()
const emit = defineEmits<{ open: [] }>()

const selected = ref(false)
</script>

<template>
  <button
    type="button"
    class="xp-desktop-icon"
    :class="{ 'is-selected': selected }"
    @click="selected = !selected"
    @dblclick="emit('open')"
  >
    <span class="xp-icon-wrap">
      <AppIcon :name="icon" class="xp-desktop-icon-img" />
      <span class="xp-shortcut" aria-hidden="true" title="Acceso directo">
        <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="10" height="10" rx="1" fill="#1D5BBA" />
          <path d="M7.6 3.6 3.6 7.6l.8.8 4-4" fill="none" stroke="#fff" stroke-width="1.5" />
          <path d="M5 4h3v3" fill="none" stroke="#fff" stroke-width="1.5" />
        </svg>
      </span>
    </span>
    <span class="xp-desktop-icon-label">{{ label }}</span>
  </button>
</template>

<style scoped>
.xp-desktop-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  width: 82px;
  padding: 6px 4px 4px;
  background: transparent;
  border: 1px solid transparent;
  cursor: default;
  font-family: var(--xp-font);
}

.xp-desktop-icon:focus-visible {
  outline: 1px dotted #fff;
  outline-offset: -2px;
}

.xp-icon-wrap {
  position: relative;
  display: flex;
  justify-content: center;
}

.xp-desktop-icon-img {
  width: 40px;
  height: 40px;
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.45));
}

.xp-shortcut {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 13px;
  height: 13px;
}

.xp-shortcut svg {
  width: 13px;
  height: 13px;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));
}

.xp-desktop-icon:hover .xp-desktop-icon-img {
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.9));
}

.xp-desktop-icon-label {
  color: #fff;
  font-size: 11px;
  line-height: 1.15;
  text-align: center;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
  padding: 1px 4px;
}

.xp-desktop-icon.is-selected {
  background: rgba(49, 106, 197, 0.55);
  border: 1px dotted #fff;
}

.xp-desktop-icon.is-selected .xp-desktop-icon-label {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
</style>