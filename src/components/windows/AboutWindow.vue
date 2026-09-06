<script setup lang="ts">
import { profile } from '../../data/portfolioData'
</script>

<template>
  <div class="p-4">
    <div class="flex flex-wrap items-center gap-4">
      <div class="xp-avatar" aria-hidden="true">{{ profile.name.charAt(0) }}</div>
      <div class="min-w-0">
        <h1 class="xp-h1">{{ profile.name }}</h1>
        <div class="text-[13px] font-semibold text-[#00267f]">{{ profile.role }}</div>
        <div class="xp-muted text-[11px]">{{ profile.tagline }}</div>
      </div>
    </div>

    <hr class="xp-rule" />

    <h2 class="xp-h2">Acerca de mí</h2>
    <p class="leading-5">{{ profile.bio }}</p>

    <hr class="xp-rule" />

    <div class="flex flex-wrap gap-2">
      <span class="xp-chip">{{ profile.location }}</span>
      <span class="xp-chip">GitHub: {{ profile.githubUser }}</span>
    </div>
  </div>
</template>

<style scoped>
.xp-avatar {
  width: 64px;
  height: 64px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to bottom, #5a9de6, #2754b5);
  border: 2px solid #fff;
  outline: 1px solid #0c3aa2;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
}
</style>