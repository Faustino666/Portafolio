<script setup lang="ts">
import { experience } from '../../data/portfolioData'
</script>

<template>
  <div class="space-y-4 p-4">
    <div v-for="item in experience" :key="item.company" class="xp-panel">
      <div class="flex flex-wrap items-baseline justify-between gap-1">
        <div>
          <span class="font-bold text-[#00267f]">{{ item.role }}</span>
          <span class="xp-muted"> · {{ item.company }}</span>
        </div>
        <span v-if="item.period" class="xp-period">{{ item.period }}</span>
      </div>
      <div v-if="item.location" class="xp-muted text-[11px]">{{ item.location }}</div>
      <ul class="mt-2 list-disc space-y-1 pl-5">
        <li v-for="(achievement, i) in item.achievements" :key="i">{{ achievement }}</li>
      </ul>
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