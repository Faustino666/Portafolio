<script setup lang="ts">
import { projects } from '../../data/portfolioData'
</script>

<template>
  <div class="grid gap-3 p-4 md:grid-cols-2">
    <div v-for="project in projects" :key="project.name" class="xp-panel flex flex-col gap-2">
      <div class="flex items-center justify-between gap-2">
        <h2 class="xp-h2 !my-0">{{ project.name }}</h2>
        <span class="xp-muted text-[11px]">{{ project.category }}</span>
      </div>
      <div class="xp-thumb" aria-hidden="true">{{ project.name.charAt(0).toUpperCase() }}</div>
      <p class="leading-5">{{ project.description }}</p>
      <div class="flex flex-wrap gap-1.5">
        <span v-for="tech in project.stack" :key="tech" class="xp-chip">{{ tech }}</span>
      </div>
      <div class="flex gap-2 pt-1">
        <a
          v-if="project.demo"
          class="xp-button xp-button-primary"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          v-if="project.repo"
          class="xp-button"
          :href="project.repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Código
        </a>
        <span v-if="!project.demo && !project.repo" class="xp-muted self-center">
          Enlaces disponibles próximamente
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.xp-thumb {
  height: 96px;
  border: 1px solid #b6c4d6;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #6b7a8c;
  background:
    repeating-linear-gradient(45deg, #f4f1e9 0 10px, #e9e5d9 10px 20px);
}
</style>