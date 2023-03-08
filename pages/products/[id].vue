<template>
  <div>
    <p>Product details for {{ id }}</p>
  </div>
</template>

<script setup lang="ts">
  const { id } = useRoute().params

  definePageMeta({
    layout: "products"
  })
</script>

<style scoped>

</style>