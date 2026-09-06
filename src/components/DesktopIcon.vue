<script setup lang="ts">
import { ref } from 'vue'
import AppIcon from './xp/AppIcon.vue'

withDefaults(defineProps<{ label: string; icon: string; shortcut?: boolean }>(), {
  shortcut: true,
})
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
      <span class="xp-shortcut" v-if="shortcut" aria-hidden="true" title="Acceso directo">
        <svg viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#7e7b98"
            d="M0 0h11v1H0zM0 0v11h1V0z"
          />
          <path
            fill="#000015"
            d="M10 0v11h1V0zM0 10h11v1H0z"
          />
          <path
            fill="#fcffff"
            d="M1 1h9v9H1z"
          />
          <path
            fill="#070604"
            d="M4 2h1v1h-1zM5 2h1v1h-1zM6 2h1v1h-1zM7 2h1v1h-1z
               M5 3h1v1h-1zM6 3h1v1h-1zM7 3h1v1h-1z
               M4 4h1v1h-1zM5 4h1v1h-1zM6 4h1v1h-1zM7 4h1v1h-1z
               M3 5h1v1h-1zM4 5h1v1h-1zM5 5h1v1h-1zM7 5h1v1h-1z
               M3 6h1v1h-1zM4 6h1v1h-1z
               M3 7h1v1h-1z
               M4 8h1v1h-1z"
          />
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
  width: 40px;
  height: 40px;
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
  left: -3px;
  bottom: -2px;
  width: 12px;
  height: 12px;
}

.xp-shortcut svg {
  width: 12px;
  height: 12px;
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