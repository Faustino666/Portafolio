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
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M16 3 L9.5 10.2 M16 3 L22.5 10.2
                 M16 10.2
                 C16 13.5 15.6 17 13.6 19.8
                 C11.6 22.6 8.6 23.8 6 22.4
                 C3.4 21 3.8 18.4 6.6 18.4
                 C8 18.4 9.4 19.2 9.8 20.8
                 C10.2 22.4 9.2 23.8 7.8 23.6"
              stroke="#000"
              stroke-width="3.2"
            />
            <path
              d="M16 3 L9.5 10.2 M16 3 L22.5 10.2
                 M16 10.2
                 C16 13.5 15.6 17 13.6 19.8
                 C11.6 22.6 8.6 23.8 6 22.4
                 C3.4 21 3.8 18.4 6.6 18.4
                 C8 18.4 9.4 19.2 9.8 20.8
                 C10.2 22.4 9.2 23.8 7.8 23.6"
              stroke="#fff"
              stroke-width="1.5"
            />
          </g>
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