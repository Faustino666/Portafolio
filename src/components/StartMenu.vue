<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { profile } from '../data/portfolioData'
import AppIcon from './xp/AppIcon.vue'

defineProps<{ show: boolean }>()
const emit = defineEmits<{ close: []; 'open-app': [id: string] }>()

interface RightItem {
  icon: string
  label: string
}

const left = [
  { id: 'about', icon: 'about', label: 'Sobre mí' },
  { id: 'experience', icon: 'experience', label: 'Experiencia' },
  { id: 'projects', icon: 'projects', label: 'Proyectos' },
  { id: 'skills', icon: 'skills', label: 'Habilidades' },
  { id: 'education', icon: 'education', label: 'Formación' },
  { id: 'contact', icon: 'contact', label: 'Contacto' },
]

const right: RightItem[] = [
  { icon: 'my-documents', label: 'Mis documentos' },
  { icon: 'my-pictures', label: 'Mis imágenes' },
  { icon: 'my-music', label: 'Mi música' },
  { icon: 'my-computer', label: 'Mi PC' },
  { icon: 'control-panel', label: 'Panel de control' },
  { icon: 'search', label: 'Buscar' },
  { icon: 'run', label: 'Ejecutar' },
]

function openApp(id: string) {
  emit('open-app', id)
  emit('close')
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="xp-start-backdrop" @mousedown="emit('close')" />
    <Transition name="xp-start-menu">
      <div v-if="show" class="xp-start-menu" @mousedown.stop>
        <div class="xp-start-body">
          <div class="xp-start-left">
            <div class="xp-start-banner">
              <span class="xp-start-avatar" aria-hidden="true">{{ profile.name.charAt(0) }}</span>
              <span class="xp-start-user">{{ profile.name }}</span>
            </div>

            <div class="xp-start-divider" />

            <div class="xp-start-items">
              <button
                v-for="item in left"
                :key="item.id"
                type="button"
                class="xp-start-item is-big"
                @click="openApp(item.id)"
              >
                <AppIcon :name="item.icon" class="xp-start-item-icon" />
                <span>{{ item.label }}</span>
              </button>
            </div>

            <div class="xp-start-divider" />

            <div class="xp-start-allprogs">
              <AppIcon name="projects" class="xp-start-item-icon" />
              <span>Todos los programas</span>
              <span class="xp-start-chevron" aria-hidden="true">▸</span>
            </div>
          </div>

          <div class="xp-start-right">
            <button
              v-for="item in right"
              :key="item.label"
              type="button"
              class="xp-start-item"
              @click="emit('close')"
            >
              <AppIcon :name="item.icon" class="xp-start-item-icon sm" />
              <span>{{ item.label }}</span>
            </button>
          </div>
        </div>

        <div class="xp-start-footer">
          <button type="button" class="xp-start-btn is-logoff" @click="emit('close')">
            <AppIcon name="xp-logout" class="xp-start-btn-icon" />
            Cerrar sesión
          </button>
          <button type="button" class="xp-start-btn is-shutdown" @click="emit('close')">
            <AppIcon name="xp-shutdown" class="xp-start-btn-icon" />
            Apagar equipo
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.xp-start-backdrop {
  position: fixed;
  inset: 0;
  z-index: 55;
}

.xp-start-menu {
  position: fixed;
  left: 2px;
  bottom: 31px;
  z-index: 60;
  width: 384px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #f2f5fb, #dee7f2);
  border: 1px solid #3a6ea5;
  box-shadow: inset 0 0 0 1px #fff, 0 3px 12px rgba(0, 0, 0, 0.35);
  font-family: var(--xp-font);
}

.xp-start-body {
  display: flex;
  flex: 1;
  min-height: 0;
}

.xp-start-left {
  flex: 0 0 54%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #3a82e8 0%, #2564cd 20%, #2260ca 100%);
}

.xp-start-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 8px 6px 4px;
}

.xp-start-avatar {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
  background: linear-gradient(to bottom, #f4e9d8, #c9a86a);
  border: 2px solid #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.xp-start-user {
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
  line-height: 1.1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.xp-start-divider {
  height: 1px;
  margin: 0 10px;
  margin-bottom: 2px;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
}

.xp-start-items {
  padding: 2px 0;
}

.xp-start-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 4px 8px;
  text-align: left;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-family: var(--xp-font);
}

.xp-start-item.is-big {
  padding: 5px 8px;
  gap: 10px;
}

.xp-start-left .xp-start-item {
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
}

.xp-start-left .xp-start-item:hover {
  background: transparent;
  outline: 1px solid rgba(255, 255, 255, 0.55);
  outline-offset: -1px;
}

.xp-start-item-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.xp-start-item-icon.sm {
  width: 22px;
  height: 22px;
}

.xp-start-right {
  flex: 1;
  padding: 8px 4px 10px 6px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: linear-gradient(to bottom, #f4f6fa, #e9eef6);
}

.xp-start-right .xp-start-item {
  color: #173a7a;
  font-size: 12px;
  padding: 3px 6px;
}

.xp-start-right .xp-start-item:hover {
  background: #b8d9fc;
}

.xp-start-allprogs {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 8px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
}

.xp-start-chevron {
  margin-left: auto;
  font-size: 11px;
}

.xp-start-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  padding: 6px 8px;
  background: linear-gradient(to bottom, #3a82e8, #1f5ccb);
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.xp-start-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 4px 12px;
  border-radius: 3px;
  border: 1px solid #fff;
  color: #fff;
  font-family: var(--xp-font);
  font-size: 12px;
  font-weight: bold;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.xp-start-btn.is-logoff {
  background: linear-gradient(to bottom, #ffc14f, #ef8c00);
}

.xp-start-btn.is-shutdown {
  background: linear-gradient(to bottom, #8fd85f, #3f7d22);
}

.xp-start-btn:active {
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.35);
}

.xp-start-btn-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.3));
}

.xp-start-menu-enter-active {
  transition: transform 0.08s ease-out;
}

.xp-start-menu-enter-from {
  transform: translateY(8px);
}
</style>