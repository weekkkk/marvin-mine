<script setup lang="ts">
const props = defineProps<{ n: number }>();
</script>

<template>
  <div
    :class="['w-[20rem] h-[15.2rme] relative', 'max-md:w-[12rem] h-[9.5rme]']"
  >
    <div
      class="absolute px-[2rem] py-[2rem] object-cover h-full w-full max-md:flex max-md:flex-col max-md:text-[0.75rem] max-md:text-center max-md:px-[2rem] max-md:py-[1.5rem] max-md:gap-[1.9rem]"
    >
      <div class="leading-text text-brand">
        <slot />
      </div>

      <p
        :class="[
          'mb-[1.5rem]',
          'leading-text text-common',
          'absolute right-[2rem] bottom-[2rem]',
          'max-md:static right-[2rem] bottom-[2rem]',
        ]"
      >
        0{{ n }} 2025
      </p>
    </div>
    <NuxtImg src="/bgs/radmap-item.svg" class="object-cover h-full w-full" />
  </div>
</template>
