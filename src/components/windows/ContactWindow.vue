<script setup lang="ts">
import { profile } from '../../data/portfolioData'

function socialLabel(key: 'discord' | 'spotify' | 'youtube'): string {
  return { discord: 'Discord', spotify: 'Spotify', youtube: 'YouTube' }[key]
}
</script>

<template>
  <div class="p-4">
    <div class="xp-panel space-y-3">
      <div>
        <div class="xp-muted text-[11px]">Correo electrónico</div>
        <a class="xp-link" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      </div>
      <hr class="xp-rule !my-2" />
      <div>
        <div class="xp-muted text-[11px]">GitHub</div>
        <a class="xp-link" :href="profile.github" target="_blank" rel="noopener noreferrer">
          {{ profile.github }}
        </a>
      </div>
      <template v-for="key in ['discord', 'spotify', 'youtube'] as const" :key="key">
        <hr v-if="profile.socials[key]" class="xp-rule !my-2" />
        <div v-if="profile.socials[key]">
          <div class="xp-muted text-[11px]">{{ socialLabel(key) }}</div>
          <a class="xp-link" :href="profile.socials[key]" target="_blank" rel="noopener noreferrer">
            {{ profile.socials[key] }}
          </a>
        </div>
      </template>
    </div>

    <div class="mt-4 flex justify-center">
      <a class="xp-button xp-button-primary" :href="profile.cvUrl" download>
        Descargar CV
      </a>
    </div>
  </div>
</template>