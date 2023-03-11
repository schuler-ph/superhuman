<template>
  <div v-if="product">

    <Head>
      <Title>Superhuman | Merch {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "products"
})

const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id

const { data: product } = await useFetch<Product>(uri)

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: `Product "${id}" not found`, fatal: true })
}
</script>

<style scoped></style>