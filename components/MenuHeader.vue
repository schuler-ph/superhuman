<template>
  <div class="sticky top-0 z-40 w-full border-b border-cBorder bg-cBackground dark:border-cDarkBorder dark:bg-cDarkBackground">
    <div class="mx-auto max-w-screen-xl">
      <div class="border-b border-cBorder py-4 px-4 dark:border-cDarkBorder lg:border-0 lg:px-8">
        <div class="flex h-8">
          <div class="flex w-8 items-center min-[400px]:w-auto">
            <div class="h-8 w-8 bg-cPrimary min-[400px]:mr-3"></div>
            <div class="hidden text-xl font-bold text-cTitle dark:text-cDarkTitle min-[400px]:block">superhuman</div>
          </div>

          <nav class="ml-auto hidden items-center font-bold text-cSmTitle dark:text-cDarkSmTitle lg:flex">
            <ul class="flex space-x-8">
              <li class="navHoverLink">Movement</li>
              <li class="navHoverLink">Nutrition</li>
              <li class="navHoverLink">Memory</li>
              <li class="navHoverLink">Habits</li>
            </ul>
            <ul class="ml-6 flex space-x-6 border-l border-cBorder pl-6 dark:border-cDarkBorder">
              <li class="navHoverLink">Sun</li>
              <li class="navHoverLink">GH</li>
            </ul>
          </nav>

          <div class="ml-auto h-8 w-8 bg-cSmTitle dark:bg-cDarkSmTitle lg:hidden"></div>
        </div>
      </div>
      <div class="py-4 px-4 text-cSmTitle dark:text-cDarkSmTitle lg:hidden">Small Menu for sidebar</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>