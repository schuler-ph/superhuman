<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam</p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam</p>

    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
// const { data } = await useFetch("/api/ninja?name=mario", {
//   method: "post",
//   body: { age: 30 }
// })
const data = await useFetch("/api/currency/GBP")

</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>

