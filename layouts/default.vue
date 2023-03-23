<template>
  <div>
    <div class="text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 antialiased min-h-screen">
      <MenuHeader />

      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
        <MenuSidebar />

        <div class="lg:ml-52">
          <div class="max-w-3xl pt-10 mx-auto">
            <slot />

            <DocumentFooter />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>