<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import type { Component } from 'vue'
import Taskbar from './components/Taskbar.vue'
import DesktopIcon from './components/DesktopIcon.vue'
import XpWindow from './components/xp/Window.vue'
import AboutWindow from './components/windows/AboutWindow.vue'
import ExperienceWindow from './components/windows/ExperienceWindow.vue'
import ProjectsWindow from './components/windows/ProjectsWindow.vue'
import SkillsWindow from './components/windows/SkillsWindow.vue'
import EducationWindow from './components/windows/EducationWindow.vue'
import ContactWindow from './components/windows/ContactWindow.vue'

interface WinState {
  id: AppId
  icon: string
  minimized: boolean
  maximized: boolean
  x: number
  y: number
  z: number
  w: number
  h: number
}

const APPS = {
  about: { id: 'about', label: 'Sobre mí', icon: 'about', title: 'Sobre mí', w: 620, h: 440 },
  experience: { id: 'experience', label: 'Experiencia', icon: 'experience', title: 'Experiencia laboral', w: 660, h: 480 },
  projects: { id: 'projects', label: 'Proyectos', icon: 'projects', title: 'Proyectos', w: 760, h: 520 },
  skills: { id: 'skills', label: 'Habilidades', icon: 'skills', title: 'Habilidades', w: 600, h: 480 },
  education: { id: 'education', label: 'Formación', icon: 'education', title: 'Formación', w: 580, h: 400 },
  contact: { id: 'contact', label: 'Contacto', icon: 'contact', title: 'Contacto', w: 560, h: 400 },
} as const

type AppId = keyof typeof APPS

interface AppDef {
  id: AppId
  label: string
  icon: string
  title: string
  w: number
  h: number
}

const apps = Object.values(APPS)

const windowComponents: Record<AppId, Component> = {
  about: AboutWindow,
  experience: ExperienceWindow,
  projects: ProjectsWindow,
  skills: SkillsWindow,
  education: EducationWindow,
  contact: ContactWindow,
}

const instances = reactive<WinState[]>([])
const zTop = ref(0)

function isMobile(): boolean {
  return window.matchMedia('(max-width: 640px)').matches
}

function open(id: AppId) {
  const existing = instances.find((w) => w.id === id)
  if (existing) {
    existing.minimized = false
    focus(id)
    return
  }

  const cfg = APPS[id]
  const mobile = isMobile()
  const vw = window.innerWidth
  const vh = window.innerHeight - 30
  const w = Math.min(cfg.w, vw - 12)
  const h = Math.min(cfg.h, vh - 12)
  const offX = (instances.length % 5) * 28
  const offY = (instances.length % 5) * 20
  const x = mobile ? 0 : Math.max(0, Math.min(Math.round((vw - w) / 2 + offX), Math.max(0, vw - w)))
  const y = mobile ? 0 : Math.max(0, Math.min(Math.round((vh - h) / 2 + offY), Math.max(0, vh - h)))

  zTop.value++
  instances.push({ id, icon: cfg.icon, minimized: false, maximized: mobile, x, y, w, h, z: zTop.value })
}

function focus(id: AppId) {
  const win = instances.find((w) => w.id === id)
  if (win) win.z = ++zTop.value
}

function close(id: AppId) {
  const index = instances.findIndex((w) => w.id === id)
  if (index !== -1) instances.splice(index, 1)
}

function setPos(id: AppId, pos: { x: number; y: number }) {
  const win = instances.find((w) => w.id === id)
  if (win) {
    win.x = pos.x
    win.y = pos.y
  }
}

function taskClick(id: string) {
  const win = instances.find((w) => w.id === id)
  if (!win) return
  if (win.minimized) {
    win.minimized = false
    focus(win.id)
  } else if (activeId.value === id) {
    win.minimized = true
  } else {
    focus(win.id)
  }
}

const activeId = computed(() => {
  let top: WinState | undefined
  for (const win of instances) {
    if (!win.minimized && (!top || win.z > top.z)) top = win
  }
  return top?.id
})

const taskbarWindows = computed(() =>
  instances.map((w) => ({
    id: w.id,
    title: APPS[w.id].title,
    icon: w.icon,
    minimized: w.minimized,
    active: activeId.value === w.id,
  }))
)

onMounted(() => open('about'))
</script>

<template>
  <div
    class="relative h-screen w-screen select-none overflow-hidden bg-cover bg-center"
    style="background-image: url('/wallpaper-bliss.jpg')"
  >
    <div class="absolute left-2 top-2 z-0 flex h-[calc(100vh-50px)] flex-col flex-wrap content-start items-start gap-2">
      <DesktopIcon
        v-for="app in apps"
        :key="app.id"
        :label="app.label"
        :icon="app.icon"
        @open="open(app.id)"
      />
    </div>

    <div class="pointer-events-none absolute inset-0 z-10">
      <template v-for="win in instances" :key="win.id">
        <XpWindow
          v-model:minimized="win.minimized"
          v-model:maximized="win.maximized"
          :x="win.x"
          :y="win.y"
          :width="win.w"
          :height="win.h"
          :z="win.z"
          :title="APPS[win.id].title"
          :icon="win.icon"
          @focus="focus(win.id)"
          @update:pos="setPos(win.id, $event)"
          @close="close(win.id)"
        >
          <component :is="windowComponents[win.id]" />
        </XpWindow>
      </template>
    </div>

    <Taskbar :windows="taskbarWindows" @task-click="taskClick" />
  </div>
</template>