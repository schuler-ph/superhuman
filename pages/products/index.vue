<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "products"
})

useHead({
  title: "Superhuman | Merch",
  meta: [{
    name: "description",
    content: "Superhuman Merch"
  }]
})

// fetch the products
const { data: products }: { data: any } = await useFetch("https://fakestoreapi.com/products")
</script>

<style scoped></style>