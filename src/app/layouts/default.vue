<template>
  <LayoutHeaderWidget />
  <main class="relative h-full">
    <figure class="flex items-center justify-end w-full h-full">
      <img src="/imgs/bgs/marvin.png" alt="" class="w-[15.5rem] mr-11" />
    </figure>

    <div class="absolute top-0 object-cover w-full h-full py-5">
      <NuxtPage />
    </div>
  </main>
  <LayoutFooterWidget />
</template>
