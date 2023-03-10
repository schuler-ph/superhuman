<template>
  <div>
    <NuxtLink to="/products/1">Product 1</NuxtLink>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "products"
})

// fetch the products
const { data: products }: { data: any } = await useFetch("https://fakestoreapi.com/products")
</script>

<style scoped></style>