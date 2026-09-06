<script setup lang="ts">
import { skills } from '../../data/portfolioData'
</script>

<template>
  <div class="p-4">
    <div v-for="category in skills" :key="category.title" class="mb-4">
      <h2 class="xp-h2">{{ category.title }}</h2>
      <div class="xp-skill-grid">
        <span v-for="skill in category.skills" :key="skill.name" class="xp-chip">
          <img :src="skill.icon" :alt="skill.name" loading="lazy" />
          {{ skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.xp-skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 6px;
}
</style>