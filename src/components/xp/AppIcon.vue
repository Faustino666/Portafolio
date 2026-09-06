<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <img
    class="xp-appicon"
    :src="`/icons/${name}.png`"
    alt=""
    aria-hidden="true"
    :draggable="false"
  />
</template>