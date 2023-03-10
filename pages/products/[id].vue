<template>
  <div v-if="product">
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
  <div v-else>
    <p>Product "{{ id }}" not found</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "products"
})

const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id

const { data: product } = await useFetch<Product>(uri)
</script>

<style scoped></style>