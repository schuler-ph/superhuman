<template>
  <div class="text-xl mb-2 text-cTitle dark:text-cDarkTitle">
    {{ props.title }}
  </div>
  <div class="text-lg mb-4 text-cSmTitle dark:text-cDarkSmTitle">
    {{ props.subtitle }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  subtitle: String
})
</script>

<style scoped></style>