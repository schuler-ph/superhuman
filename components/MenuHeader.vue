<template>
  <div class="border-cBorder bg-cBackground dark:border-cDarkBorder dark:bg-cDarkBackground sticky top-0 z-40 w-full border-b">
    <div class="mx-auto max-w-screen-xl">
      <div class="border-cBorder dark:border-cDarkBorder border-b py-4 px-4 lg:border-0 lg:px-8">
        <div class="flex h-8">
          <div class="flex w-8 items-center min-[400px]:w-auto">
            <div class="bg-cPrimary h-8 w-8 min-[400px]:mr-3"></div>
            <div class="text-cTitle dark:text-cDarkTitle hidden text-xl min-[400px]:block">superhuman</div>
          </div>

          <nav class="text-cText dark:text-cDarkText ml-auto hidden items-center lg:flex">
            <ul class="flex space-x-8">
              <li class="navHoverLink">Movement</li>
              <li class="navHoverLink">Nutrition</li>
              <li class="navHoverLink">Memory</li>
              <li class="navHoverLink">Habits</li>
            </ul>
            <ul class="border-cBorder dark:border-cDarkBorder ml-6 flex space-x-6 border-l pl-6">
              <li class="navHoverLink">Sun</li>
              <li class="navHoverLink">GH</li>
            </ul>
          </nav>

          <div class="bg-cBorder ml-auto h-8 w-8 lg:hidden"></div>
        </div>
      </div>
      <div class="py-4 px-4 lg:hidden">smol</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>