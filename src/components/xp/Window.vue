<script setup lang="ts">
import { computed, ref } from 'vue'
import AppIcon from './AppIcon.vue'

const props = withDefaults(
  defineProps<{
    title: string
    icon?: string
    x: number
    y: number
    width: number
    height: number
    z: number
    minimized?: boolean
    maximized?: boolean
  }>(),
  { minimized: false, maximized: false }
)

const emit = defineEmits<{
  close: []
  focus: []
  'update:minimized': [value: boolean]
  'update:maximized': [value: boolean]
  'update:pos': [value: { x: number; y: number }]
}>()

const dragging = ref(false)
let startX = 0
let startY = 0

function onPointerDown(e: PointerEvent) {
  emit('focus')
  if (props.maximized || e.pointerType !== 'mouse') return
  dragging.value = true
  startX = e.clientX - props.x
  startY = e.clientY - props.y
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}

function onPointerMove(e: PointerEvent) {
  if (!dragging.value) return
  emit('update:pos', { x: e.clientX - startX, y: e.clientY - startY })
}

function onPointerUp() {
  dragging.value = false
}

function minimize() {
  emit('update:minimized', true)
  emit('focus')
}

const winStyle = computed(() => {
  if (props.minimized) return { zIndex: props.z, display: 'none' }
  if (props.maximized) {
    return {
      zIndex: props.z,
      position: 'fixed' as const,
      inset: '0 0 30px 0',
      width: '100vw',
      height: 'calc(100vh - 30px)',
    }
  }
  return {
    zIndex: props.z,
    position: 'fixed' as const,
    left: `${props.x}px`,
    top: `${props.y}px`,
    width: `${props.width}px`,
    height: `${props.height}px`,
  }
})
</script>

<template>
  <div class="xp-window" :style="winStyle">
    <div
      class="xp-titlebar"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @dblclick="maximized ? emit('update:maximized', false) : emit('update:maximized', true)"
    >
      <AppIcon :name="icon || 'about'" />
      <span class="xp-title">{{ title }}</span>
      <button
        class="xp-title-btn xp-tb-min"
        type="button"
        title="Minimizar"
        aria-label="Minimizar"
        @pointerdown.stop
        @click="minimize"
      >
        —
      </button>
      <button
        class="xp-title-btn xp-tb-max"
        type="button"
        :title="maximized ? 'Restaurar' : 'Maximizar'"
        :aria-label="maximized ? 'Restaurar' : 'Maximizar'"
        @pointerdown.stop
        @click="emit('update:maximized', !maximized)"
      >
        {{ maximized ? '❐' : '□' }}
      </button>
      <button
        class="xp-title-btn xp-tb-close"
        type="button"
        title="Cerrar"
        aria-label="Cerrar"
        @pointerdown.stop
        @click="emit('close')"
      >
        ✕
      </button>
    </div>
    <div class="xp-window-body">
      <slot />
    </div>
  </div>
</template>