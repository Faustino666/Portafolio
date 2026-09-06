<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <svg v-if="name === 'about'" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="16" cy="9.5" r="6.5" fill="#3A6EA5" />
    <circle cx="14.7" cy="8.4" r="2" fill="#fff" opacity="0.45" />
    <path d="M4 30c0-6.2 5.4-9.5 12-9.5S28 23.8 28 30Z" fill="#3A6EA5" />
  </svg>

  <svg v-else-if="name === 'experience'" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M11 8V5.5A2.5 2.5 0 0 1 13.5 3h5A2.5 2.5 0 0 1 21 5.5V8" fill="none" stroke="#F2C230" stroke-width="2.5" />
    <rect x="3" y="8" width="26" height="17" rx="3" fill="#3A6EA5" stroke="#1B3D6B" stroke-width="1" />
    <rect x="3" y="8" width="26" height="4" rx="2" fill="#4A8AD4" />
  </svg>

  <svg v-else-if="name === 'projects'" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 7h9l3 3h14v15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" fill="#FCD54B" stroke="#C9971C" stroke-width="1.4" />
    <path d="M3 10h26" stroke="#EAF2FB" stroke-width="1.7" opacity="0.9" />
  </svg>

  <svg v-else-if="name === 'skills'" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g fill="#9AA6B2">
      <rect x="15" y="2.5" width="2" height="5" rx="1" />
      <rect x="15" y="2.5" width="2" height="5" rx="1" transform="rotate(45 16 16)" />
      <rect x="15" y="2.5" width="2" height="5" rx="1" transform="rotate(90 16 16)" />
      <rect x="15" y="2.5" width="2" height="5" rx="1" transform="rotate(135 16 16)" />
      <rect x="15" y="2.5" width="2" height="5" rx="1" transform="rotate(180 16 16)" />
      <rect x="15" y="2.5" width="2" height="5" rx="1" transform="rotate(225 16 16)" />
      <rect x="15" y="2.5" width="2" height="5" rx="1" transform="rotate(270 16 16)" />
      <rect x="15" y="2.5" width="2" height="5" rx="1" transform="rotate(315 16 16)" />
    </g>
    <circle cx="16" cy="16" r="5.5" fill="#D8DEE4" stroke="#7A8794" stroke-width="1" />
    <circle cx="16" cy="16" r="2" fill="#7A8794" />
  </svg>

  <svg v-else-if="name === 'education'" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2 13.5 16 6l14 7.5L16 21Z" fill="#3A6EA5" stroke="#1B3D6B" stroke-width="1" />
    <path d="M5 15.5v6.2c0 2 5 3.8 11 3.8s11-1.8 11-3.8v-6.2l-11 5.5Z" fill="#4A8AD4" stroke="#1B3D6B" stroke-width="1" />
    <path d="M28.5 13.5V22" stroke="#fff" stroke-width="1.6" />
  </svg>

  <svg v-else viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="7" width="26" height="18" rx="2" fill="#E8F1FB" stroke="#3A6EA5" stroke-width="1.4" />
    <path d="M4.5 8.5 16 18 27.5 8.5" fill="none" stroke="#3A6EA5" stroke-width="2" />
  </svg>
</template>