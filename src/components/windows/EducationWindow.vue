<script setup lang="ts">
import { education } from '../../data/portfolioData'
</script>

<template>
  <div class="space-y-3 p-4">
    <div v-for="item in education" :key="item.title" class="xp-panel">
      <div class="flex flex-wrap items-baseline justify-between gap-1">
        <span class="font-bold text-[#00267f]">{{ item.title }}</span>
        <span class="xp-period">{{ item.period }}</span>
      </div>
      <div class="xp-muted">{{ item.institution }}</div>
    </div>
  </div>
</template>

<style scoped>
.xp-period {
  background: linear-gradient(to bottom, #5a9de6, #2754b5);
  color: #fff;
  padding: 1px 8px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: bold;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
}
</style>